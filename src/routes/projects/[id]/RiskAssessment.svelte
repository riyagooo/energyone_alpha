<script lang="ts">
  import type { Project } from '$lib/types/project';
  
  export let project: Project;
  
  function getRiskColor(value: number): string {
    if (value < 3) return 'text-green-400';
    if (value < 4) return 'text-yellow-400';
    return 'text-red-400';
  }
</script>

<div class="bg-slate-800 rounded-lg p-6">
  <h2 class="text-xl font-semibold text-slate-300 mb-4">Risk Assessment</h2>
  
  <div class="space-y-4">
    <div>
      <div class="flex justify-between items-center mb-2">
        <span class="text-sm text-slate-400">Overall Risk Score</span>
        <span class="text-lg font-bold {getRiskColor(project.riskScore || 0)}">{project.riskScore?.toFixed(1) || 'N/A'}</span>
      </div>
      <div class="h-3 bg-slate-700 rounded-full overflow-hidden">
        <div 
          class="h-full {project.riskScore && project.riskScore < 3 ? 'bg-green-500' : project.riskScore && project.riskScore < 4 ? 'bg-yellow-500' : 'bg-red-500'}" 
          style="width: {project.riskScore ? Math.min(project.riskScore / 5 * 100, 100) : 0}%"
        ></div>
      </div>
      <p class="mt-1 text-sm text-slate-400 text-right">{project.riskLevel || 'Unknown'} Risk</p>
    </div>
    
    {#if project.riskDetails}
      <div class="mt-4 space-y-3">
        <div>
          <div class="flex justify-between">
            <span class="text-sm text-slate-400">Market Analysis</span>
            <span class="text-sm font-medium text-slate-300">{project.riskDetails.marketAnalysis}</span>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <span class="text-sm text-slate-400">Regulatory Environment</span>
            <span class="text-sm font-medium text-slate-300">{project.riskDetails.regulatory}</span>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <span class="text-sm text-slate-400">Technical Complexity</span>
            <span class="text-sm font-medium text-slate-300">{project.riskDetails.technical}</span>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <span class="text-sm text-slate-400">Environmental Impact</span>
            <span class="text-sm font-medium text-slate-300">{project.riskDetails.environmental}</span>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div> 