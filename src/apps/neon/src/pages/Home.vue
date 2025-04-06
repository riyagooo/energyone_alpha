<template>
  <div class="flex flex-col min-h-screen min-h-[calc(var(--vh,1vh)*100)] overflow-hidden w-full">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow w-full">
      <!-- Earth visualization is now first and includes hero content -->
      <EarthVisualization />
      
      <Features />
      <Features02 />
      <InvestmentOptions />
      <Testimonials />
      <Resources />
      <Cta />
    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
// Hero removed as content is now in EarthVisualization
import EarthVisualization from '../partials/EarthVisualization.vue'
import Features from '../partials/Features.vue'
import Features02 from '../partials/Features02.vue'
import InvestmentOptions from '../partials/InvestmentOptions.vue'
import Testimonials from '../partials/Testimonials.vue'
import Resources from '../partials/Resources.vue'
import Cta from '../partials/Cta.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    EarthVisualization,
    Features,
    Features02,
    InvestmentOptions,
    Testimonials,
    Resources,
    Cta,
    Footer,
  },
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

/* Responsive adjustments for mobile */
@media (max-width: 640px) {
  .btn {
    @apply px-3 py-2 text-sm;
  }
  
  .btn-sm {
    @apply px-2 py-1 text-xs;
  }
  
  .max-w-6xl, .max-w-3xl {
    width: 100%;
  }
}

/* Ensure all content sections take full width */
section {
  width: 100%;
}

/* Ensure buttons and links are touchable on mobile */
@media (max-width: 480px) {
  .btn, .btn-sm, a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}
</style>