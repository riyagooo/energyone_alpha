<script lang="ts">
  import type { Project } from '$lib/types/project';
  import { formatNumber, formatMetric, formatPercent } from '$lib/utils/formatters';

  export let project: Project;
</script>

<section class="bg-white shadow rounded-lg p-6" aria-labelledby="energy-metrics-title">
  <h2 id="energy-metrics-title" class="text-lg font-medium text-slate-900 mb-4">Energy Metrics</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Capacity -->
    <div class="space-y-2">
      <h3 class="text-sm font-medium text-slate-500">Installed Capacity</h3>
      <p class="text-2xl font-semibold text-slate-900" aria-label="Installed capacity: {project.capacity} megawatts">
        {formatMetric(project.capacity, 'MW')}
      </p>
    </div>

    <!-- Annual Generation -->
    <div class="space-y-2">
      <h3 class="text-sm font-medium text-slate-500">Annual Generation</h3>
      <p class="text-2xl font-semibold text-slate-900" aria-label="Annual generation: {project.annualGeneration} megawatt hours">
        {formatMetric(project.annualGeneration, 'MWh')}
      </p>
    </div>

    <!-- Capacity Factor -->
    <div class="space-y-2">
      <h3 class="text-sm font-medium text-slate-500">Capacity Factor</h3>
      <p class="text-2xl font-semibold text-slate-900" aria-label="Capacity factor: {project.capacityFactor} percent">
        {formatPercent(project.capacityFactor)}
      </p>
    </div>

    <!-- Carbon Offset -->
    <div class="space-y-2">
      <h3 class="text-sm font-medium text-slate-500">Annual Carbon Offset</h3>
      <p class="text-2xl font-semibold text-slate-900" aria-label="Annual carbon offset: {project.carbonOffset} tons of CO2">
        {formatMetric(project.carbonOffset, 'tons CO₂')}
      </p>
    </div>
  </div>

  <!-- Additional Metrics -->
  <div class="mt-6 pt-6 border-t border-slate-200">
    <h3 class="text-sm font-medium text-slate-500 mb-3">Additional Metrics</h3>
    <dl class="grid grid-cols-1 gap-4">
      <div class="flex justify-between">
        <dt class="text-sm text-slate-500">Peak Generation</dt>
        <dd class="text-sm font-medium text-slate-900" aria-label="Peak generation: {project.peakGeneration} megawatts">
          {formatMetric(project.peakGeneration, 'MW')}
        </dd>
      </div>
      <div class="flex justify-between">
        <dt class="text-sm text-slate-500">Grid Connection</dt>
        <dd class="text-sm font-medium text-slate-900">
          {project.gridConnection}
        </dd>
      </div>
      <div class="flex justify-between">
        <dt class="text-sm text-slate-500">PPA Type</dt>
        <dd class="text-sm font-medium text-slate-900">
          {project.ppaType}
        </dd>
      </div>
    </dl>
  </div>
</section> 