<template>
  <section class="bg-slate-900 py-12 sm:py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="relative px-6 sm:px-8 py-12 md:py-16 bg-gradient-to-br from-indigo-900 to-slate-800 rounded-xl overflow-hidden">
        <!-- Glow effect -->
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div class="w-[300px] sm:w-[500px] h-[200px] sm:h-[300px] bg-blue-600/20 blur-[100px] -z-10"></div>
        </div>
        
        <div class="relative max-w-3xl mx-auto text-center">
          <div class="inline-flex text-sm font-semibold py-1 px-4 m-2 text-indigo-200 bg-indigo-900/50 rounded-full mb-4">Start Today</div>
          <h2 class="h2 font-playfair-display text-white mb-4">Ready to invest in a sustainable future?</h2>
          <p class="text-lg text-slate-300 mb-8">Join thousands of investors making a positive impact on the planet while growing their portfolio with EnergyOne.</p>
          <div class="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-none space-y-4 sm:space-y-0 sm:space-x-4">
            <router-link to="/signup" class="btn text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 group px-6 py-3 rounded-lg w-full sm:w-auto">
              Create Your Account <span class="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
            </router-link>
            <router-link to="/dashboard" class="btn text-slate-200 bg-slate-700/80 hover:bg-slate-600 border border-slate-600 px-6 py-3 rounded-lg w-full sm:w-auto">
              View Demo
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Cta',
};
</script>

<style scoped>
.h2 {
  @apply text-2xl sm:text-3xl font-bold;
}

.btn {
  @apply inline-flex items-center justify-center border border-transparent text-base font-medium transition duration-150 ease-in-out;
}

@media (max-width: 640px) {
  .btn {
    @apply text-sm py-2;
  }
}
</style>