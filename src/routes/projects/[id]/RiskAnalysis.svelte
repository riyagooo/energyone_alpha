<script lang="ts">
  import type { Project } from '$lib/types/project';
  
  export let project: Project;
  
  function getRiskLevelText(score: number): string {
    if (score < 2.5) return 'Low';
    if (score < 3.5) return 'Medium';
    return 'High';
  }
  
  function getRiskColor(score: number): string {
    if (score < 2.5) return 'text-green-400';
    if (score < 3.5) return 'text-yellow-400';
    return 'text-red-400';
  }
  
  function getProgressBarColor(score: number): string {
    if (score < 2.5) return 'bg-green-500';
    if (score < 3.5) return 'bg-yellow-500';
    return 'bg-red-500';
  }
  
  function getRiskBadgeColor(score: number): string {
    if (score < 2.5) return 'bg-green-900 text-green-100';
    if (score < 3.5) return 'bg-yellow-900 text-yellow-100';
    return 'bg-red-900 text-red-100';
  }
  
  // Default risk scores if not provided in project data
  const riskScores = {
    overall: project.riskScore || 3.2,
    technical: {
      overall: 3.5,
      technology: 3.2,
      performance: 3.8,
      maintenance: 3.5
    },
    financial: {
      overall: 3.2,
      revenue: 3.0,
      costOverrun: 3.4,
      currency: 3.2
    },
    regulatory: {
      overall: 2.8,
      permitting: 2.5,
      policy: 3.0,
      compliance: 3.0
    },
    environmental: {
      overall: 3.0,
      climate: 3.2,
      resource: 2.8,
      impact: 3.0
    },
    political: {
      overall: 3.5,
      stability: 3.5,
      sovereign: 3.5,
      community: 3.5
    }
  };
</script>

<div class="bg-slate-800 rounded-lg p-6">
  <h2 class="text-xl font-semibold text-slate-300 mb-6">Risk Analysis</h2>
  
  <!-- Overall Risk Score -->
  <div class="mb-8">
    <h3 class="text-lg font-semibold text-slate-300 mb-2">Overall Risk Score</h3>
    <div class="flex items-center mb-2">
      <div class="text-3xl font-bold {getRiskColor(riskScores.overall)}">{riskScores.overall.toFixed(1)}</div>
      <div class="text-slate-400 ml-2">/5</div>
      <div class="ml-4 px-3 py-1 rounded-md text-sm font-medium {getRiskBadgeColor(riskScores.overall)}">
        {getRiskLevelText(riskScores.overall)} Risk
      </div>
    </div>
    <div class="h-2 bg-slate-700 rounded-full overflow-hidden mb-3">
      <div 
        class="{getProgressBarColor(riskScores.overall)} h-full" 
        style="width: {(riskScores.overall / 5) * 100}%"
      ></div>
    </div>
    <p class="text-sm text-slate-400">
      This score represents the overall risk assessment of the project, taking into account technical, financial, regulatory, environmental, and political factors.
    </p>
  </div>
  
  <!-- Technical Risk -->
  <div class="border-t border-slate-700 pt-6 mb-6">
    <div class="flex justify-between items-center mb-3">
      <h3 class="text-lg font-semibold text-slate-300">Technical Risk</h3>
      <div class="flex items-center">
        <div class="font-bold {getRiskColor(riskScores.technical.overall)}">{riskScores.technical.overall.toFixed(1)}/5</div>
        <div class="ml-2 px-2 py-0.5 rounded text-xs font-medium {getRiskBadgeColor(riskScores.technical.overall)}">
          {getRiskLevelText(riskScores.technical.overall)}
        </div>
      </div>
    </div>
    
    <div class="space-y-3">
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-sm text-slate-400">Technology Maturity</span>
          <span class="text-sm font-medium {getRiskColor(riskScores.technical.technology)}">{riskScores.technical.technology.toFixed(1)}/5</span>
        </div>
        <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div 
            class="{getProgressBarColor(riskScores.technical.technology)} h-full" 
            style="width: {(riskScores.technical.technology / 5) * 100}%"
          ></div>
        </div>
        <p class="mt-1 text-xs text-slate-500">Assessment of technology readiness and reliability</p>
      </div>
      
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-sm text-slate-400">Performance Risk</span>
          <span class="text-sm font-medium {getRiskColor(riskScores.technical.performance)}">{riskScores.technical.performance.toFixed(1)}/5</span>
        </div>
        <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div 
            class="{getProgressBarColor(riskScores.technical.performance)} h-full" 
            style="width: {(riskScores.technical.performance / 5) * 100}%"
          ></div>
        </div>
        <p class="mt-1 text-xs text-slate-500">Potential performance deviations from expected output</p>
      </div>
      
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-sm text-slate-400">Maintenance Risk</span>
          <span class="text-sm font-medium {getRiskColor(riskScores.technical.maintenance)}">{riskScores.technical.maintenance.toFixed(1)}/5</span>
        </div>
        <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div 
            class="{getProgressBarColor(riskScores.technical.maintenance)} h-full" 
            style="width: {(riskScores.technical.maintenance / 5) * 100}%"
          ></div>
        </div>
        <p class="mt-1 text-xs text-slate-500">Risk associated with equipment maintenance and reliability</p>
      </div>
    </div>
  </div>
  
  <!-- Financial Risk -->
  <div class="border-t border-slate-700 pt-6 mb-6">
    <div class="flex justify-between items-center mb-3">
      <h3 class="text-lg font-semibold text-slate-300">Financial Risk</h3>
      <div class="flex items-center">
        <div class="font-bold {getRiskColor(riskScores.financial.overall)}">{riskScores.financial.overall.toFixed(1)}/5</div>
        <div class="ml-2 px-2 py-0.5 rounded text-xs font-medium {getRiskBadgeColor(riskScores.financial.overall)}">
          {getRiskLevelText(riskScores.financial.overall)}
        </div>
      </div>
    </div>
    
    <div class="space-y-3">
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-sm text-slate-400">Revenue Risk</span>
          <span class="text-sm font-medium {getRiskColor(riskScores.financial.revenue)}">{riskScores.financial.revenue.toFixed(1)}/5</span>
        </div>
        <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div 
            class="{getProgressBarColor(riskScores.financial.revenue)} h-full" 
            style="width: {(riskScores.financial.revenue / 5) * 100}%"
          ></div>
        </div>
        <p class="mt-1 text-xs text-slate-500">Risk of revenue shortfall due to market conditions</p>
      </div>
      
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-sm text-slate-400">Cost Overrun</span>
          <span class="text-sm font-medium {getRiskColor(riskScores.financial.costOverrun)}">{riskScores.financial.costOverrun.toFixed(1)}/5</span>
        </div>
        <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div 
            class="{getProgressBarColor(riskScores.financial.costOverrun)} h-full" 
            style="width: {(riskScores.financial.costOverrun / 5) * 100}%"
          ></div>
        </div>
        <p class="mt-1 text-xs text-slate-500">Risk of construction and operational cost overruns</p>
      </div>
      
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-sm text-slate-400">Currency Risk</span>
          <span class="text-sm font-medium {getRiskColor(riskScores.financial.currency)}">{riskScores.financial.currency.toFixed(1)}/5</span>
        </div>
        <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div 
            class="{getProgressBarColor(riskScores.financial.currency)} h-full" 
            style="width: {(riskScores.financial.currency / 5) * 100}%"
          ></div>
        </div>
        <p class="mt-1 text-xs text-slate-500">Risk associated with currency fluctuations</p>
      </div>
    </div>
  </div>
  
  <!-- Regulatory Risk -->
  <div class="border-t border-slate-700 pt-6 mb-6">
    <div class="flex justify-between items-center mb-3">
      <h3 class="text-lg font-semibold text-slate-300">Regulatory Risk</h3>
      <div class="flex items-center">
        <div class="font-bold {getRiskColor(riskScores.regulatory.overall)}">{riskScores.regulatory.overall.toFixed(1)}/5</div>
        <div class="ml-2 px-2 py-0.5 rounded text-xs font-medium {getRiskBadgeColor(riskScores.regulatory.overall)}">
          {getRiskLevelText(riskScores.regulatory.overall)}
        </div>
      </div>
    </div>
    
    <div class="space-y-3">
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-sm text-slate-400">Permitting Risk</span>
          <span class="text-sm font-medium {getRiskColor(riskScores.regulatory.permitting)}">{riskScores.regulatory.permitting.toFixed(1)}/5</span>
        </div>
        <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div 
            class="{getProgressBarColor(riskScores.regulatory.permitting)} h-full" 
            style="width: {(riskScores.regulatory.permitting / 5) * 100}%"
          ></div>
        </div>
        <p class="mt-1 text-xs text-slate-500">Risk of delays in obtaining necessary permits</p>
      </div>
      
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-sm text-slate-400">Policy Risk</span>
          <span class="text-sm font-medium {getRiskColor(riskScores.regulatory.policy)}">{riskScores.regulatory.policy.toFixed(1)}/5</span>
        </div>
        <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div 
            class="{getProgressBarColor(riskScores.regulatory.policy)} h-full" 
            style="width: {(riskScores.regulatory.policy / 5) * 100}%"
          ></div>
        </div>
        <p class="mt-1 text-xs text-slate-500">Risk of changes in government policies</p>
      </div>
      
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-sm text-slate-400">Compliance Risk</span>
          <span class="text-sm font-medium {getRiskColor(riskScores.regulatory.compliance)}">{riskScores.regulatory.compliance.toFixed(1)}/5</span>
        </div>
        <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div 
            class="{getProgressBarColor(riskScores.regulatory.compliance)} h-full" 
            style="width: {(riskScores.regulatory.compliance / 5) * 100}%"
          ></div>
        </div>
        <p class="mt-1 text-xs text-slate-500">Risk of non-compliance with regulations</p>
      </div>
    </div>
  </div>
  
  <!-- Environmental Risk -->
  <div class="border-t border-slate-700 pt-6 mb-6">
    <div class="flex justify-between items-center mb-3">
      <h3 class="text-lg font-semibold text-slate-300">Environmental Risk</h3>
      <div class="flex items-center">
        <div class="font-bold {getRiskColor(riskScores.environmental.overall)}">{riskScores.environmental.overall.toFixed(1)}/5</div>
        <div class="ml-2 px-2 py-0.5 rounded text-xs font-medium {getRiskBadgeColor(riskScores.environmental.overall)}">
          {getRiskLevelText(riskScores.environmental.overall)}
        </div>
      </div>
    </div>
    
    <div class="space-y-3">
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-sm text-slate-400">Climate Risk</span>
          <span class="text-sm font-medium {getRiskColor(riskScores.environmental.climate)}">{riskScores.environmental.climate.toFixed(1)}/5</span>
        </div>
        <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div 
            class="{getProgressBarColor(riskScores.environmental.climate)} h-full" 
            style="width: {(riskScores.environmental.climate / 5) * 100}%"
          ></div>
        </div>
        <p class="mt-1 text-xs text-slate-500">Risk from climate change impacts</p>
      </div>
      
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-sm text-slate-400">Resource Risk</span>
          <span class="text-sm font-medium {getRiskColor(riskScores.environmental.resource)}">{riskScores.environmental.resource.toFixed(1)}/5</span>
        </div>
        <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div 
            class="{getProgressBarColor(riskScores.environmental.resource)} h-full" 
            style="width: {(riskScores.environmental.resource / 5) * 100}%"
          ></div>
        </div>
        <p class="mt-1 text-xs text-slate-500">Risk of resource availability</p>
      </div>
      
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-sm text-slate-400">Impact Risk</span>
          <span class="text-sm font-medium {getRiskColor(riskScores.environmental.impact)}">{riskScores.environmental.impact.toFixed(1)}/5</span>
        </div>
        <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div 
            class="{getProgressBarColor(riskScores.environmental.impact)} h-full" 
            style="width: {(riskScores.environmental.impact / 5) * 100}%"
          ></div>
        </div>
        <p class="mt-1 text-xs text-slate-500">Risk of environmental impact</p>
      </div>
    </div>
  </div>
  
  <!-- Political Risk -->
  <div class="border-t border-slate-700 pt-6">
    <div class="flex justify-between items-center mb-3">
      <h3 class="text-lg font-semibold text-slate-300">Political Risk</h3>
      <div class="flex items-center">
        <div class="font-bold {getRiskColor(riskScores.political.overall)}">{riskScores.political.overall.toFixed(1)}/5</div>
        <div class="ml-2 px-2 py-0.5 rounded text-xs font-medium {getRiskBadgeColor(riskScores.political.overall)}">
          {getRiskLevelText(riskScores.political.overall)}
        </div>
      </div>
    </div>
    
    <div class="space-y-3">
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-sm text-slate-400">Stability Risk</span>
          <span class="text-sm font-medium {getRiskColor(riskScores.political.stability)}">{riskScores.political.stability.toFixed(1)}/5</span>
        </div>
        <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div 
            class="{getProgressBarColor(riskScores.political.stability)} h-full" 
            style="width: {(riskScores.political.stability / 5) * 100}%"
          ></div>
        </div>
        <p class="mt-1 text-xs text-slate-500">Risk from political instability</p>
      </div>
      
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-sm text-slate-400">Sovereign Risk</span>
          <span class="text-sm font-medium {getRiskColor(riskScores.political.sovereign)}">{riskScores.political.sovereign.toFixed(1)}/5</span>
        </div>
        <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div 
            class="{getProgressBarColor(riskScores.political.sovereign)} h-full" 
            style="width: {(riskScores.political.sovereign / 5) * 100}%"
          ></div>
        </div>
        <p class="mt-1 text-xs text-slate-500">Risk from government actions</p>
      </div>
      
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-sm text-slate-400">Community Risk</span>
          <span class="text-sm font-medium {getRiskColor(riskScores.political.community)}">{riskScores.political.community.toFixed(1)}/5</span>
        </div>
        <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div 
            class="{getProgressBarColor(riskScores.political.community)} h-full" 
            style="width: {(riskScores.political.community / 5) * 100}%"
          ></div>
        </div>
        <p class="mt-1 text-xs text-slate-500">Risk from community relations</p>
      </div>
    </div>
  </div>
</div> 