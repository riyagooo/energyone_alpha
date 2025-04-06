<template>
  <section class="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-slate-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="relative">
        <!-- Background shape with neon glow -->
        <div class="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 pointer-events-none -z-10 rounded-xl" aria-hidden="true"></div>
        <!-- Glow effect -->
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div class="w-[300px] sm:w-[500px] h-[200px] sm:h-[300px] bg-blue-600/20 blur-[100px] -z-10"></div>
        </div>
                    <!-- Hero content moved above Earth -->
          <div class="max-w-3xl mx-auto text-center mt-12 md:mt-16">
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8" data-aos="fade-up">
              EnergyOne: Power Your Investment Portfolio
            </h1>
            <div class="max-w-2xl mx-auto mb-8 md:mb-10" data-aos="fade-up" data-aos-delay="100">
              <p class="text-lg md:text-xl text-slate-300">Join thousands of investors funding the renewable energy revolution with our transparent, data-driven platform.</p>
            </div>
            <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12" data-aos="fade-up" data-aos-delay="200">
              <router-link to="/signup" class="btn text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 shadow-lg shadow-blue-500/20 rounded-full px-8 py-3 font-semibold w-full sm:w-auto">
                Create Your Account
              </router-link>
              <router-link to="/dashboard" class="btn text-slate-300 bg-slate-700/80 hover:bg-slate-600 border-slate-600 rounded-full px-8 py-3 font-semibold w-full sm:w-auto">
                View Demo Dashboard
              </router-link>
            </div>
          </div>

          <!-- Earth Visualization -->
          <div class="relative mx-auto earth-viz-container" data-aos="fade-up">
            <div class="flex justify-center">
              <div ref="earthContainer" class="earth-container">
                <div v-if="loading" class="loading-indicator">
                  <div class="spinner"></div>
                  <div class="loading-text">Loading Earth Data...</div>
                </div>
                <div v-if="currentCountry" class="country-name">{{ currentCountry }}</div>
              </div>
            </div>
          </div>
          
          <div class="py-12 px-4 sm:px-6 md:px-12 rounded-xl">
          <!-- Section header before Earth -->
          <div class="max-w-3xl mx-auto text-center pb-8 sm:pb-12 md:pb-16">
            <div class="inline-flex text-sm font-semibold py-1 px-4 m-2 text-blue-200 bg-blue-900/50 rounded-full mb-4">Global Impact</div>
            <h3 class="h3 font-playfair-display text-white mb-4">Renewable Energy Around the World</h3>
            <p class="text-lg sm:text-xl text-slate-400">Explore the global impact of renewable energy projects and discover investment opportunities across continents.</p>
          </div>

          <!-- Stats below visualization -->
          <div class="flex flex-wrap justify-center mt-8 md:mt-12 gap-4 md:gap-8 lg:gap-12">
            <div class="text-center px-4">
              <div class="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">150+</div>
              <div class="text-sm text-slate-400">Energy Projects</div>
            </div>
            <div class="text-center px-4">
              <div class="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">42</div>
              <div class="text-sm text-slate-400">Countries</div>
            </div>
            <div class="text-center px-4">
              <div class="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">$1.2B</div>
              <div class="text-sm text-slate-400">Investments</div>
            </div>
            <div class="text-center px-4">
              <div class="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">4.5M</div>
              <div class="text-sm text-slate-400">Tons CO₂ Offset</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
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
  name: 'EarthVisualization',
  setup() {
    const earthContainer = ref(null);
    const loading = ref(true);
    const currentCountry = ref('');
    let canvas = null;
    let projection = null;
    let path = null;
    let context = null;
    let world = null;
    let land = null;
    let countries = null;
    let borders = null;
    let animation = null;
    let width = 0;
    let height = 0;
    
    // Function to handle resizing
    const handleResize = () => {
      if (!earthContainer.value || !canvas || !context || !projection || !path) return;
      
      // Get container width for better responsiveness
      const containerWidth = earthContainer.value.clientWidth;
      width = Math.min(containerWidth, 800);
      height = Math.min(width, 500);
      
      const dpr = window.devicePixelRatio || 1;
      
      // Update canvas dimensions
      canvas
        .attr("width", dpr * width)
        .attr("height", dpr * height)
        .style("width", `${width}px`)
        .style("height", `${height}px`);
      
      // Reset context scale
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);
      
      // Update projection
      projection.fitExtent([[10, 10], [width - 10, height - 10]], {type: "Sphere"});
      
      // Re-render the visualization
      if (world && land && borders) {
        render();
      }
      
      console.log('Resized visualization to', width, 'x', height);
    };
    
    onMounted(async () => {
      console.log('EarthVisualization component mounted');
      
      if (!earthContainer.value) {
        console.error('Earth container ref is null');
        return;
      }
      
      try {
        // Get initial dimensions from container
        const containerWidth = earthContainer.value.clientWidth;
        width = Math.min(containerWidth, 800);
        height = Math.min(width, 500);
        const dpr = window.devicePixelRatio || 1;
        
        // Create canvas
        canvas = d3.create("canvas")
          .attr("width", dpr * width)
          .attr("height", dpr * height)
          .style("width", `${width}px`)
          .style("height", `${height}px`);
        
        earthContainer.value.appendChild(canvas.node());
        
        // Get context and set scale
        context = canvas.node().getContext("2d");
        context.scale(dpr, dpr);
        
        // Create projection and path
        projection = d3.geoOrthographic().fitExtent([[10, 10], [width - 10, height - 10]], {type: "Sphere"});
        path = d3.geoPath(projection, context);
        const tilt = 20; // Tilt angle for the projection
        
        // Add resize listener
        window.addEventListener('resize', handleResize);
        
        // Load data
        console.log('Fetching world data');
        const response = await fetch('/data/countries-110m.json');
        
        if (!response.ok) {
          console.error(`Fetch error: ${response.status} ${response.statusText}`);
          loading.value = false;
          return;
        }
        
        world = await response.json();
        console.log('World data loaded:', Object.keys(world));
        
        // Convert TopoJSON to GeoJSON
        land = feature(world, world.objects.land);
        countries = feature(world, world.objects.countries).features;
        borders = mesh(world, world.objects.countries, (a, b) => a !== b);
        
        // Render function for the globe
        function render(country, arc) {
          context.clearRect(0, 0, width, height);
          
          // Background gradient for sphere
          const gradient = context.createRadialGradient(
            width/2, height/2, 0,
            width/2, height/2, height/2
          );
          gradient.addColorStop(0, '#1a1f35'); // Dark blue-gray center
          gradient.addColorStop(0.9, '#111827'); // Darker edge
          
          // Draw sphere background
          context.beginPath();
          path({type: "Sphere"});
          context.fillStyle = gradient;
          context.fill();
          
          // Draw land areas
          context.beginPath();
          path(land);
          context.fillStyle = "#374151"; // Gray-700
          context.fill();
          
          // Draw highlighted country
          if (country) {
            context.beginPath();
            path(country);
            
            // Create gradient for highlighted country
            const countryGradient = context.createLinearGradient(0, 0, width, height);
            countryGradient.addColorStop(0, "#3b82f6"); // Blue-500
            countryGradient.addColorStop(1, "#60a5fa"); // Blue-400
            
            context.fillStyle = countryGradient;
            context.fill();
            
            // Add glow around highlighted country
            context.shadowColor = "#3b82f6";
            context.shadowBlur = 12;
            context.strokeStyle = "#93c5fd";
            context.lineWidth = 1;
            context.stroke();
            context.shadowBlur = 0;
            
            // Update current country name if available
            if (country.properties && country.properties.name) {
              currentCountry.value = country.properties.name;
            }
          }
          
          // Draw country borders
          context.beginPath();
          path(borders);
          context.strokeStyle = "#4b5563"; // Gray-600
          context.lineWidth = 0.5;
          context.stroke();
          
          // Draw sphere outline with glow effect
          context.beginPath();
          path({type: "Sphere"});
          
          // Add outer glow to sphere
          context.shadowColor = "#60a5fa";
          context.shadowBlur = 15;
          context.strokeStyle = "#60a5fa"; // Blue-400
          context.lineWidth = 1;
          context.stroke();
          context.shadowBlur = 0;
          
          // Draw arc if present
          if (arc) {
            context.beginPath();
            path(arc);
            
            // Add glow to arc
            context.shadowColor = "#60a5fa";
            context.shadowBlur = 8;
            context.strokeStyle = "#93c5fd"; // Blue-300
            context.lineWidth = 2;
            context.stroke();
            context.shadowBlur = 0;
          }
        }
        
        // Initial render
        render();
        loading.value = false;
        console.log('Earth visualization rendered');
        
        // Start animation sequence
        async function animate() {
          let p1 = [0, 0];
          let p2 = [0, 0];
          let r1 = [0, 0, 0];
          let r2 = [0, 0, 0];
          
          for (let i = 0; i < countries.length; i++) {
            const country = countries[i];
            
            // Skip small countries or those without proper centroids
            if (!country.properties || country.properties.name === "Antarctica") continue;
            
            p1 = p2;
            p2 = d3.geoCentroid(country);
            
            // Skip if centroid is invalid
            if (isNaN(p2[0]) || isNaN(p2[1])) continue;
            
            r1 = r2;
            r2 = [-p2[0], tilt - p2[1], 0];
            
            // Interpolators
            const ip = d3.geoInterpolate(p1, p2);
            const iv = Versor.interpolateAngles(r1, r2);
            
            // First transition: rotate to new position
            const duration1 = 1000;
            const start1 = Date.now();
            
            await new Promise(resolve => {
              function frame1() {
                const t = Math.min(1, (Date.now() - start1) / duration1);
                
                projection.rotate(iv(t));
                render(country, {type: "LineString", coordinates: [p1, ip(t)]});
                
                if (t < 1) {
                  animation = requestAnimationFrame(frame1);
                } else {
                  resolve();
                }
              }
              animation = requestAnimationFrame(frame1);
            });
            
            // Second transition: complete the arc
            const duration2 = 500;
            const start2 = Date.now();
            
            await new Promise(resolve => {
              function frame2() {
                const t = Math.min(1, (Date.now() - start2) / duration2);
                render(country, {type: "LineString", coordinates: [ip(t), p2]});
                
                if (t < 1) {
                  animation = requestAnimationFrame(frame2);
                } else {
                  resolve();
                }
              }
              animation = requestAnimationFrame(frame2);
            });
            
            // Pause on each country briefly
            await new Promise(resolve => setTimeout(resolve, 300));
          }
          
          // Restart animation when finished
          animate();
        }
        
        // Start the animation
        animate();
        
      } catch (error) {
        console.error('Error creating earth visualization:', error);
        loading.value = false;
      }
    });
    
    onUnmounted(() => {
      if (animation) {
        cancelAnimationFrame(animation);
      }
      
      window.removeEventListener('resize', handleResize);
    });
    
    return {
      earthContainer,
      loading,
      currentCountry
    };
  }
};
</script>

<style scoped>
.h2 {
  @apply text-2xl sm:text-3xl md:text-4xl font-bold;
}

.earth-viz-container {
  border-radius: 12px;
  min-height: 280px; /* Reduced min-height */
  height: calc(100vw * 0.4); /* Slightly reduced height ratio */
  max-height: 500px; /* Reduced max height */
  overflow: hidden;
  box-shadow: 
    0 0 20px 2px rgba(59, 130, 246, 0.1),
    0 8px 32px -4px rgba(59, 130, 246, 0.3);
  position: relative;
  width: 100%;
}

.earth-viz-container::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 12px;
  padding: 1px;
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(96, 165, 250, 0), rgba(59, 130, 246, 0.3));
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.earth-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.earth-container canvas {
  border-radius: 12px;
  max-width: 100%;
  height: auto;
  border: 1px solid rgba(59, 130, 246, 0.2);
  background-color: #111827;
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
  border: 4px solid rgba(96, 165, 250, 0.1);
  border-radius: 50%;
  border-top-color: #60a5fa;
  animation: spin 1s ease-in-out infinite;
}

.loading-text {
  color: #94a3b8;
  font-size: 0.875rem;
}

.country-name {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(30, 41, 59, 0.8);
  color: #60a5fa;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid rgba(59, 130, 246, 0.3);
  text-align: center;
  min-width: 160px;
  backdrop-filter: blur(8px);
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 0 10px rgba(59, 130, 246, 0.3);
  z-index: 10;
  text-shadow: 0 0 8px rgba(96, 165, 250, 0.5);
  animation: pulse 2s infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
  70% { box-shadow: 0 0 0 6px rgba(59, 130, 246, 0); }
  100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
}
</style>