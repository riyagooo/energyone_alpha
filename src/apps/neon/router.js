// src/apps/neon/router.js
import NeonLayout from './NeonLayout.vue'

const routes = [
  {
    path: '/',
    component: NeonLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('./src/pages/Home.vue')
      },
      {
        path: 'signin',
        name: 'signin',
        component: () => import('./src/pages/SignIn.vue')
      },
      {
        path: 'signup',
        name: 'signup',
        component: () => import('./src/pages/SignUp.vue')
      },
      {
        path: 'reset-password',
        name: 'reset-password',
        component: () => import('./src/pages/ResetPassword.vue')
      }
    ]
  }
]

export default routes