<!-- src/App.vue -->
<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'App',
  setup() {
    let intervalId

    onMounted(() => {
      // Check for and remove any Vite error overlays that might block interaction
      const removeOverlays = () => {
        const overlays = document.querySelectorAll('[data-id="vite-error-overlay"]')
        if (overlays.length > 0) {
          console.log('Found and removing Vite error overlays')
          overlays.forEach(overlay => {
            try {
              overlay.remove()
            } catch (e) {
              console.error('Error removing overlay:', e)
            }
          })
        }
      }
      
      // Run immediately and set interval to check regularly
      removeOverlays()
      intervalId = setInterval(removeOverlays, 1000)
    })
    
    // Clean up interval when component is destroyed
    onBeforeUnmount(() => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    })
  }
}
</script>

<style>
/* Import global styles */
@import './assets/css/style.css';

/* Ensure proper z-index stacking and form visibility */
.app-container {
  position: relative;
  min-height: 100vh;
}

/* Fix potential form interaction issues */
input, button, a, select, textarea, form {
  position: relative;
  z-index: 5;
}

/* Remove any potential invisible overlays */
[data-id="vite-error-overlay"] {
  display: none !important;
}
</style>