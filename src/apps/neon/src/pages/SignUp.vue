<template>
  <div class="flex flex-col min-h-screen overflow-hidden sign-up-container">

    <!-- Site header -->
    <header class="absolute w-full z-30">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16 md:h-20">

          <!-- Site branding -->
          <div class="shrink-0 mr-4">
            <!-- Logo -->
            <router-link class="block" to="/" aria-label="EnergyOne">
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
            </router-link>
          </div>

        </div>
      </div>
    </header>

    <main class="relative grow flex">

      <!-- Content -->
      <div class="w-full bg-gray-900">

        <div class="h-full flex flex-col justify-center before:min-h-[4rem] md:before:min-h-[5rem] before:flex-1 after:flex-1">

          <div class="px-4 sm:px-6">
            <div class="w-full max-w-sm mx-auto">
              <div class="py-16 md:py-20">

                <div class="mb-8">
                  <h1 class="h2 font-uncut-sans">Sign Up</h1>
                </div>

                <!-- Form -->
                <form @submit.prevent="handleSubmit" class="interactive-form">
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm text-gray-400 font-medium mb-1" for="email">Email <span class="text-pink-500">*</span></label>
                      <input 
                        id="email" 
                        v-model="form.email"
                        class="form-input py-2 w-full interactive-element" 
                        type="email" 
                        required 
                        style="z-index: 10;"
                      />
                    </div>
                    <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                      <div class="sm:w-1/2">
                        <label class="block text-sm text-gray-400 font-medium mb-1" for="name">Name <span class="text-pink-500">*</span></label>
                        <input 
                          id="name" 
                          v-model="form.name"
                          class="form-input py-2 w-full interactive-element" 
                          type="text" 
                          required 
                          style="z-index: 10;"
                        />
                      </div>
                      <div class="sm:w-1/2">
                        <label class="block text-sm text-gray-400 font-medium mb-1" for="surname">Surname <span class="text-pink-500">*</span></label>
                        <input 
                          id="surname" 
                          v-model="form.surname"
                          class="form-input py-2 w-full interactive-element" 
                          type="text" 
                          required 
                          style="z-index: 10;"
                        />
                      </div>
                    </div>
                    <div>
                      <label class="block text-sm text-gray-400 font-medium mb-1" for="password">Password</label>
                      <input 
                        id="password" 
                        v-model="form.password"
                        class="form-input py-2 w-full interactive-element" 
                        type="password" 
                        autocomplete="on" 
                        required 
                        style="z-index: 10;"
                      />
                    </div>
                    <div>
                      <label class="block text-sm text-gray-400 font-medium mb-1" for="confirmPassword">Confirm Password</label>
                      <input 
                        id="confirmPassword" 
                        v-model="form.confirmPassword"
                        class="form-input py-2 w-full interactive-element" 
                        type="password" 
                        autocomplete="on" 
                        required 
                        style="z-index: 10;"
                      />
                    </div>
                  </div>
                  <div v-if="passwordMismatch || signUpError" class="text-red-500 text-sm mt-2">
                    {{ signUpError || "Passwords don't match" }}
                  </div>
                  <div class="mt-6">
                    <button 
                      type="submit"
                      class="btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group interactive-element"
                      :disabled="loading"
                      style="z-index: 10;"
                    >
                      <span v-if="loading">Loading...</span>
                      <span v-else>Sign Up <span class="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></span>
                    </button>
                  </div>
                  <div class="mt-4 text-center">
                    <p class="text-sm text-gray-400 mb-2">For testing purposes:</p>
                    <button 
                      @click="directToDashboard" 
                      class="text-sm font-medium text-blue-500 hover:text-blue-400 interactive-element"
                      style="z-index: 10;"
                    >
                      Skip sign up and go directly to dashboard
                    </button>
                  </div>
                </form>

                <!-- Divider -->
                <div class="flex items-center my-6">
                  <div class="border-t border-gray-800 grow mr-3" aria-hidden="true"></div>
                  <div class="text-sm text-gray-400 italic">Or</div>
                  <div class="border-t border-gray-800 grow ml-3" aria-hidden="true"></div>
                </div>

                <!-- Social login -->
                <button class="btn-sm text-white bg-gradient-to-t from-pink-500 to-pink-400 hover:to-pink-500 w-full relative flex after:flex-1 interactive-element" style="z-index: 10;">
                  <div class="flex-1 flex items-center">
                    <svg class="w-4 h-4 fill-current text-pink-200 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.679 6.545H8.043v3.273h4.328c-.692 2.182-2.401 2.91-4.363 2.91a4.727 4.727 0 1 1 3.035-8.347l2.378-2.265A8 8 0 1 0 8.008 16c4.41 0 8.4-2.909 7.67-9.455Z" />
                    </svg>
                  </div>
                  <span class="flex-auto text-pink-50 pl-3">Continue With Google</span>
                </button>

                <div class="text-sm text-gray-500 italic mt-6 mb-4">
                  By filling out this form, I consent to the collection and use of my personal data.
                </div>

                <div class="pt-4 border-t border-gray-800">
                  <div class="text-sm text-gray-400">
                    Already have an account? <router-link class="font-medium text-blue-500 hover:text-blue-400 interactive-element" to="/signin" style="z-index: 10;">Sign In</router-link>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- Right side -->
      <div class="hidden lg:block shrink-0 w-1/3 overflow-hidden before:bg-gray-800 before:absolute before:inset-0 before:-z-10">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-20"></div>
      </div>

    </main>

  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/modules/auth'

export default {
  name: 'SignUp',
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()
    const form = ref({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false
    })
    const loading = ref(false)
    const signUpError = ref(null)
    const passwordMismatch = ref(false)

    const handleSubmit = async () => {
      console.log('Form submitted with:', form.value)
      loading.value = true
      signUpError.value = null
      
      // Check passwords match
      if (form.value.password !== form.value.confirmPassword) {
        passwordMismatch.value = true
        signUpError.value = 'Passwords do not match'
        loading.value = false
        return
      }
      
      passwordMismatch.value = false
      
      try {
        // Call the auth store signup method
        await authStore.signUp(form.value.email, form.value.password, form.value.name)
        
        console.log('Sign-up successful, redirecting to onboarding')
        
        // Redirect to first onboarding step using Vue Router
        router.push('/dashboard/onboarding/step-1')
      } catch (error) {
        console.error('Sign up failed:', error)
        signUpError.value = error.message || 'Could not create account. Please try again.'
      } finally {
        loading.value = false
      }
    }

    const directToDashboard = (e) => {
      // Prevent default behavior
      if (e) e.preventDefault()
      
      // For testing - manually set auth state
      authStore.user = {
        id: '1',
        email: 'test@example.com',
        name: 'Test User'
      }
      authStore.isAuthenticated = true
      authStore.isNewUser = false
      
      console.log('Direct to dashboard: Auth set, navigating...')
      
      // Use Vue Router for navigation
      router.push('/dashboard')
    }

    return {
      authStore,
      form,
      loading,
      signUpError,
      passwordMismatch,
      handleSubmit,
      directToDashboard
    }
  }
}
</script>

<style scoped>
.sign-up-container {
  position: relative;
  z-index: 20;
}

.interactive-form {
  position: relative;
  z-index: 30;
  pointer-events: auto !important;
}

.interactive-element {
  position: relative;
  z-index: 40;
  pointer-events: auto !important;
}
</style>