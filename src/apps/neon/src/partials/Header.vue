<template>
  <header class="fixed w-full z-30 bg-slate-900/90 backdrop-blur-sm">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="shrink-0 mr-4">
          <!-- Logo -->
          <router-link class="flex items-center" to="/" aria-label="EnergyOne">
            <svg class="w-8 h-8" viewBox="0 0 32 32" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="108.567%" gradientTransform="matrix(-.00915 -.82755 .99996 -.00757 -.394 1.319)" id="logo1-b">
                  <stop stop-color="#3B82F6" stop-opacity=".64" offset="0%" />
                  <stop stop-color="#F472B6" stop-opacity=".876" offset="100%" />
                </radialGradient>
                <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="108.567%" gradientTransform="matrix(-.00915 -.82755 .99996 -.00757 -.394 1.319)" id="logo1-d">
                  <stop stop-color="#3B82F6" stop-opacity=".64" offset="0%" />
                  <stop stop-color="#D375C2" stop-opacity=".833" offset="50.358%" />
                  <stop stop-color="#FBCFE8" stop-opacity=".876" offset="100%" />
                </radialGradient>
                <path d="M12 32c8-6.915 12-12.582 12-17 0-6.627-5.373-12-12-12S0 8.373 0 15c0 4.418 4 10.085 12 17Z" id="logo1-a" />
                <path d="M20 29c8-6.915 12-12.582 12-17 0-6.627-5.373-12-12-12S8 5.373 8 12c0 4.418 4 10.085 12 17Z" id="logo1-c" />
              </defs>
              <g fill="none" fill-rule="evenodd">
                <use fill="url(#logo1-b)" opacity=".64" transform="matrix(1 0 0 -1 0 35)" xlink:href="#logo1-a" />
                <use fill="url(#logo1-d)" opacity=".961" xlink:href="#logo1-c" />
              </g>
            </svg>
            <span class="text-lg font-bold text-white ml-2 hidden sm:inline">EnergyOne</span>
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen" 
          class="md:hidden text-gray-300 hover:text-white"
        >
          <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex grow">
          <!-- Desktop sign in links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <li>
              <router-link class="font-medium text-gray-300 hover:text-blue-400 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" to="/signin">Sign in</router-link>
            </li>
            <li class="ml-3">
              <router-link class="btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group" to="/signup">
                Get Started <span class="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </router-link>
            </li>
          </ul>
        </nav>

      </div>
    </div>

    <!-- Mobile menu -->
    <div 
      v-if="mobileMenuOpen" 
      class="md:hidden bg-slate-800 border-t border-slate-700"
    >
      <div class="px-4 py-3 space-y-3">
        <router-link 
          @click="mobileMenuOpen = false"
          class="block w-full px-4 py-2 text-base font-medium text-center text-gray-300 hover:text-white hover:bg-slate-700 rounded-md" 
          to="/signin"
        >
          Sign in
        </router-link>
        <router-link 
          @click="mobileMenuOpen = false"
          class="block w-full px-4 py-2 text-base font-medium text-center text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 rounded-md shadow-lg" 
          to="/signup"
        >
          Get Started
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Header',
  setup() {
    const mobileMenuOpen = ref(false)
    
    return {
      mobileMenuOpen
    }
  }
}
</script>

<style scoped>
.btn-sm {
  @apply inline-flex items-center justify-center rounded-md border border-transparent px-3 py-2 text-sm font-medium transition duration-150 ease-in-out;
}
</style>