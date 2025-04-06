<!-- src/apps/neon/NeonLayout.vue -->
<template>
  <div class="min-h-screen min-h-[calc(var(--vh,1vh)*100)] w-full bg-slate-900 flex flex-col">
    <!-- Header -->
    <header class="bg-slate-900 shadow-sm sticky top-0 z-50 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="flex justify-between h-16 items-center">
          <div class="flex">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center">
              <router-link to="/" class="flex items-center">
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
                <span class="text-xl font-bold text-blue-400 ml-2">EnergyOne</span>
              </router-link>
            </div>
          </div>
          
          <!-- Mobile menu button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            class="md:hidden text-slate-300 hover:text-white focus:outline-none"
          >
            <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div class="hidden md:flex items-center">
            <!-- Desktop Navigation -->
            <nav class="flex space-x-4 sm:space-x-8">
              <router-link 
                to="/" 
                class="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                active-class="text-white bg-slate-800"
              >
                Home
              </router-link>
              <router-link 
                to="/signin" 
                class="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                active-class="text-white bg-slate-800"
              >
                Sign In
              </router-link>
              <router-link 
                to="/signup" 
                class="btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 shadow-lg group"
              >
                Sign Up <span class="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
              </router-link>
            </nav>
          </div>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-slate-800 pt-2 pb-3 border-t border-slate-700">
        <div class="px-2 space-y-1">
          <router-link 
            to="/" 
            class="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md"
            active-class="bg-slate-700 text-white"
            @click="mobileMenuOpen = false"
          >
            Home
          </router-link>
          <router-link 
            to="/signin" 
            class="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md"
            active-class="bg-slate-700 text-white"
            @click="mobileMenuOpen = false"
          >
            Sign In
          </router-link>
          <router-link 
            to="/signup" 
            class="block px-3 py-2 text-base font-medium text-center text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 rounded-md shadow-lg"
            @click="mobileMenuOpen = false"
          >
            Sign Up
          </router-link>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="dark w-full flex-grow">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-slate-800 w-full mt-auto">
      <div class="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <p class="text-center text-slate-400">
          &copy; 2025 EnergyOne. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { useAuthStore } from '../../store/modules/auth'
import { onMounted, ref } from 'vue'

export default {
  name: 'NeonLayout',
  setup() {
    const authStore = useAuthStore()
    const mobileMenuOpen = ref(false)
    
    onMounted(() => {
      // Force dark mode
      document.documentElement.classList.add('dark');
      
      // Ensure body takes full width
      document.body.classList.add('w-full', 'overflow-x-hidden');
    })
    
    return { 
      authStore,
      mobileMenuOpen
    }
  }
}
</script>

<style>
/* Add dark mode specific styles */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.dark {
  color-scheme: dark;
}

/* Make the buttons more visible in dark mode */
.btn-sm {
  @apply inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm;
}

/* Improve section padding on mobile */
section {
  @apply py-8 sm:py-12 md:py-16;
}

/* Consistent container sizing */
.max-w-7xl, .max-w-6xl, .max-w-5xl, .max-w-4xl, .max-w-3xl, .max-w-2xl, .max-w-xl {
  @apply w-full px-4 sm:px-6 lg:px-8 mx-auto;
}

/* Ensure images are responsive */
img {
  max-width: 100%;
  height: auto;
}

/* Improve spacing/layout on mobile */
@media (max-width: 640px) {
  .py-12 {
    @apply py-8;
  }
  
  .py-16 {
    @apply py-10;
  }
  
  .py-20 {
    @apply py-12;
  }
  
  .py-24 {
    @apply py-16;
  }
  
  /* Make headings smaller on mobile */
  h1, .h1 {
    @apply text-3xl;
  }
  
  h2, .h2 {
    @apply text-2xl;
  }
}
</style>