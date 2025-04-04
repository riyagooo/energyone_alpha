<template>
  <main class="bg-white dark:bg-slate-900">

    <div class="relative flex">

      <!-- Content -->
      <div class="w-full md:w-1/2">

        <div class="min-h-[100dvh] h-full flex flex-col after:flex-1">

          <div class="flex-1">

            <!-- Header -->
            <div class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
              <!-- Logo -->
              <router-link class="block" to="/">
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <defs>
                    <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                      <stop stop-color="#A5B4FC" stop-opacity="0" offset="0%" />
                      <stop stop-color="#A5B4FC" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                      <stop stop-color="#38BDF8" stop-opacity="0" offset="0%" />
                      <stop stop-color="#38BDF8" offset="100%" />
                    </linearGradient>
                  </defs>
                  <rect fill="#6366F1" width="32" height="32" rx="16" />
                  <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
                  <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#logo-a)" />
                  <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#logo-b)" />
                </svg>
              </router-link>
              <div class="text-sm">
                Have an account? <router-link class="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" to="/signin">Sign In</router-link>
              </div>
            </div>

            <!-- Progress bar -->
            <div class="px-4 pt-12 pb-8">
              <div class="max-w-md mx-auto w-full">
                <div class="relative">
                  <div class="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200 dark:bg-slate-700" aria-hidden="true"></div>
                  <ul class="relative flex justify-between w-full">
                    <li>
                      <router-link class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white" to="/dashboard/onboarding/step-1">1</router-link>
                    </li>
                    <li>
                      <router-link class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white" to="/dashboard/onboarding/step-2">2</router-link>
                    </li>
                    <li>
                      <router-link class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white" to="/dashboard/onboarding/step-3">3</router-link>
                    </li>
                    <li>
                      <router-link class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white" to="/dashboard/onboarding/step-4">4</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="px-4 py-8">
            <div class="max-w-md mx-auto">

              <h1 class="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">Geographic Preferences</h1>
              
              <!-- Form -->
              <form @submit.prevent="finishOnboarding">
                <div class="space-y-6">
                  <!-- Primary Region -->
                  <div>
                    <label class="block text-sm font-medium mb-1" for="primary-region">Primary Investment Region</label>
                    <select id="primary-region" class="form-select w-full" v-model="primaryRegion">
                      <option>North America</option>
                      <option>Europe</option>
                      <option>Asia-Pacific</option>
                      <option>Latin America</option>
                      <option>Middle East & Africa</option>
                      <option>Global (No specific preference)</option>
                    </select>
                  </div>
                  
                  <!-- Target Countries -->
                  <div>
                    <label class="block text-sm font-medium mb-3">Target Countries (select up to 5)</label>
                    <div class="grid grid-cols-2 gap-2">
                      <label class="flex items-center">
                        <input type="checkbox" class="form-checkbox" v-model="countries.usa" />
                        <span class="text-sm ml-2">USA</span>
                      </label>
                      <label class="flex items-center">
                        <input type="checkbox" class="form-checkbox" v-model="countries.canada" />
                        <span class="text-sm ml-2">Canada</span>
                      </label>
                      <label class="flex items-center">
                        <input type="checkbox" class="form-checkbox" v-model="countries.uk" />
                        <span class="text-sm ml-2">United Kingdom</span>
                      </label>
                      <label class="flex items-center">
                        <input type="checkbox" class="form-checkbox" v-model="countries.germany" />
                        <span class="text-sm ml-2">Germany</span>
                      </label>
                      <label class="flex items-center">
                        <input type="checkbox" class="form-checkbox" v-model="countries.france" />
                        <span class="text-sm ml-2">France</span>
                      </label>
                      <label class="flex items-center">
                        <input type="checkbox" class="form-checkbox" v-model="countries.spain" />
                        <span class="text-sm ml-2">Spain</span>
                      </label>
                      <label class="flex items-center">
                        <input type="checkbox" class="form-checkbox" v-model="countries.italy" />
                        <span class="text-sm ml-2">Italy</span>
                      </label>
                      <label class="flex items-center">
                        <input type="checkbox" class="form-checkbox" v-model="countries.australia" />
                        <span class="text-sm ml-2">Australia</span>
                      </label>
                      <label class="flex items-center">
                        <input type="checkbox" class="form-checkbox" v-model="countries.india" />
                        <span class="text-sm ml-2">India</span>
                      </label>
                      <label class="flex items-center">
                        <input type="checkbox" class="form-checkbox" v-model="countries.brazil" />
                        <span class="text-sm ml-2">Brazil</span>
                      </label>
                    </div>
                  </div>
                  
                  <!-- Regulatory Preference -->
                  <div>
                    <label class="block text-sm font-medium mb-1" for="regulatory-pref">Regulatory Environment Preference</label>
                    <select id="regulatory-pref" class="form-select w-full" v-model="regulatoryPreference">
                      <option>Strong incentives & subsidies</option>
                      <option>Stable regulatory framework</option>
                      <option>Growing market regardless of incentives</option>
                      <option>No specific preference</option>
                    </select>
                  </div>
                  
                  <!-- Notification Preferences -->
                  <div>
                    <span class="block text-sm font-medium mb-2">Notification Preferences</span>
                    <label class="flex items-center mb-2">
                      <input type="checkbox" class="form-checkbox" v-model="notifications.newProjects" />
                      <span class="text-sm ml-2">New project opportunities</span>
                    </label>
                    <label class="flex items-center mb-2">
                      <input type="checkbox" class="form-checkbox" v-model="notifications.marketUpdates" />
                      <span class="text-sm ml-2">Market updates & news</span>
                    </label>
                    <label class="flex items-center mb-2">
                      <input type="checkbox" class="form-checkbox" v-model="notifications.portfolioAlerts" />
                      <span class="text-sm ml-2">Portfolio performance alerts</span>
                    </label>
                  </div>
                </div>

                <!-- Footer -->
                <div class="mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div class="flex justify-between">
                    <button type="button" @click="prevStep" class="btn border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300">&lt;- Back</button>
                    <button type="submit" class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-auto">Complete Setup -&gt;</button>
                  </div>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>

      <!-- Image -->
      <div class="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
        <img class="object-cover object-center w-full h-full" src="../images/onboarding-image.jpg" width="760" height="1024" alt="Onboarding" />
        <img class="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block" src="../images/auth-decoration.png" width="218" height="224" alt="Authentication decoration" />
      </div>

    </div>

  </main>
</template>

<script>
import { ref, reactive } from 'vue'
import { useOnboardingStore } from '@/store/modules/onboarding'
import { useAuthStore } from '@/store/modules/auth'
import { useRouter } from 'vue-router'

export default {
  name: 'Onboarding04',
  setup() {
    const router = useRouter()
    const onboardingStore = useOnboardingStore()
    const authStore = useAuthStore()
    
    // Form data with defaults
    const primaryRegion = ref('North America')
    const countries = reactive({
      usa: true,
      canada: true,
      uk: false,
      germany: false,
      france: false,
      spain: false,
      italy: false,
      australia: false,
      india: false,
      brazil: false
    })
    const regulatoryPreference = ref('Stable regulatory framework')
    const notifications = reactive({
      newProjects: true,
      marketUpdates: true, 
      portfolioAlerts: true
    })
    
    // Go back to previous step
    const prevStep = () => {
      router.push('/dashboard/onboarding/step-3')
    }
    
    // Finalize onboarding and redirect to dashboard
    const finishOnboarding = () => {
      // Save geographic preferences
      onboardingStore.setPrimaryRegion(primaryRegion.value)
      onboardingStore.setTargetCountries(countries)
      onboardingStore.setRegulatoryPreference(regulatoryPreference.value)
      onboardingStore.setNotificationPreferences(notifications)
      
      // Mark onboarding as complete
      onboardingStore.completeOnboarding()
      
      // Update user status
      authStore.isNewUser = false
      
      // Redirect to main dashboard
      router.push('/dashboard')
    }
    
    return {
      primaryRegion,
      countries,
      regulatoryPreference,
      notifications,
      prevStep,
      finishOnboarding
    }
  }
}
</script>