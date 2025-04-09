<script lang="ts">
  import type { Project } from '$lib/types/project';
  import { formatNumber, formatMetric, formatPercent } from '$lib/utils/formatters';

  export let project: Project;
</script>

<section class="bg-white shadow rounded-lg p-6" aria-labelledby="environmental-impact-title">
  <h2 id="environmental-impact-title" class="text-lg font-medium text-slate-900 mb-4">Environmental Impact</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Carbon Offset -->
    <div class="space-y-2">
      <h3 class="text-sm font-medium text-slate-500">Annual Carbon Offset</h3>
      <p class="text-2xl font-semibold text-slate-900" aria-label="Annual carbon offset: {project.carbonOffset} tons of CO2">
        {formatMetric(project.carbonOffset, 'tons CO₂')}
      </p>
      <p class="text-sm text-slate-500">
        Equivalent to removing {formatNumber(Math.round(project.carbonOffset / 4.6))} cars from the road
      </p>
    </div>

    <!-- Land Use -->
    <div class="space-y-2">
      <h3 class="text-sm font-medium text-slate-500">Land Use</h3>
      <p class="text-2xl font-semibold text-slate-900" aria-label="Land use: {project.landUse} hectares">
        {formatMetric(project.landUse, 'hectares')}
      </p>
      <p class="text-sm text-slate-500">Total project footprint</p>
    </div>

    <!-- Water Savings -->
    <div class="space-y-2">
      <h3 class="text-sm font-medium text-slate-500">Water Savings</h3>
      <p class="text-2xl font-semibold text-slate-900" aria-label="Water savings: {project.waterSavings} cubic meters per year">
        {formatMetric(project.waterSavings, 'm³/year')}
      </p>
      <p class="text-sm text-slate-500">Compared to conventional generation</p>
    </div>

    <!-- Biodiversity Impact -->
    <div class="space-y-2">
      <h3 class="text-sm font-medium text-slate-500">Biodiversity Impact</h3>
      <p class="text-2xl font-semibold text-slate-900" aria-label="Biodiversity score: {project.biodiversityScore} out of 10">
        {project.biodiversityScore}/10
      </p>
      <p class="text-sm text-slate-500">Environmental assessment score</p>
    </div>
  </div>

  <!-- Additional Environmental Metrics -->
  <div class="mt-6 pt-6 border-t border-slate-200">
    <h3 class="text-sm font-medium text-slate-500 mb-3">Additional Metrics</h3>
    <dl class="grid grid-cols-1 gap-4">
      <div class="flex justify-between">
        <dt class="text-sm text-slate-500">Local Air Quality Improvement</dt>
        <dd class="text-sm font-medium text-slate-900" aria-label="Air quality improvement: {project.airQualityImprovement} percent">
          {formatPercent(project.airQualityImprovement)}
        </dd>
      </div>
      <div class="flex justify-between">
        <dt class="text-sm text-slate-500">Waste Reduction</dt>
        <dd class="text-sm font-medium text-slate-900" aria-label="Waste reduction: {project.wasteReduction} tons per year">
          {formatMetric(project.wasteReduction, 'tons/year')}
        </dd>
      </div>
      <div class="flex justify-between">
        <dt class="text-sm text-slate-500">Community Environmental Programs</dt>
        <dd class="text-sm font-medium text-slate-900" aria-label="{project.communityPrograms} active community programs">
          {project.communityPrograms} active programs
        </dd>
      </div>
    </dl>
  </div>
</section> 