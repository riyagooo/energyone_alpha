<script>
  export let project;

  const riskCategories = [
    {
      name: 'Technical Risk',
      score: 3.5,
      risks: [
        { name: 'Technology Maturity', score: 3.2, description: 'Assessment of technology readiness and reliability' },
        { name: 'Performance Risk', score: 3.8, description: 'Potential performance deviations from expected output' },
        { name: 'Maintenance Risk', score: 3.5, description: 'Risk associated with equipment maintenance and reliability' }
      ]
    },
    {
      name: 'Financial Risk',
      score: 3.2,
      risks: [
        { name: 'Revenue Risk', score: 3.0, description: 'Risk of revenue shortfall due to market conditions' },
        { name: 'Cost Overrun', score: 3.4, description: 'Risk of construction and operational cost overruns' },
        { name: 'Currency Risk', score: 3.2, description: 'Risk associated with currency fluctuations' }
      ]
    },
    {
      name: 'Regulatory Risk',
      score: 2.8,
      risks: [
        { name: 'Permitting Risk', score: 2.5, description: 'Risk of delays in obtaining necessary permits' },
        { name: 'Policy Risk', score: 3.0, description: 'Risk of changes in government policies' },
        { name: 'Compliance Risk', score: 3.0, description: 'Risk of non-compliance with regulations' }
      ]
    },
    {
      name: 'Environmental Risk',
      score: 3.0,
      risks: [
        { name: 'Climate Risk', score: 3.2, description: 'Risk from climate change impacts' },
        { name: 'Resource Risk', score: 2.8, description: 'Risk of resource availability' },
        { name: 'Impact Risk', score: 3.0, description: 'Risk of environmental impact' }
      ]
    },
    {
      name: 'Political Risk',
      score: 3.5,
      risks: [
        { name: 'Stability Risk', score: 3.5, description: 'Risk from political instability' },
        { name: 'Sovereign Risk', score: 3.5, description: 'Risk from government actions' },
        { name: 'Community Risk', score: 3.5, description: 'Risk from community relations' }
      ]
    }
  ];

  function getRiskColor(score) {
    if (score <= 2) return 'text-green-500';
    if (score <= 3) return 'text-yellow-500';
    if (score <= 4) return 'text-orange-500';
    return 'text-red-500';
  }

  function getRiskLevel(score) {
    if (score <= 2) return 'Low';
    if (score <= 3) return 'Medium';
    if (score <= 4) return 'High';
    return 'Very High';
  }
</script>

<div class="bg-white rounded-lg shadow-sm p-6 mb-6">
  <h2 class="text-lg font-semibold text-slate-900 mb-4">Risk Analysis</h2>
  
  <!-- Overall Risk Score -->
  <div class="mb-6 p-4 bg-slate-50 rounded-lg">
    <div class="flex items-center justify-between">
      <div>
        <h3 class="text-sm font-medium text-slate-500">Overall Risk Score</h3>
        <div class="text-3xl font-bold {getRiskColor(project.riskScore)}">{project.riskScore}/5</div>
        <div class="text-sm font-medium {getRiskColor(project.riskScore)}">{getRiskLevel(project.riskScore)} Risk</div>
      </div>
      <div class="text-sm text-slate-500 max-w-md">
        This score represents the overall risk assessment of the project, taking into account technical, financial, regulatory, environmental, and political factors.
      </div>
    </div>
  </div>

  <!-- Risk Categories -->
  <div class="space-y-6">
    {#each riskCategories as category}
      <div class="border-b border-slate-200 pb-6 last:border-b-0 last:pb-0">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-medium text-slate-900">{category.name}</h3>
          <div class="flex items-center gap-2">
            <div class="text-lg font-semibold {getRiskColor(category.score)}">{category.score}/5</div>
            <div class="text-sm {getRiskColor(category.score)}">{getRiskLevel(category.score)}</div>
          </div>
        </div>
        
        <div class="space-y-3">
          {#each category.risks as risk}
            <div class="flex items-start justify-between">
              <div>
                <div class="font-medium text-slate-900">{risk.name}</div>
                <div class="text-sm text-slate-500">{risk.description}</div>
              </div>
              <div class="text-sm font-medium {getRiskColor(risk.score)}">{risk.score}/5</div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div> 