<template>
  <section class="relative">
    <!-- Gradient background -->
    <div class="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 pointer-events-none -z-10" aria-hidden="true"></div>
    
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
      
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <div class="inline-flex text-sm font-semibold py-1 px-4 m-2 text-indigo-200 bg-indigo-900/50 rounded-full mb-4">Smart Investment</div>
          <h2 class="h2 font-playfair-display text-white mb-4">Invest with Impact and Returns</h2>
          <p class="text-xl text-slate-400">EnergyOne combines financial returns with environmental impact through a transparent investment platform.</p>
        </div>

        <!-- Items -->
        <div class="grid gap-8 md:grid-cols-3 md:gap-8 lg:gap-16 items-start">
          
          <!-- 1st item -->
          <div class="relative flex flex-col items-center p-6 bg-slate-800/50 rounded-lg" data-aos="fade-up">
            <svg class="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle class="fill-current text-green-900" cx="32" cy="32" r="32" />
              <path class="fill-current text-green-400" d="M32 16c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm3 22h-6v-12h6v12zm-3-14a2 2 0 1 1 .001-4.001A2 2 0 0 1 32 24z" />
            </svg>
            <h3 class="h3 font-bold mb-2 text-white text-center">Transparent Reporting</h3>
            <p class="text-lg text-slate-400 text-center">Get real-time data on project performance, energy production, and financial returns directly on your dashboard.</p>
          </div>
          
          <!-- 2nd item -->
          <div class="relative flex flex-col items-center p-6 bg-slate-800/50 rounded-lg" data-aos="fade-up" data-aos-delay="100">
            <svg class="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle class="fill-current text-blue-900" cx="32" cy="32" r="32" />
              <path class="fill-current text-blue-400" d="M40 24c0 8.837-7.163 16-16 16a15.89 15.89 0 0 1-8.45-2.438l-8.439 8.439a3.34 3.34 0 0 0-.808 1.122c-.473 1.256-.052 2.722.848 3.622l.019.019c.9.9 2.367 1.322 3.623.849a3.34 3.34 0 0 0 1.122-.808l8.439-8.439A15.89 15.89 0 0 1 24 40c8.837 0 16-7.163 16-16 0-8.837-7.163-16-16-16S8 15.163 8 24c0 8.837 7.163 16 16 16" />
            </svg>
            <h3 class="h3 font-bold mb-2 text-white text-center">Diversified Portfolio</h3>
            <p class="text-lg text-slate-400 text-center">Spread your investment across multiple renewable energy projects and technologies to optimize returns and minimize risk.</p>
          </div>
          
          <!-- 3rd item -->
          <div class="relative flex flex-col items-center p-6 bg-slate-800/50 rounded-lg" data-aos="fade-up" data-aos-delay="200">
            <svg class="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle class="fill-current text-amber-900" cx="32" cy="32" r="32" />
              <path class="fill-current text-amber-400" d="M36.31 32.73c.03.15.07.29.07.44v7.83c0 .18-.3.39-.07.58-.46 2.05-2.3 3.42-4.41 3.42H22.69C20.57 45 18.72 43.63 18.2 41.58c-.04-.19-.11-.4-.11-.58v-7.83c0-.15 0-.29.07-.44.46-1.99 2.3-3.36 4.45-3.36h9.27c2.15 0 3.99 1.38 4.43 3.36ZM32 35a3 3 0 0 0-3 3c0 1.34.88 2.5 2.1 2.9.34.12.59.42.59.78v.64c0 .18.16.32.36.32h.06c.18 0 .3-.14.3-.32v-.64c0-.36.25-.66.59-.78A3.01 3.01 0 0 0 32 35Z" />
            </svg>
            <h3 class="h3 font-bold mb-2 text-white text-center">Impact Measurement</h3>
            <p class="text-lg text-slate-400 text-center">Track your environmental impact with detailed metrics on CO₂ emissions avoided, clean energy produced, and sustainability goals achieved.</p>
          </div>

        </div>

        <!-- Features list -->
        <div class="grid md:grid-cols-3 gap-6 md:gap-10 mt-12 sm:mt-16">
          <!-- Column 1 -->
          <div>
            <ul class="space-y-5">
              <li class="flex items-start p-4 bg-slate-800/30 rounded-lg">
                <svg class="w-3 h-3 fill-current text-green-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <div>
                  <div class="font-bold text-white mb-1">Detailed Project Analysis</div>
                  <div class="text-slate-400">Comprehensive information about each project's technology, location, and expected performance.</div>
                </div>
              </li>
              <li class="flex items-start p-4 bg-slate-800/30 rounded-lg">
                <svg class="w-3 h-3 fill-current text-green-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <div>
                  <div class="font-bold text-white mb-1">Flexible Investment Options</div>
                  <div class="text-slate-400">Choose your investment level with options starting from as little as $500.</div>
                </div>
              </li>
            </ul>
          </div>
          <!-- Column 2 -->
          <div>
            <ul class="space-y-5">
              <li class="flex items-start p-4 bg-slate-800/30 rounded-lg">
                <svg class="w-3 h-3 fill-current text-green-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <div>
                  <div class="font-bold text-white mb-1">Regular Dividend Payments</div>
                  <div class="text-slate-400">Receive quarterly or annual dividends directly to your account based on project performance.</div>
                </div>
              </li>
              <li class="flex items-start p-4 bg-slate-800/30 rounded-lg">
                <svg class="w-3 h-3 fill-current text-green-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <div>
                  <div class="font-bold text-white mb-1">Tax Incentives</div>
                  <div class="text-slate-400">Potential tax benefits for investing in qualifying renewable energy projects.</div>
                </div>
              </li>
            </ul>
          </div>
          <!-- Column 3 -->
          <div>
            <ul class="space-y-5">
              <li class="flex items-start p-4 bg-slate-800/30 rounded-lg">
                <svg class="w-3 h-3 fill-current text-green-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <div>
                  <div class="font-bold text-white mb-1">Expert Advisory</div>
                  <div class="text-slate-400">Access to energy investment specialists to help optimize your portfolio strategy.</div>
                </div>
              </li>
              <li class="flex items-start p-4 bg-slate-800/30 rounded-lg">
                <svg class="w-3 h-3 fill-current text-green-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <div>
                  <div class="font-bold text-white mb-1">Sustainable Development Goals</div>
                  <div class="text-slate-400">Projects aligned with UN SDGs for maximum environmental and social impact.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Features',
}
</script>

<style scoped>
.h2 {
  @apply text-3xl md:text-4xl font-bold;
}

.h3 {
  @apply text-xl font-bold;
}
</style>