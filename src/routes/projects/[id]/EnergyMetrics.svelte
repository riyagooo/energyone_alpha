<script lang="ts">
  import type { Project } from '$lib/types/project';
  
  export let project: Project;
  
  function formatNumber(value: number | undefined): string {
    if (!value) return 'N/A';
    // Round to the nearest thousand and format with commas
    const rounded = Math.round(value / 1000) * 1000;
    return rounded.toLocaleString();
  }
  
  function formatPercent(value: number | undefined): string {
    if (!value) return 'N/A';
    // For capacity factor and availability, use the actual rounded value
    // These are generally public information
    return `${Math.round(value * 100)}%`;
  }
  
  function formatTechRatio(value: number | undefined): string {
    if (!value) return 'N/A';
    // For technical ratios that might be more sensitive, provide approximations
    // Performance ratio and degradation rates may be proprietary
    return `~${Math.round(value * 100)}%`;
  }
</script>

<div class="bg-slate-800 rounded-lg p-6">
  <h2 class="text-xl font-semibold text-slate-300 mb-6">Energy Production Metrics</h2>
  
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
    <!-- Capacity - Public Information -->
    <div>
      <p class="text-sm text-slate-400">Installed Capacity</p>
      <p class="text-lg font-medium text-slate-300">{project.capacity}</p>
    </div>

    <!-- Annual Generation - Approximate Value -->
    <div>
      <p class="text-sm text-slate-400">Est. Annual Generation</p>
      <p class="text-lg font-medium text-blue-400">{formatNumber(project.energyMetrics?.annualGeneration)} MWh</p>
    </div>

    <!-- Capacity Factor - Typically Public -->
    <div>
      <p class="text-sm text-slate-400">Capacity Factor</p>
      <p class="text-lg font-medium text-slate-300">{formatPercent(project.energyMetrics?.capacityFactor)}</p>
    </div>

    <!-- PPA Duration - Typically Public -->
    <div>
      <p class="text-sm text-slate-400">PPA Duration</p>
      <p class="text-lg font-medium text-slate-300">{project.ppaTerm ? `${project.ppaTerm} years` : 'N/A'}</p>
    </div>
  </div>
  
  <!-- Performance Metrics - Some Proprietary Data -->
  <div class="border-t border-slate-700 pt-6">
    <h3 class="text-lg font-semibold text-slate-300 mb-4">Performance Metrics</h3>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <p class="text-sm text-slate-400">Availability <span class="text-xs">(Target)</span></p>
        <p class="text-base font-medium text-slate-300">{formatPercent(project.energyMetrics?.availability)}</p>
        <p class="text-xs text-slate-500">System uptime</p>
      </div>
      <div>
        <p class="text-sm text-slate-400">Performance Ratio <span class="text-xs">(Est.)</span></p>
        <p class="text-base font-medium text-slate-300">{formatTechRatio(project.energyMetrics?.performanceRatio)}</p>
        <p class="text-xs text-slate-500">Efficiency indicator</p>
      </div>
      <div>
        <div class="flex items-center">
          <p class="text-sm text-slate-400">Additional Technical Data</p>
          <span class="ml-1 px-1.5 py-0.5 text-xs bg-slate-700 text-slate-300 rounded">NDA Required</span>
        </div>
        <p class="text-base font-medium text-slate-300">
          <a href="/contact" class="text-blue-400 hover:underline">Request Access</a>
        </p>
        <p class="text-xs text-slate-500">Detailed performance specifications</p>
      </div>
    </div>
    
    <!-- Energy Production Visualization -->
    <div class="mt-6 pt-6 border-t border-slate-700">
      <div class="flex justify-between items-center mb-2">
        <p class="text-sm text-slate-400">Expected vs. Projected Output</p>
        <p class="text-base font-medium text-blue-400">On Target</p>
      </div>
      <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
        <div class="h-full bg-blue-500" style="width: 90%"></div>
      </div>
      <p class="mt-1 text-xs text-slate-500">Production forecasts based on resource assessment studies and equipment specifications</p>
      <p class="mt-3 text-xs text-slate-500">Note: Actual generation may vary due to resource availability, grid constraints, and maintenance schedules. Detailed production data available to qualified investors.</p>
    </div>
  </div>
</div> 