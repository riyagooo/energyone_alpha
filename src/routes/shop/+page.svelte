<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import ShopSidebar from '../../components/shop/ShopSidebar.svelte';
  import ShopCards from '../../components/shop/ShopCards.svelte';
  import Pagination from '../../components/shop/Pagination.svelte';
  import Cart from '../../components/shop/Cart.svelte';
  import type { Project, ProjectFilters } from '$lib/types/project';

  export let data: { projects: Project[] };

  onMount(() => {
    console.log('Shop page loaded with data:', data);
    console.log('Projects available:', data.projects.length);
    
    // Log each project for debugging
    data.projects.forEach((project, index) => {
      console.log(`Project ${index + 1}:`, project.name, 
                  `Type: ${project.type}`,
                  `Location: ${project.location}`,
                  `Risk: ${project.riskLevel}`,
                  `Status: ${project.status}`);
    });
  });

  let currentPage = 1;
  const itemsPerPage = 6;
  
  let filters: ProjectFilters = {
    priceRange: {
      min: 1000000,
      max: 3000000000
    },
    minimumInvestmentRange: {
      min: 1000,
      max: 5000000
    },
    projectTypes: [],
    regions: [],
    riskLevels: [],
    statuses: [],
    investmentTypes: []
  };

  let cart: (Project & { quantity: number })[] = [];
  let isCartOpen = false;

  function handlePageChange(page: number) {
    currentPage = page;
  }

  function addToCart(project: Project) {
    const existingItem = cart.find(item => item.id === project.id);
    if (existingItem) {
      cart = cart.map(item =>
        item.id === project.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      cart = [...cart, { ...project, quantity: 1 }];
    }
  }
  
  $: filteredProjects = data.projects.filter(project => {
    // Apply individual filters
    const matchesPrice = project.investment >= filters.priceRange.min && 
                         project.investment <= filters.priceRange.max;
    
    const matchesMinimumInvestment = project.minimumInvestment >= filters.minimumInvestmentRange.min && 
                                    project.minimumInvestment <= filters.minimumInvestmentRange.max;
    
    const matchesType = filters.projectTypes.length === 0 || 
                      filters.projectTypes.includes(project.type);
    
    const matchesRegion = filters.regions.length === 0;  // Temporarily disable region filtering
    
    const matchesRisk = filters.riskLevels.length === 0 || 
                      filters.riskLevels.includes(project.riskLevel);
    
    const matchesStatus = filters.statuses.length === 0 || 
                        filters.statuses.includes(project.status);
                        
    const matchesInvestmentType = !filters.investmentTypes?.length ||
                        filters.investmentTypes.includes(project.investmentType);
    
    return matchesPrice && matchesMinimumInvestment && matchesType && matchesRegion && matchesRisk && matchesStatus && matchesInvestmentType;
  });

  $: totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  
  $: paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
</script>

<div class="min-h-screen bg-slate-900">
  <!-- Main Content -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-slate-300">Available Projects</h1>
      <p class="mt-2 text-slate-400">Browse and filter renewable energy projects</p>
    </div>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- Sidebar -->
      <div class="w-full md:w-64">
        <ShopSidebar bind:filters />
      </div>

      <!-- Main Content -->
      <div class="flex-1">
        <!-- Filters Bar -->
        <div class="mb-6 flex flex-wrap items-center gap-4 bg-slate-800 p-4 rounded-lg">
          <div class="flex-1">
            <div class="relative">
              <input
                type="text"
                placeholder="Search projects..."
                class="w-full pl-10 pr-4 py-2 border border-slate-700 rounded-lg bg-slate-900 text-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              />
              <svg
                class="absolute left-3 top-2.5 h-5 w-5 text-slate-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <select
              class="px-4 py-2 border border-slate-700 rounded-lg bg-slate-900 text-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <option>Sort by: Newest</option>
              <option>Sort by: Highest IRR</option>
              <option>Sort by: Lowest Risk</option>
            </select>
          </div>
        </div>

        <!-- Product Grid -->
        <div class="mb-8">
          {#if filteredProjects.length > 0}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {#each paginatedProjects as project}
                <div class="bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" style="{`view-transition-name: product-${project.name}`}">
                  <div class="relative h-48">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      class="w-full h-full object-cover"
                    />
                    <div class="absolute top-2 right-2">
                      <span class={`px-2 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Operational' ? 'bg-green-900 text-green-100' :
                        project.status === 'Under Construction' ? 'bg-blue-900 text-blue-100' :
                        'bg-yellow-900 text-yellow-100'
                      }`}>
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
                          <span class={`px-3 py-1 rounded-full text-sm font-semibold ${
                            project.riskScore && project.riskScore <= 2.5 ? 'bg-green-900 text-green-100' :
                            project.riskScore && project.riskScore <= 3.5 ? 'bg-yellow-900 text-yellow-100' :
                            'bg-red-900 text-red-100'
                          } cursor-help`}>
                            {project.riskScore?.toFixed(1) ?? 'N/A'}
                          </span>
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
                        <span class="text-sm font-medium text-slate-300">
                          {#if project.investment >= 1000000000}
                            ${(project.investment / 1000000000).toFixed(1)}B
                          {:else if project.investment >= 1000000}
                            ${(project.investment / 1000000).toFixed(1)}M
                          {:else}
                            ${(project.investment / 1000).toFixed(1)}K
                          {/if}
                        </span>
                      </div>
                      
                      <div class="flex items-center justify-between">
                        <span class="text-sm text-slate-400">Min. Investment</span>
                        <span class="text-sm font-medium text-slate-300">
                          {#if project.minimumInvestment >= 1000000}
                            ${(project.minimumInvestment / 1000000).toFixed(1)}M
                          {:else}
                            ${(project.minimumInvestment / 1000).toFixed(1)}K
                          {/if}
                        </span>
                      </div>
                      
                      <div class="flex items-center justify-between">
                        <span class="text-sm text-slate-400">Investment Type</span>
                        <span class="text-sm font-medium text-slate-300">
                          {project.investmentType.charAt(0).toUpperCase() + project.investmentType.slice(1)}
                        </span>
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
            </div>
          {:else}
            <div class="text-center py-8">
              <p class="text-slate-400">No projects match your current filters. Please adjust your criteria.</p>
            </div>
          {/if}
        </div>

        <!-- Pagination -->
        <div class="flex justify-center">
          <Pagination
            {currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
        
        <!-- Project Stats -->
        <div class="mt-8 p-4 bg-slate-800 rounded-lg text-slate-400 text-sm">
          <p>Showing {paginatedProjects.length} of {filteredProjects.length} projects (Page {currentPage} of {totalPages || 1})</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Cart -->
  <Cart bind:cart bind:isOpen={isCartOpen} />
</div> 