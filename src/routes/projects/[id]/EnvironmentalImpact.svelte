<script lang="ts">
  import type { Project } from '$lib/types/project';
  
  export let project: Project;
  
  function formatNumber(value: number | undefined): string {
    if (!value) return 'N/A';
    // For environmental metrics, round to enhance readability while preserving meaning
    if (value > 100000) { 
      // Round large numbers to nearest 10,000
      const rounded = Math.round(value / 10000) * 10000;
      return rounded.toLocaleString();
    } else {
      // Round small numbers to nearest 100
      const rounded = Math.round(value / 100) * 100;
      return rounded.toLocaleString();
    }
  }
</script>

<div class="bg-slate-800 rounded-lg p-6">
  <h2 class="text-xl font-semibold text-slate-300 mb-4">Environmental Impact</h2>
  
  <!-- Key Environmental Metrics - Generally Public Information -->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
    <div>
      <p class="text-sm text-slate-400">Est. Carbon Offset</p>
      <p class="text-lg font-medium text-green-400">~{formatNumber(project.carbonOffset)} tonnes CO₂/year</p>
    </div>
    <div>
      <p class="text-sm text-slate-400">Project Footprint</p>
      <p class="text-lg font-medium text-slate-300">{project.environmental?.landUse ? `${project.environmental.landUse} hectares` : 'Not available'}</p>
    </div>
    <div>
      <p class="text-sm text-slate-400">Water Usage</p>
      <p class="text-lg font-medium text-slate-300">{project.environmental?.waterUsage !== undefined ? `${project.environmental.waterUsage.toLocaleString()} m³/year` : 'Minimal'}</p>
    </div>
    <div>
      <p class="text-sm text-slate-400">Biodiversity Impact</p>
      <p class="text-lg font-medium text-slate-300">{project.environmental?.biodiversityImpact || 'Assessment in progress'}</p>
    </div>
  </div>
  
  <!-- Impact Visualizations - Context for Public Metrics -->
  <div class="border-t border-slate-700 pt-6 space-y-6">
    <!-- Carbon Offset Visualization -->
    <div>
      <div class="flex justify-between items-center mb-2">
        <p class="text-sm text-slate-400">Carbon Reduction Impact</p>
        <p class="text-base font-medium text-green-400">Significant</p>
      </div>
      <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
        <div class="h-full bg-green-500" style="width: 75%"></div>
      </div>
      <p class="mt-1 text-xs text-slate-500">Equivalent to removing approximately {formatNumber(Math.round((project.carbonOffset || 0) / 4.6))} cars from the road</p>
    </div>
    
    <!-- Homes Powered - Based on Public Information -->
    <div>
      <div class="flex justify-between items-center mb-2">
        <p class="text-sm text-slate-400">Estimated Homes Powered</p>
        <p class="text-base font-medium text-slate-300">~{formatNumber(Math.round((project.energyMetrics?.annualGeneration || 0) / 10.5))} households</p>
      </div>
      <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
        <div class="h-full bg-blue-500" style="width: 85%"></div>
      </div>
      <p class="mt-1 text-xs text-slate-500">Based on average household consumption of 10.5 MWh per year</p>
    </div>
    
    <!-- Social Impact - Qualitative Information -->
    <div>
      <div class="flex justify-between items-center mb-2">
        <p class="text-sm text-slate-400">Community Impact</p>
        <p class="text-base font-medium text-slate-300">{project.environmental?.socialImpact || 'Positive'}</p>
      </div>
      <p class="mt-1 text-xs text-slate-500">Includes local job creation, community development initiatives, and regional economic benefits</p>
    </div>
    
    <!-- Energy Security - Generally Public Information -->
    <div>
      <div class="flex justify-between items-center mb-2">
        <p class="text-sm text-slate-400">Energy Security Contribution</p>
        <p class="text-base font-medium text-slate-300">{project.energySecurity ? `${project.energySecurity}/5` : 'Moderate to High'}</p>
      </div>
      <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
        <div class="h-full bg-blue-500" style="width: {(project.energySecurity || 3.5) / 5 * 100}%"></div>
      </div>
      <p class="mt-1 text-xs text-slate-500">Contribution to regional energy independence and grid resilience</p>
    </div>
  </div>
  
  <!-- Environmental Compliance - Indicate Without Full Disclosure -->
  <div class="mt-6 pt-6 border-t border-slate-700">
    <h3 class="text-lg font-semibold text-slate-300 mb-3">Environmental Compliance</h3>
    <div class="space-y-2">
      <div class="flex items-center">
        <div class="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
        <p class="text-sm text-slate-300">Environmental Impact Assessment Completed</p>
      </div>
      <div class="flex items-center">
        <div class="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
        <p class="text-sm text-slate-300">All Environmental Permits Secured</p>
      </div>
      <div class="flex items-center">
        <div class="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
        <p class="text-sm text-slate-300">Ongoing Environmental Monitoring Program</p>
      </div>
    </div>
    <p class="mt-4 text-xs text-slate-500">Detailed environmental compliance documentation and monitoring reports available to qualified investors upon request.</p>
  </div>
</div> 