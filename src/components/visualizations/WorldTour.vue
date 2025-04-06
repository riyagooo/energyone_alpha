<template>
  <div class="world-tour-container" ref="container">
    <div v-if="loading" class="loading-indicator">
      <div class="spinner"></div>
      <div class="loading-text">Loading Earth Data...</div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import * as d3 from 'd3';
import { feature, mesh } from 'topojson-client';

// Versor class for handling rotations (from Observable example)
class Versor {
  static fromAngles([l, p, g]) {
    l *= Math.PI / 360;
    p *= Math.PI / 360;
    g *= Math.PI / 360;
    const sl = Math.sin(l), cl = Math.cos(l);
    const sp = Math.sin(p), cp = Math.cos(p);
    const sg = Math.sin(g), cg = Math.cos(g);
    return [
      cl * cp * cg + sl * sp * sg,
      sl * cp * cg - cl * sp * sg,
      cl * sp * cg + sl * cp * sg,
      cl * cp * sg - sl * sp * cg
    ];
  }
  
  static toAngles([a, b, c, d]) {
    return [
      Math.atan2(2 * (a * b + c * d), 1 - 2 * (b * b + c * c)) * 180 / Math.PI,
      Math.asin(Math.max(-1, Math.min(1, 2 * (a * c - d * b)))) * 180 / Math.PI,
      Math.atan2(2 * (a * d + b * c), 1 - 2 * (c * c + d * d)) * 180 / Math.PI
    ];
  }
  
  static interpolateAngles(a, b) {
    const i = Versor.interpolate(Versor.fromAngles(a), Versor.fromAngles(b));
    return t => Versor.toAngles(i(t));
  }
  
  static interpolateLinear([a1, b1, c1, d1], [a2, b2, c2, d2]) {
    a2 -= a1, b2 -= b1, c2 -= c1, d2 -= d1;
    const x = new Array(4);
    return t => {
      const l = Math.hypot(x[0] = a1 + a2 * t, x[1] = b1 + b2 * t, x[2] = c1 + c2 * t, x[3] = d1 + d2 * t);
      x[0] /= l, x[1] /= l, x[2] /= l, x[3] /= l;
      return x;
    };
  }
  
  static interpolate([a1, b1, c1, d1], [a2, b2, c2, d2]) {
    let dot = a1 * a2 + b1 * b2 + c1 * c2 + d1 * d2;
    if (dot < 0) a2 = -a2, b2 = -b2, c2 = -c2, d2 = -d2, dot = -dot;
    if (dot > 0.9995) return Versor.interpolateLinear([a1, b1, c1, d1], [a2, b2, c2, d2]); 
    const theta0 = Math.acos(Math.max(-1, Math.min(1, dot)));
    const x = new Array(4);
    const l = Math.hypot(a2 -= a1 * dot, b2 -= b1 * dot, c2 -= c1 * dot, d2 -= d1 * dot);
    a2 /= l, b2 /= l, c2 /= l, d2 /= l;
    return t => {
      const theta = theta0 * t;
      const s = Math.sin(theta);
      const c = Math.cos(theta);
      x[0] = a1 * c + a2 * s;
      x[1] = b1 * c + b2 * s;
      x[2] = c1 * c + c2 * s;
      x[3] = d1 * c + d2 * s;
      return x;
    };
  }
}

export default {
  name: 'WorldTour',
  props: {
    width: {
      type: Number,
      default: 320
    }
  },
  emits: ['error'],
  setup(props, { emit }) {
    const container = ref(null);
    let animation = null;
    let canvas = null;
    const currentCountryName = ref('');
    const loading = ref(true);
    let world = null;
    let land = null;
    let countries = null;
    let borders = null;
    let projection = null;
    let path = null;
    let context = null;

    const resizeVisualization = () => {
      if (!canvas || !container.value || !world) {
        console.error('Cannot resize visualization - missing canvas, container, or world data');
        return;
      }
      
      try {
        const height = Math.min(props.width, 720);
        const dpr = window.devicePixelRatio || 1;
        
        // Remove old canvas
        if (container.value.firstChild) {
          container.value.removeChild(container.value.firstChild);
        }
        
        // Create new canvas
        canvas = d3.create("canvas")
          .attr("width", dpr * props.width)
          .attr("height", dpr * height)
          .style("width", `${props.width}px`)
          .style("height", `${height}px`);
        
        container.value.appendChild(canvas.node());
        
        context = canvas.node().getContext("2d");
        context.scale(dpr, dpr);
        
        // Update projection
        projection = d3.geoOrthographic().fitExtent([[10, 10], [props.width - 10, height - 10]], {type: "Sphere"});
        path = d3.geoPath(projection, context);
        
        // Initial render
        render();
        console.log('Canvas successfully resized and visualization rendered');
      } catch (error) {
        console.error('Error resizing visualization:', error);
      }
    };

    function render(country, arc) {
      if (!context || !path) return;
      
      const height = Math.min(props.width, 720);
      
      context.clearRect(0, 0, props.width, height);
      
      // Draw land
      if (land) {
        context.beginPath();
        path(land);
        context.fillStyle = "#404040"; // Darker gray for land
        context.fill();
      }
      
      // Draw selected country
      if (country) {
        context.beginPath();
        path(country);
        context.fillStyle = "#60a5fa"; // Blue-400 for highlighted country
        context.fill();
        
        // Update current country name if available
        if (country.properties && country.properties.name) {
          currentCountryName.value = country.properties.name;
        }
      }
      
      // Draw borders
      if (borders) {
        context.beginPath();
        path(borders);
        context.strokeStyle = "#525252"; // Lighter gray for borders
        context.lineWidth = 0.5;
        context.stroke();
      }
      
      // Draw sphere outline
      context.beginPath();
      path({type: "Sphere"});
      context.strokeStyle = "#737373"; // Medium gray for sphere outline
      context.lineWidth = 1.5;
      context.stroke();
      
      // Draw arc if present
      if (arc) {
        context.beginPath();
        path(arc);
        context.strokeStyle = "#93c5fd"; // Blue-300 for arc
        context.lineWidth = 1.5;
        context.stroke();
      }
    }

    watch(() => props.width, () => {
      resizeVisualization();
    });

    onMounted(async () => {
      console.log('WorldTour component mounted. Container ref:', container.value);
      try {
        // Fetch the TopoJSON data
        console.log('Attempting to load world data from /data/countries-110m.json');
        
        // Try with a different loading approach
        const response = await fetch('/data/countries-110m.json');
        if (!response.ok) {
          console.error(`Failed to fetch world data: ${response.status} ${response.statusText}`);
          loading.value = false;
          emit('error', 'Failed to fetch world data');
          return;
        }
        
        world = await response.json();
        
        if (!world) {
          console.error('Failed to load world data - file was loaded but empty or invalid');
          loading.value = false;
          emit('error', 'Failed to process world data');
          return;
        }
        
        console.log('World data loaded successfully:', Object.keys(world));
        
        // Convert TopoJSON to GeoJSON
        try {
          land = feature(world, world.objects.land);
          countries = feature(world, world.objects.countries).features;
          borders = mesh(world, world.objects.countries, (a, b) => a !== b);
          console.log(`Converted TopoJSON successfully - found ${countries.length} countries`);
        } catch (error) {
          console.error('Error converting TopoJSON to GeoJSON:', error);
          console.log('World data structure:', JSON.stringify(world).substring(0, 500) + '...');
          loading.value = false;
          emit('error', 'Failed to convert world data');
          return;
        }

        // Initial setup
        resizeVisualization();
        
        // Implementing the Observable example's animation approach
        let i = 0;
        
        async function animate() {
          // Loop through countries
          for (let i = 0; i < countries.length; i++) {
            const country = countries[i];
            
            if (!container.value) break; // Check if component is still mounted
            
            // Get country centroid and setup rotation
            const p1 = i > 0 ? d3.geoCentroid(countries[i-1]) : [0, 0];
            const p2 = d3.geoCentroid(country);
            const r1 = i > 0 ? [-p1[0], 20 - p1[1], 0] : [0, 0, 0];
            const r2 = [-p2[0], 20 - p2[1], 0];
            
            const ip = d3.geoInterpolate(p1, p2);
            const iv = Versor.interpolateAngles(r1, r2);
            
            // First transition: rotate to new position
            const duration1 = 1250;
            const start1 = Date.now();
            
            await new Promise(resolve => {
              function frame1() {
                const t = Math.min(1, (Date.now() - start1) / duration1);
                if (projection) {
                  projection.rotate(iv(t));
                  render(country, {type: "LineString", coordinates: [p1, ip(t)]});
                }
                
                if (t < 1 && container.value) {
                  animation = requestAnimationFrame(frame1);
                } else {
                  resolve();
                }
              }
              animation = requestAnimationFrame(frame1);
            });
            
            if (!container.value) break; // Check if component is still mounted
            
            // Second transition: complete the arc
            const duration2 = 750;
            const start2 = Date.now();
            
            await new Promise(resolve => {
              function frame2() {
                const t = Math.min(1, (Date.now() - start2) / duration2);
                render(country, {type: "LineString", coordinates: [ip(t), p2]});
                
                if (t < 1 && container.value) {
                  animation = requestAnimationFrame(frame2);
                } else {
                  resolve();
                }
              }
              animation = requestAnimationFrame(frame2);
            });
            
            // Pause on each country briefly
            await new Promise(resolve => setTimeout(resolve, 500));
          }
          
          // When finished with all countries, start over
          if (container.value) {
            animate();
          }
        }

        // Start the animation
        animate();
        loading.value = false;
        
      } catch (error) {
        console.error('Error in WorldTour component:', error);
        loading.value = false;
        emit('error', 'An error occurred');
      }
    });

    onBeforeUnmount(() => {
      if (animation) {
        cancelAnimationFrame(animation);
      }
    });

    return { 
      container,
      currentCountryName,
      loading
    };
  }
}
</script>

<style scoped>
.world-tour-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  min-height: 320px;
  border: 2px solid #3b82f6; /* Add a visible border */
  border-radius: 8px;
  background-color: #1e293b; /* slate-800 */
  margin: 1rem 0;
}

canvas {
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5), 0 4px 8px rgba(59, 130, 246, 0.2);
  background-color: #1e293b; /* slate-800 */
}

.loading-indicator {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border-top-color: #60a5fa;
  animation: spin 1s ease-in-out infinite;
}

.loading-text {
  color: #94a3b8;
  font-size: 0.875rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style> 