<script lang="ts">
  import { page } from '$app/stores';
  import { formatCurrency } from '$lib/utils/formatters';
  import type { Project, ProjectFilters } from '$lib/types/project';
  import { createEventDispatcher, onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  export let projects: Project[] = [];
  export let currentPage = 1;
  export let itemsPerPage = 6;
  export let filters: ProjectFilters = {
    priceRange: { min: 0, max: 1000000 },
    projectTypes: [],
    regions: [],
    riskLevels: [],
    statuses: []
  };

  onMount(() => {
    console.log('ShopCards mounted with projects:', projects);
    console.log('Projects count:', projects?.length || 0);
  });

  $: console.log('Projects in ShopCards:', projects?.length || 0);
  $: console.log('Filters in ShopCards:', filters);
  $: console.log('Current page:', currentPage);

  // Simplified filter logic
  $: filteredProjects = projects ? projects.filter(project => {
    // Only filter if a filter is actually applied
    if (!filters.projectTypes.length && !filters.regions.length && 
        !filters.riskLevels.length && !filters.statuses.length && 
        !filters.investmentTypes?.length &&
        filters.priceRange.min === 0 && filters.priceRange.max === 3000000000) {
      // No filters applied, show all projects
      return true;
    }
    
    // Apply individual filters
    const matchesPrice = project.investment >= filters.priceRange.min && 
                         project.investment <= filters.priceRange.max;
    
    const matchesType = filters.projectTypes.length === 0 || 
                        filters.projectTypes.includes(project.type);
    
    const matchesRegion = filters.regions.length === 0;  // Temporarily disable region filtering
    
    const matchesRisk = filters.riskLevels.length === 0 || 
                        filters.riskLevels.includes(project.riskLevel);
    
    const matchesStatus = filters.statuses.length === 0 || 
                          filters.statuses.includes(project.status);
                          
    const matchesInvestmentType = !filters.investmentTypes?.length ||
                          filters.investmentTypes.includes(project.investmentType);
    
    return matchesPrice && matchesType && matchesRegion && matchesRisk && matchesStatus && matchesInvestmentType;
  }) : [];
  
  // Paginate the filtered projects
  $: paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function getRiskColor(riskScore: number | undefined): string {
    if (!riskScore) return 'bg-slate-800 text-slate-300';
    if (riskScore <= 2.5) return 'bg-green-900 text-green-100';
    if (riskScore <= 3.5) return 'bg-yellow-900 text-yellow-100';
    return 'bg-red-900 text-red-100';
  }

  function getStatusColor(status: string | undefined): string {
    if (!status) return 'bg-slate-800 text-slate-300';
    switch (status.toLowerCase()) {
      case 'operational':
        return 'bg-green-900 text-green-100';
      case 'under construction':
        return 'bg-blue-900 text-blue-100';
      case 'development':
        return 'bg-yellow-900 text-yellow-100';
      default:
        return 'bg-slate-800 text-slate-300';
    }
  }

  function getRiskLevelText(riskScore: number | undefined): string {
    if (!riskScore) return 'Unknown Risk';
    if (riskScore <= 2.5) return 'Low Risk';
    if (riskScore <= 3.5) return 'Medium Risk';
    return 'High Risk';
  }
  
  function getInvestmentTypeLabel(type: string | undefined): string {
    if (!type) return 'Mixed';
    return type.charAt(0).toUpperCase() + type.slice(1);
  }
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {#if paginatedProjects.length === 0}
    <div class="col-span-full text-center py-8">
      <p class="text-slate-400">No projects match your filters. Try adjusting your criteria.</p>
    </div>
  {:else}
    {#each paginatedProjects as project}
      <div class="bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
          <h3 class="text-lg font-semibold text-slate-300 mb-1">{project.name}</h3>
          <p class="text-sm text-slate-400 mb-2">{project.location}</p>
          
          <div class="flex items-center justify-between mb-3">
            <span class="text-sm font-medium text-slate-300">{project.type}</span>
            <span class="text-sm font-medium text-slate-300">{project.capacity}</span>
          </div>

          <div class="mb-3">
            <div class="flex items-center justify-between mb-1">
              <span class="text-sm text-slate-400">Risk Score</span>
              <div class="group relative">
                <span class={`px-3 py-1 rounded-full text-sm font-semibold ${getRiskColor(project.riskScore)} cursor-help`}>
                  {project.riskScore?.toFixed(1) ?? 'N/A'}
                </span>
                <div class="absolute right-0 bottom-full mb-2 w-64 p-3 bg-slate-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <div class="text-sm text-slate-300">
                    <h4 class="font-semibold mb-2">AI-Generated Risk Analysis</h4>
                    {#if project.riskDetails}
                      <ul class="space-y-1">
                        <li class="flex justify-between">
                          <span class="text-slate-400">Sentiment:</span>
                          <span class="font-medium">{project.riskDetails.sentiment}</span>
                        </li>
                        <li class="flex justify-between">
                          <span class="text-slate-400">Market Analysis:</span>
                          <span class="font-medium">{project.riskDetails.marketAnalysis}</span>
                        </li>
                        <li class="flex justify-between">
                          <span class="text-slate-400">Regulatory:</span>
                          <span class="font-medium">{project.riskDetails.regulatory}</span>
                        </li>
                        <li class="flex justify-between">
                          <span class="text-slate-400">Technical:</span>
                          <span class="font-medium">{project.riskDetails.technical}</span>
                        </li>
                        <li class="flex justify-between">
                          <span class="text-slate-400">Environmental:</span>
                          <span class="font-medium">{project.riskDetails.environmental}</span>
                        </li>
                      </ul>
                    {:else}
                      <p class="text-slate-400">Risk analysis data not available</p>
                    {/if}
                  </div>
                  <div class="absolute bottom-0 right-0 w-3 h-3 bg-slate-900 transform rotate-45 translate-y-1/2 translate-x-1/2"></div>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-slate-400">IRR</span>
              <span class="text-sm font-medium text-green-400">{project.irr ?? 'N/A'}%</span>
            </div>
          </div>

          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-sm text-slate-400">Project Size</span>
              <span class="text-sm font-medium text-slate-300">{formatCurrency(project.investment)}</span>
            </div>
            
            <div class="flex items-center justify-between">
              <span class="text-sm text-slate-400">Min. Investment</span>
              <span class="text-sm font-medium text-slate-300">{project.minimumInvestment ? formatCurrency(project.minimumInvestment) : 'Contact for details'}</span>
            </div>
            
            <div class="flex items-center justify-between">
              <span class="text-sm text-slate-400">Investment Type</span>
              <span class="text-sm font-medium text-slate-300">{getInvestmentTypeLabel(project.investmentType)}</span>
            </div>
          </div>

          <div class="mt-4 flex items-center justify-end">
            <a 
              href="/projects/{project.id}" 
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    {/each}
  {/if}
</div> 