<template>
  <div>
    <!-- Hero -->
    <section class="relative">
      <!-- Background gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 pointer-events-none -z-10" aria-hidden="true"></div>
      <!-- Illustration -->
      <div class="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6 -z-10" aria-hidden="true">
        <svg class="absolute inset-y-0 right-0 translate-x-1/2 h-screen text-gray-800" width="1027" height="736" fill="none" viewBox="0 0 1027 736">
          <path d="M1027 0H741.037L579.230 184.475C454.873 286.936 255.857 281.646 137.520 173.111L0 49.398V736H1027V0Z" fill="currentColor" />
        </svg>
      </div>
      
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-32 pb-16 md:pt-52 md:pb-32">
          <!-- Hero content -->
          <div class="max-w-3xl mx-auto text-center">
            <div class="mb-6" data-aos="fade-down">
              <div class="inline-flex bg-clip-text text-transparent bg-gradient-to-r from-neon-primary to-teal-500 font-medium">The renewable energy investment platform</div>
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8" data-aos="fade-down">EnergyOne: Invest in a sustainable future</h1>
            <div class="max-w-2xl mx-auto mb-10" data-aos="fade-down" data-aos-delay="150">
              <p class="text-xl text-slate-300">Manage your renewable energy investments and track their performance from a single dashboard.</p>
            </div>
            <div class="flex justify-center max-w-xs mx-auto sm:max-w-none sm:flex space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-20" data-aos="fade-down" data-aos-delay="300">
              <div>
                <router-link to="/signup" class="btn text-white bg-neon-primary hover:bg-blue-600 w-full shadow group">Get Started <span class="tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></router-link>
              </div>
              <div>
                <button @click="directToDashboard" class="btn text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600 w-full shadow">Access Dashboard</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section>
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="py-12 md:py-20">
          <!-- Section header -->
          <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 class="h2 font-uncut-sans text-slate-800 mb-6">Explore the features you'll love</h2>
            <p class="text-xl text-slate-500">EnergyOne gives you the tools to manage your renewable energy investments efficiently and with complete transparency.</p>
          </div>

          <!-- Content blocks -->
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <!-- Feature block 1 -->
            <div class="relative p-6 bg-slate-50 rounded-lg" data-aos="fade-up">
              <svg class="w-12 h-12 mb-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <circle class="fill-blue-100" cx="24" cy="24" r="24" />
                <path class="fill-blue-600" d="M24 11.6c-6.9 0-12.4 5.6-12.4 12.4 0 6.9 5.6 12.4 12.4 12.4 6.9 0 12.4-5.6 12.4-12.4 0-6.9-5.6-12.4-12.4-12.4Zm0 22.4c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10Z" />
                <path class="fill-blue-600" d="M24 17c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7Z" />
              </svg>
              <h3 class="h4 font-uncut-sans mb-2">Portfolio Management</h3>
              <p class="text-slate-500">Track your investments in solar, wind, and energy storage projects from a single dashboard.</p>
            </div>

            <!-- Feature block 2 -->
            <div class="relative p-6 bg-slate-50 rounded-lg" data-aos="fade-up" data-aos-delay="100">
              <svg class="w-12 h-12 mb-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <circle class="fill-blue-100" cx="24" cy="24" r="24" />
                <path class="fill-blue-600" d="M20.5 22.6h-5c-.7 0-1.3-.6-1.3-1.3v-5c0-.7.6-1.3 1.3-1.3h5c.7 0 1.3.6 1.3 1.3v5c0 .7-.6 1.3-1.3 1.3Zm-5-5.3v4h4v-4h-4Z" />
                <path class="fill-blue-600" d="M32.5 22.6h-5c-.7 0-1.3-.6-1.3-1.3v-5c0-.7.6-1.3 1.3-1.3h5c.7 0 1.3.6 1.3 1.3v5c0 .7-.6 1.3-1.3 1.3Zm-4-5.3h-1v4h4v-1h-3v-3Z" />
                <path class="fill-blue-600" d="M28.5 34.6h-9c-.7 0-1.3-.6-1.3-1.3v-5c0-.7.6-1.3 1.3-1.3h9c.7 0 1.3.6 1.3 1.3v5c0 .7-.6 1.3-1.3 1.3Zm-9-5.3v4h8v-4h-8Z" />
                <path class="fill-blue-600" d="M20.5 22.6h-5c-.7 0-1.3-.6-1.3-1.3v-5c0-.7.6-1.3 1.3-1.3h5c.7 0 1.3.6 1.3 1.3v5c0 .7-.6 1.3-1.3 1.3Zm-5-5.3v4h4v-4h-4Z" />
                <path class="fill-blue-600" d="M32.5 22.6h-5c-.7 0-1.3-.6-1.3-1.3v-5c0-.7.6-1.3 1.3-1.3h5c.7 0 1.3.6 1.3 1.3v5c0 .7-.6 1.3-1.3 1.3Zm-4-5.3h-1v4h4v-1h-3v-3Z" />
                <path class="fill-blue-600" d="M28.5 34.6h-9c-.7 0-1.3-.6-1.3-1.3v-5c0-.7.6-1.3 1.3-1.3h9c.7 0 1.3.6 1.3 1.3v5c0 .7-.6 1.3-1.3 1.3Zm-9-5.3v4h8v-4h-8Z" />
              </svg>
              <h3 class="h4 font-uncut-sans mb-2">Performance Tracking</h3>
              <p class="text-slate-500">Monitor real-time energy production and financial returns across your entire portfolio.</p>
            </div>

            <!-- Feature block 3 -->
            <div class="relative p-6 bg-slate-50 rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <svg class="w-12 h-12 mb-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <circle class="fill-blue-100" cx="24" cy="24" r="24" />
                <path class="fill-blue-600" d="M33.3 14.7c-.1-.1-.1-.2-.2-.3-.3-.2-.8-.1-1 .3-.9 1.7-2.5 1.5-3.7.9-1.3-.6-2.4-2.1-1.6-3.9 0-.1.1-.3 0-.4-.1-.2-.2-.3-.4-.3-.4-.1-1-.1-1.5-.1-7.1.1-12.9 5.9-13 13-.1 4.9 2.7 9.1 6.8 11.3.2.1.3.2.5.1s.3-.2.3-.4c.3-1.9 1.8-3.1 3.4-3.2.3 0 .6 0 .8.1h.2c1.5.6 2.5 2.2 2.1 3.8 0 .2 0 .4.1.5.1.1.3.2.4.1 4.1-2.1 7-6.3 7-11.2.1-3.7-1.3-7.1-3.6-9.6.8.9 1 2.2.3 3.4-.7 1.3-2.4 1.9-3.8 1.3-1.5-.6-2.4-2.4-1.4-4 .2-.3.3-.6.2-.8-.1-.2-.4-.3-.7-.2-5.4 1.7-9.2 6.7-9.2 12.5v.2c0 .3.3.5.6.4 1.8-.8 3.9-.2 4.9 1.5.1.1.2.2.3.2.2 0 .3-.1.4-.2.5-1.9 2.4-3.1 4.3-2.6 1.9.4 3.1 2.3 2.7 4.2 0 .2 0 .5.2.6.1.1.3.1.4 0 5.9-3.6 8.3-11 5.4-17.3-.3 1.5-1.6 2.4-3.1 2.4h-.2c-1.5-.2-2.8-1.6-2.6-3.2.1-1.5 1.4-2.7 3-2.6.3 0 .6.1.8.1.1 0 .3 0 .4-.1.1-.2.1-.3.2-.5-.3-.5-.4-.7-.6-.9Z" />
              </svg>
              <h3 class="h4 font-uncut-sans mb-2">Impact Measurement</h3>
              <p class="text-slate-500">See your environmental impact in real-time with CO₂ reduction metrics and sustainability reports.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works section -->
    <section class="bg-slate-50 py-12 md:py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 font-uncut-sans text-slate-800 mb-6">How EnergyOne Works</h2>
          <p class="text-xl text-slate-500">A simple three-step process to begin your renewable energy investment journey</p>
        </div>
        
        <div class="grid gap-8 md:grid-cols-3">
          <!-- Step 1 -->
          <div class="bg-white p-6 rounded-lg shadow-sm text-center">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 class="h4 font-uncut-sans mb-2">Create an Account</h3>
            <p class="text-slate-500 mb-4">Sign up for EnergyOne to access the dashboard and explore investment opportunities.</p>
            <router-link to="/signup" class="text-blue-600 font-medium hover:text-blue-500">Sign Up Now</router-link>
          </div>
          
          <!-- Step 2 -->
          <div class="bg-white p-6 rounded-lg shadow-sm text-center">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 class="h4 font-uncut-sans mb-2">Sign In</h3>
            <p class="text-slate-500 mb-4">Log in to access your personalized Mosaic dashboard with all your investment data.</p>
            <router-link to="/signin" class="text-blue-600 font-medium hover:text-blue-500">Sign In</router-link>
          </div>
          
          <!-- Step 3 -->
          <div class="bg-white p-6 rounded-lg shadow-sm text-center">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 class="h4 font-uncut-sans mb-2">Manage Portfolio</h3>
            <p class="text-slate-500 mb-4">Track performance, monitor impact, and manage your renewable energy investments.</p>
            <button @click="directToDashboard" class="text-blue-600 font-medium hover:text-blue-500">Access Dashboard</button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section>
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="relative px-8 py-12 md:py-20 bg-slate-800 rounded-lg">
          <!-- Background gradient -->
          <div class="absolute inset-0 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 -z-10" aria-hidden="true"></div>

          <div class="relative max-w-3xl mx-auto text-center">
            <h2 class="h2 font-uncut-sans text-slate-100 mb-4">Ready to start investing in renewable energy?</h2>
            <p class="text-xl text-slate-400 mb-8">Join thousands of investors making a difference with EnergyOne.</p>
            <div class="flex justify-center max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div>
                <router-link to="/signup" class="btn text-white bg-neon-primary hover:bg-blue-600 w-full shadow">Create Account</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useAuthStore } from '@/store/modules/auth'
import { useRouter } from 'vue-router'

export default {
  name: 'Home',
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()
    
    const directToDashboard = () => {
      // Set auth state for testing
      authStore.user = {
        id: '1',
        email: 'test@example.com',
        name: 'Test User'
      }
      authStore.isAuthenticated = true
      authStore.isNewUser = false
      
      console.log('Redirecting to dashboard using Vue Router')
      
      // Use Vue Router for navigation
      router.push('/dashboard')
    }
    
    return {
      directToDashboard
    }
  }
}
</script>

<style>
.btn {
  @apply inline-flex items-center justify-center rounded-lg border border-transparent px-4 py-3 text-base font-medium transition duration-150 ease-in-out;
}

.btn-sm {
  @apply inline-flex items-center justify-center rounded-lg border border-transparent px-3 py-2 text-sm font-medium transition duration-150 ease-in-out;
}

.h2 {
  @apply text-3xl md:text-4xl font-bold;
}

.h4 {
  @apply text-xl font-bold;
}
</style>