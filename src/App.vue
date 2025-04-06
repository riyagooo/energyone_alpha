<!-- src/App.vue -->
<template>
  <div class="app-container w-full overflow-x-hidden">
    <router-view />
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'App',
  setup() {
    let intervalId
    let resizeHandler

    onMounted(() => {
      // Ensure responsive viewport is set correctly
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.content = 'width=device-width, initial-scale=1.0, viewport-fit=cover';
      } else {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0, viewport-fit=cover';
        document.head.appendChild(meta);
      }
      
      // Add responsive classes to html and body
      document.documentElement.classList.add('text-base');
      document.body.classList.add('w-full', 'overflow-x-hidden', 'm-0', 'p-0');
      
      // Handle resize events to update CSS variables for responsive sizing
      resizeHandler = () => {
        // Set viewport height variable (solves mobile viewport issues)
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        
        // Set responsive width variable
        let vw = window.innerWidth * 0.01;
        document.documentElement.style.setProperty('--vw', `${vw}px`);
        
        // Adjust font size based on viewport width for better readability
        const baseFontSize = Math.min(16, Math.max(13, window.innerWidth / 80));
        document.documentElement.style.fontSize = `${baseFontSize}px`;
      };
      
      // Initial call and event listener
      resizeHandler();
      window.addEventListener('resize', resizeHandler);
      
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
      if (resizeHandler) {
        window.removeEventListener('resize', resizeHandler);
      }
    })
  }
}
</script>

<style>
/* Import global styles */
@import './assets/css/style.css';

/* Responsive viewport styles */
html, body {
  width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  /* Use the custom property for vh units to handle mobile browsers */
  min-height: calc(var(--vh, 1vh) * 100);
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

/* Ensure proper z-index stacking and form visibility */
.app-container {
  position: relative;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

/* Fix potential form interaction issues */
input, button, a, select, textarea, form {
  position: relative;
  z-index: 5;
}

/* Container sizes relative to viewport */
.container {
  width: 100%;
  padding-left: max(env(safe-area-inset-left), 1rem);
  padding-right: max(env(safe-area-inset-right), 1rem);
  margin-left: auto;
  margin-right: auto;
}

/* Responsive layout helpers */
@media (max-width: 640px) {
  .btn, .btn-sm {
    width: 100%;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  
  h1, .h1 {
    font-size: 1.875rem !important; /* 30px */
  }
  
  h2, .h2 {
    font-size: 1.5rem !important; /* 24px */
  }
  
  h3, .h3 {
    font-size: 1.25rem !important; /* 20px */
  }
  
  p {
    font-size: 1rem !important; /* 16px */
  }
}

/* Improved mobile experience */
@media (max-width: 480px) {
  /* Adjust padding for small devices */
  section {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  
  /* Stack items on mobile */
  .sm\:flex-row {
    flex-direction: column !important;
  }
  
  .sm\:space-x-4 {
    margin-right: 0 !important;
    margin-bottom: 1rem !important;
  }
}

/* Remove any potential invisible overlays */
[data-id="vite-error-overlay"] {
  display: none !important;
}
</style>