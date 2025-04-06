<template>
  <div class="simple-earth-container">
    <div ref="container" class="earth-canvas-container"></div>
    <div v-if="loading" class="loading-text">Loading Earth Data...</div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import * as d3 from 'd3';
import { feature, mesh } from 'topojson-client';

export default {
  name: 'SimpleEarth',
  setup() {
    const container = ref(null);
    const loading = ref(true);
    
    onMounted(async () => {
      console.log('SimpleEarth mounted');
      
      if (!container.value) {
        console.error('Container ref is null');
        return;
      }
      
      try {
        // Create SVG
        const width = 300;
        const height = 300;
        
        const svg = d3.create('svg')
          .attr('width', width)
          .attr('height', height)
          .style('background', '#1e293b');
        
        container.value.appendChild(svg.node());
        
        // Create projection and path
        const projection = d3.geoOrthographic()
          .scale(140)
          .translate([width / 2, height / 2]);
        
        const path = d3.geoPath().projection(projection);
        
        // Load data
        console.log('Fetching world data');
        const response = await fetch('/data/countries-110m.json');
        
        if (!response.ok) {
          console.error(`Fetch error: ${response.status} ${response.statusText}`);
          loading.value = false;
          return;
        }
        
        const world = await response.json();
        console.log('World data loaded:', Object.keys(world));
        
        // Draw globe
        svg.append('path')
          .datum({type: 'Sphere'})
          .attr('fill', '#333')
          .attr('stroke', '#666')
          .attr('d', path);
        
        // Draw land
        const land = feature(world, world.objects.land);
        svg.append('path')
          .datum(land)
          .attr('fill', '#4b5563')
          .attr('d', path);
        
        // Draw country boundaries
        const borders = mesh(world, world.objects.countries, (a, b) => a !== b);
        svg.append('path')
          .datum(borders)
          .attr('fill', 'none')
          .attr('stroke', '#6b7280')
          .attr('stroke-width', 0.5)
          .attr('d', path);
        
        loading.value = false;
        console.log('Simple Earth rendered');
      } catch (error) {
        console.error('Error creating simple earth:', error);
        loading.value = false;
      }
    });
    
    return {
      container,
      loading
    };
  }
};
</script>

<style scoped>
.simple-earth-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #1e293b;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  position: relative;
  min-height: 350px;
}

.earth-canvas-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #94a3b8;
  font-size: 0.875rem;
}
</style> 