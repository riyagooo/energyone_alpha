<!-- src/apps/mosaic/src/pages/settings/Settings.vue -->
<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white dark:bg-slate-800 shadow rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <h2 class="text-lg font-medium text-slate-900 dark:text-slate-100">Settings</h2>
        
        <!-- Settings Navigation -->
        <nav class="mt-6">
          <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <router-link 
                to="/settings/account" 
                class="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600"
              >
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <svg class="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-slate-900 dark:text-slate-100">Account</p>
                    <p class="text-sm text-slate-500 dark:text-slate-400">Manage your account settings</p>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link 
                to="/settings/notifications" 
                class="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600"
              >
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <svg class="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-slate-900 dark:text-slate-100">Notifications</p>
                    <p class="text-sm text-slate-500 dark:text-slate-400">Configure notification preferences</p>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link 
                to="/settings/billing" 
                class="block p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600"
              >
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <svg class="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-slate-900 dark:text-slate-100">Billing</p>
                    <p class="text-sm text-slate-500 dark:text-slate-400">Manage billing and subscription</p>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings'
}
</script> 