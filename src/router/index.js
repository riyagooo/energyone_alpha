// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/modules/auth'
import { useOnboardingStore } from '@/store/modules/onboarding'

// Import Neon (public) routes
import neonRoutes from '@/apps/neon/router'

// Import Mosaic (dashboard) routes
import mosaicRoutes from '@/apps/mosaic/router'

// Create a unified router
const routes = [
  // Public routes from Neon (landing pages, auth, etc.)
  ...neonRoutes,
  
  // Protected routes from Mosaic (dashboard)
  {
    path: '/dashboard',
    component: () => import('@/layouts/DashboardLayout.vue'),
    meta: { requiresAuth: true },
    children: mosaicRoutes
  },
  
  // Catch-all route redirects to home
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard to check authentication for protected routes
router.beforeEach((to, from, next) => {
  try {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const authStore = useAuthStore()
    const onboardingStore = useOnboardingStore()
    const isAuthenticated = authStore.isAuthenticated
    const isNewUser = authStore.isNewUser
    const onboardingCompleted = onboardingStore.onboardingCompleted
    
    console.log(`Navigation to ${to.path}:`)
    console.log(`- requiresAuth: ${requiresAuth}`)
    console.log(`- isAuthenticated: ${isAuthenticated}`)
    console.log(`- isNewUser: ${isNewUser}`)
    console.log(`- onboardingCompleted: ${onboardingCompleted}`)
    
    // For development, allow direct dashboard access
    const isDev = process.env.NODE_ENV === 'development'
    
    if (requiresAuth && !isAuthenticated && !isDev) {
      // If auth required but user is not authenticated, redirect to signin
      console.log('Auth required but not authenticated, redirecting to signin')
      next('/signin')
    } else if (isAuthenticated && isNewUser && !to.path.includes('/onboarding/') && !onboardingCompleted) {
      // If user is new and has not completed onboarding, redirect to first onboarding step
      console.log('New user detected, redirecting to onboarding')
      next('/dashboard/onboarding/step-1')
    } else {
      // Otherwise allow navigation
      console.log('Navigation allowed')
      next()
    }
  } catch (error) {
    console.error('Navigation guard error:', error)
    // In case of errors in the navigation guard, default to allowing the navigation
    next()
  }
})

export default router