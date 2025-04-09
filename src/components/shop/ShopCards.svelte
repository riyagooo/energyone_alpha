<script>
  import { page } from '$app/stores';
  import { formatCurrency } from '$lib/utils/format';

  export let projects = [];
  export let filters = {
    minPrice: 0,
    maxPrice: 1000000000,
    projectTypes: [],
    regions: [],
    riskLevels: [],
    statuses: []
  };

  $: filteredProjects = projects.filter(project => {
    const matchesPrice = project.investment >= filters.minPrice && project.investment <= filters.maxPrice;
    const matchesType = filters.projectTypes.length === 0 || filters.projectTypes.includes(project.type);
    const matchesRegion = filters.regions.length === 0 || filters.regions.includes(project.location.split(',')[1].trim());
    const matchesRisk = filters.riskLevels.length === 0 || filters.riskLevels.includes(project.riskLevel);
    const matchesStatus = filters.statuses.length === 0 || filters.statuses.includes(project.status);
    return matchesPrice && matchesType && matchesRegion && matchesRisk && matchesStatus;
  });

  function getRiskColor(riskScore) {
    if (riskScore <= 2.5) return 'bg-green-100 text-green-800';
    if (riskScore <= 3.5) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  }

  function getStatusColor(status) {
    switch (status) {
      case 'Operational':
        return 'bg-green-100 text-green-800';
      case 'Under Construction':
        return 'bg-blue-100 text-blue-800';
      case 'Development':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  function getRiskLevelText(riskScore) {
    if (riskScore <= 2.5) return 'Low Risk';
    if (riskScore <= 3.5) return 'Medium Risk';
    return 'High Risk';
  }
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {#each filteredProjects as project}
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div class="relative h-48">
        <img 
          src={project.image} 
          alt={project.name}
          class="w-full h-full object-cover"
        />
        <div class="absolute top-2 right-2">
          <span class={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
      </div>
      
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-900 mb-1">{project.name}</h3>
        <p class="text-sm text-gray-600 mb-2">{project.location}</p>
        
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm font-medium text-gray-900">{project.type}</span>
          <span class="text-sm font-medium text-gray-900">{project.capacity}</span>
        </div>

        <div class="mb-3">
          <div class="flex items-center justify-between mb-1">
            <span class="text-sm text-gray-600">Risk Score</span>
            <div class="group relative">
              <span class={`px-3 py-1 rounded-full text-sm font-semibold ${getRiskColor(project.riskScore)} cursor-help`}>
                {project.riskScore.toFixed(1)}
              </span>
              <div class="absolute right-0 bottom-full mb-2 w-64 p-3 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <div class="text-sm text-gray-700">
                  <h4 class="font-semibold mb-2">AI-Generated Risk Analysis</h4>
                  <ul class="space-y-1">
                    <li class="flex justify-between">
                      <span class="text-gray-600">Sentiment:</span>
                      <span class="font-medium">{project.riskDetails.sentiment}</span>
                    </li>
                    <li class="flex justify-between">
                      <span class="text-gray-600">Market Analysis:</span>
                      <span class="font-medium">{project.riskDetails.marketAnalysis}</span>
                    </li>
                    <li class="flex justify-between">
                      <span class="text-gray-600">Regulatory:</span>
                      <span class="font-medium">{project.riskDetails.regulatory}</span>
                    </li>
                    <li class="flex justify-between">
                      <span class="text-gray-600">Technical:</span>
                      <span class="font-medium">{project.riskDetails.technical}</span>
                    </li>
                    <li class="flex justify-between">
                      <span class="text-gray-600">Environmental:</span>
                      <span class="font-medium">{project.riskDetails.environmental}</span>
                    </li>
                  </ul>
                </div>
                <div class="absolute bottom-0 right-0 w-3 h-3 bg-white transform rotate-45 translate-y-1/2 translate-x-1/2"></div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-600">IRR</span>
            <span class="text-sm font-medium text-green-600">{project.irr}%</span>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <span class="text-lg font-bold text-gray-900">{formatCurrency(project.investment)}</span>
          <a 
            href="/projects/{project.id}" 
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  {/each}
</div> 