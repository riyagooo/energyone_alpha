<!-- src/layouts/DashboardLayout.vue -->
<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900">
    <!-- Sidebar -->
    <aside class="fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-800 shadow-lg">
      <div class="flex flex-col h-full">
        <!-- Logo -->
        <div class="flex items-center justify-center h-16 border-b border-slate-200 dark:border-slate-700">
          <router-link to="/" class="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            EnergyOne
          </router-link>
        </div>
        
        <!-- Navigation -->
        <nav class="flex-1 p-4">
          <ul class="space-y-2">
            <li>
              <a 
                href="javascript:void(0)" 
                @click="navigateTo('/dashboard')"
                class="flex items-center p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
                :class="{ 'bg-slate-100 dark:bg-slate-700': isCurrentPath('/dashboard') }"
              >
                <span class="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a 
                href="javascript:void(0)" 
                @click="navigateTo('/dashboard/analytics')"
                class="flex items-center p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
                :class="{ 'bg-slate-100 dark:bg-slate-700': isCurrentPath('/dashboard/analytics') }"
              >
                <span class="ml-3">Analytics</span>
              </a>
            </li>
            <li>
              <a 
                href="javascript:void(0)" 
                @click="navigateTo('/dashboard/fintech')"
                class="flex items-center p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
                :class="{ 'bg-slate-100 dark:bg-slate-700': isCurrentPath('/dashboard/fintech') }"
              >
                <span class="ml-3">Financial</span>
              </a>
            </li>
            <li>
              <a 
                href="javascript:void(0)" 
                @click="navigateTo('/dashboard/calendar')"
                class="flex items-center p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
                :class="{ 'bg-slate-100 dark:bg-slate-700': isCurrentPath('/dashboard/calendar') }"
              >
                <span class="ml-3">Calendar</span>
              </a>
            </li>
            <li>
              <a 
                href="javascript:void(0)" 
                @click="navigateTo('/dashboard/campaigns')"
                class="flex items-center p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
                :class="{ 'bg-slate-100 dark:bg-slate-700': isCurrentPath('/dashboard/campaigns') }"
              >
                <span class="ml-3">Campaigns</span>
              </a>
            </li>
            <li>
              <a 
                href="javascript:void(0)" 
                @click="navigateTo('/dashboard/messages')"
                class="flex items-center p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
                :class="{ 'bg-slate-100 dark:bg-slate-700': isCurrentPath('/dashboard/messages') }"
              >
                <span class="ml-3">Messages</span>
              </a>
            </li>
            <li>
              <a 
                href="javascript:void(0)" 
                @click="navigateTo('/dashboard/settings')"
                class="flex items-center p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
                :class="{ 'bg-slate-100 dark:bg-slate-700': isCurrentPath('/dashboard/settings') }"
              >
                <span class="ml-3">Settings</span>
              </a>
            </li>
          </ul>
        </nav>
        
        <!-- Sign Out -->
        <div class="p-4 border-t border-slate-200 dark:border-slate-700">
          <button 
            @click="signOut" 
            class="w-full flex items-center justify-center p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
          >
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="ml-64">
      <!-- Header -->
      <header class="h-16 bg-white dark:bg-slate-800 shadow-sm">
        <div class="flex items-center justify-between h-full px-6">
          <h1 class="text-xl font-semibold text-slate-800 dark:text-slate-200">
            {{ $route.meta.title || 'Dashboard' }}
          </h1>
          <div class="flex items-center space-x-4">
            <!-- User info -->
            <div v-if="authStore.currentUser" class="text-sm text-slate-600 dark:text-slate-300">
              Welcome, {{ authStore.currentUser.name }}
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/store/modules/auth'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'DashboardLayout',
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()
    const route = useRoute()
    
    const signOut = () => {
      authStore.signOut()
      // Redirect to home using Vue Router
      router.push('/')
    }
    
    const navigateTo = (path) => {
      console.log('Navigating to:', path)
      router.push(path)
    }
    
    const isCurrentPath = (path) => {
      return route.path === path
    }
    
    return {
      authStore,
      signOut,
      navigateTo,
      isCurrentPath
    }
  }
}
</script> 