<template>
  <div class="py-8">
    <div class="mb-8 text-center">
      <h1 class="text-3xl font-bold text-slate-800 mb-4">Welcome to EnergyOne</h1>
      <p class="text-lg text-slate-600 max-w-xl mx-auto">Discover global renewable energy opportunities at your fingertips</p>
    </div>
    
    <div class="max-w-3xl mx-auto px-4">
      <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div class="mb-6">
          <h2 class="text-xl font-semibold text-slate-800 mb-2">Global Energy Impact</h2>
          <p class="text-slate-600 mb-4">Explore renewable energy projects around the world and see how your investments can make a difference.</p>
          
          <!-- World Tour Component -->
          <div class="mb-6">
            <WorldTour :width="responsive.width" />
          </div>
        </div>
        
        <div class="flex justify-between mt-8">
          <button @click="handleBack" class="btn-sm bg-white border-slate-200 hover:border-slate-300 text-slate-600">Back</button>
          <button @click="handleNext" class="btn-sm bg-blue-500 hover:bg-blue-600 text-white">Continue</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import WorldTour from '@/components/visualizations/WorldTour.vue';

export default {
  name: 'Onboarding01',
  components: {
    WorldTour
  },
  setup() {
    const router = useRouter();
    const responsive = ref({
      width: 800
    });
    
    // For responsive sizing of the visualization
    const updateSize = () => {
      const containerWidth = Math.min(window.innerWidth - 80, 800);
      responsive.width = containerWidth;
    };
    
    onMounted(() => {
      updateSize();
      window.addEventListener('resize', updateSize);
    });
    
    onUnmounted(() => {
      window.removeEventListener('resize', updateSize);
    });
    
    const handleNext = () => {
      router.push('/dashboard/onboarding/step-2');
    };
    
    const handleBack = () => {
      router.push('/');
    };
    
    return {
      handleNext,
      handleBack,
      responsive
    };
  }
};
</script>

<style scoped>
.btn-sm {
  @apply inline-flex items-center justify-center rounded px-3 py-2 text-sm font-medium transition duration-150 ease-in-out;
}
</style>