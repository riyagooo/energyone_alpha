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
                      <router-link class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400" to="/dashboard/onboarding/step-3">3</router-link>
                    </li>
                    <li>
                      <router-link class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400" to="/dashboard/onboarding/step-4">4</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="px-4 py-8">
            <div class="max-w-md mx-auto">

              <h1 class="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">Investment Preferences</h1>
              
              <!-- Form -->
              <form @submit.prevent="nextStep">
                <div class="space-y-6">
                  <!-- Investment stage -->
                  <div>
                    <label class="block text-sm font-medium mb-1" for="investment-stage">Investment Stage</label>
                    <select id="investment-stage" class="form-select w-full" v-model="stage">
                      <option>Pre-seed / Seed</option>
                      <option>Series A</option>
                      <option>Series B</option>
                      <option>Growth Stage</option>
                      <option>Mature / Operational</option>
                    </select>
                  </div>
                  
                  <!-- Target Return -->
                  <div>
                    <label class="block text-sm font-medium mb-1" for="target-return">Target Annual Return</label>
                    <select id="target-return" class="form-select w-full" v-model="targetReturn">
                      <option>5-10%</option>
                      <option>10-15%</option>
                      <option>15-20%</option>
                      <option>20%+</option>
                    </select>
                  </div>
                  
                  <!-- Investment Horizon -->
                  <div>
                    <label class="block text-sm font-medium mb-1" for="investment-horizon">Investment Horizon</label>
                    <select id="investment-horizon" class="form-select w-full" v-model="horizon">
                      <option>Short term (1-3 years)</option>
                      <option>Medium term (3-7 years)</option>
                      <option>Long term (7+ years)</option>
                    </select>
                  </div>
                  
                  <!-- Risk Tolerance -->
                  <div>
                    <label class="block text-sm font-medium mb-1" for="risk-tolerance">Risk Tolerance</label>
                    <select id="risk-tolerance" class="form-select w-full" v-model="riskTolerance">
                      <option>Conservative</option>
                      <option>Moderate</option>
                      <option>Aggressive</option>
                    </select>
                  </div>
                </div>
                
                <!-- Footer -->
                <div class="mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div class="flex justify-between">
                    <button type="button" @click="prevStep" class="text-sm underline hover:no-underline">&lt;- Back</button>
                    <button type="submit" class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-auto">Next Step -&gt;</button>
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
import { ref } from 'vue'
import { useOnboardingStore } from '@/store/modules/onboarding'
import { useRouter } from 'vue-router'

export default {
  name: 'Onboarding02',
  setup() {
    const router = useRouter()
    const onboardingStore = useOnboardingStore()
    
    // Form fields with default values
    const stage = ref('Pre-seed / Seed')
    const targetReturn = ref('10-15%')
    const horizon = ref('Medium term (3-7 years)')
    const riskTolerance = ref('Moderate')
    
    // Go back to previous step
    const prevStep = () => {
      router.push('/dashboard/onboarding/step-1')
    }
    
    // Save values to store and proceed to next step
    const nextStep = () => {
      // Save all preferences
      onboardingStore.setInvestmentStage(stage.value)
      onboardingStore.setTargetReturn(targetReturn.value)
      onboardingStore.setInvestmentHorizon(horizon.value)
      onboardingStore.setRiskTolerance(riskTolerance.value)
      
      // Navigate to next step
      router.push('/dashboard/onboarding/step-3')
    }
    
    return {
      stage,
      targetReturn,
      horizon,
      riskTolerance,
      prevStep,
      nextStep
    }
  }
}
</script>