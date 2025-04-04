<!-- src/apps/neon/NeonLayout.vue -->
<template>
  <div class="min-h-screen bg-white dark:bg-slate-900">
    <!-- Header -->
    <header class="bg-white dark:bg-slate-800 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center">
              <router-link to="/" class="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                EnergyOne
              </router-link>
            </div>
          </div>
          <div class="flex items-center">
            <!-- Navigation -->
            <nav class="flex space-x-8">
              <router-link 
                to="/" 
                class="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                Home
              </router-link>
              <router-link 
                to="/signin" 
                class="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                Sign In
              </router-link>
              <router-link 
                to="/signup" 
                class="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                Sign Up
              </router-link>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-white dark:bg-slate-800">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <p class="text-center text-slate-500 dark:text-slate-400">
          &copy; 2024 EnergyOne. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { useAuthStore } from '../../store/modules/auth'

export default {
  name: 'NeonLayout',
  setup() {
    const authStore = useAuthStore()
    return { authStore }
  }
}
</script>

<style>
/* Add any Neon-specific styles here */
.btn-sm {
  @apply inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm;
}
</style>