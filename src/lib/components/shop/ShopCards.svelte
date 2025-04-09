<script>
  export let projects = [];
  export let filters = {
    projectTypes: [],
    regions: [],
    riskLevels: [],
    statuses: [],
    minPrice: 0,
    maxPrice: 1000000000
  };

  import { formatCurrency } from '$lib/utils/formatters';

  function getRiskColor(riskLevel) {
    switch (riskLevel.toLowerCase()) {
      case 'low':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  function getStatusColor(status) {
    switch (status.toLowerCase()) {
      case 'operational':
        return 'bg-green-100 text-green-800';
      case 'under construction':
        return 'bg-blue-100 text-blue-800';
      case 'development':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  $: filteredProjects = projects.filter(project => {
    // Filter by project type
    if (filters.projectTypes.length > 0 && !filters.projectTypes.includes(project.type)) {
      return false;
    }

    // Filter by region
    if (filters.regions.length > 0 && !filters.regions.includes(project.location.split(',')[1].trim().toLowerCase())) {
      return false;
    }

    // Filter by risk level
    if (filters.riskLevels.length > 0 && !filters.riskLevels.includes(project.riskLevel.toLowerCase())) {
      return false;
    }

    // Filter by status
    if (filters.statuses.length > 0 && !filters.statuses.includes(project.status.toLowerCase())) {
      return false;
    }

    // Filter by price range
    if (project.investment < filters.minPrice || project.investment > filters.maxPrice) {
      return false;
    }

    return true;
  });
</script>

<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {#each filteredProjects as project}
    <div class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div class="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none sm:h-48">
        <img
          src={`/images/projects/${project.id}.jpg`}
          alt={project.name}
          class="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div class="flex flex-1 flex-col space-y-2 p-4">
        <h3 class="text-sm font-medium text-gray-900">
          <a href={`/projects/${project.id}`}>
            <span aria-hidden="true" class="absolute inset-0" />
            {project.name}
          </a>
        </h3>
        <p class="text-sm text-gray-500">{project.location}</p>
        <div class="flex flex-1 flex-col justify-end">
          <div class="mt-4 flex items-center justify-between">
            <p class="text-base font-medium text-gray-900">{formatCurrency(project.investment)}</p>
            <div class="flex items-center space-x-2">
              <span class={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getRiskColor(project.riskLevel)}`}>
                {project.riskLevel}
              </span>
              <span class={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
          </div>
          <div class="mt-2 flex items-center justify-between text-sm">
            <p class="text-gray-500">IRR: {project.irr}%</p>
            <p class="text-gray-500">Risk Score: {project.riskScore}</p>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div> 