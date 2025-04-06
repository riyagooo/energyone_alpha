<template>
  <section class="relative">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 pointer-events-none -z-10" aria-hidden="true"></div>
    <!-- Illustration -->
    <div class="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6 -z-10" aria-hidden="true">
      <svg class="absolute inset-y-0 right-0 translate-x-1/2 h-screen text-slate-800" width="1027" height="736" fill="none" viewBox="0 0 1027 736">
        <path d="M1027 0H741.037L579.230 184.475C454.873 286.936 255.857 281.646 137.520 173.111L0 49.398V736H1027V0Z" fill="currentColor" />
      </svg>
    </div>
    
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-20 pb-16 md:pt-40 md:pb-20">
        <!-- Hero content -->
        <div class="max-w-3xl mx-auto text-center">
          <div class="mb-6" data-aos="fade-down">
            <div class="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full">Sustainable Energy Investment</div>
          </div>
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8" data-aos="fade-down">EnergyOne: Power Your Investment Portfolio</h1>
          <div class="max-w-2xl mx-auto mb-8 md:mb-10" data-aos="fade-down" data-aos-delay="150">
            <p class="text-lg md:text-xl text-slate-300">Join thousands of investors funding the renewable energy revolution with our transparent, data-driven platform.</p>
          </div>
          <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12" data-aos="fade-up" data-aos-delay="300">
            <router-link to="/signup" class="btn text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 shadow-lg shadow-blue-500/20 rounded-full px-8 py-3 font-semibold w-full sm:w-auto">Create Your Account</router-link>
            <router-link to="/dashboard" class="btn text-slate-300 bg-slate-700/80 hover:bg-slate-600 border-slate-600 rounded-full px-8 py-3 font-semibold w-full sm:w-auto">View Demo Dashboard</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped>
.btn {
  @apply inline-flex items-center justify-center rounded-lg border border-transparent px-4 py-3 text-base font-medium transition duration-150 ease-in-out;
}
</style>