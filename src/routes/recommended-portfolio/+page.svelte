<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import ShopCards from '../../components/shop/ShopCards.svelte';
  import Pagination from '../../components/shop/Pagination.svelte';
  import Cart from '../../components/shop/Cart.svelte';
  import type { Project } from '$lib/types/project';

  let recommendedProjects: Project[] = [];
  let currentPage = 1;
  const itemsPerPage = 6;
  let isLoading = true;
  let userProfile = {
    riskTolerance: '',
    investmentHorizon: '',
    financialGoals: '',
    investmentAmount: '',
    investmentPreference: ''
  };

  // Cart functionality
  let cart: (Project & { quantity: number })[] = [];
  let isCartOpen = false;

  function addToCart(project: Project) {
    const existingItem = cart.find(item => item.id === project.id);
    if (existingItem) {
      cart = cart.map(item =>
        item.id === project.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      cart = [...cart, { ...project, quantity: 1 }];
    }
    // Show cart when adding an item
    isCartOpen = true;
  }

  onMount(() => {
    // Load user preferences from localStorage
    userProfile = {
      riskTolerance: localStorage.getItem('riskTolerance') || '',
      investmentHorizon: localStorage.getItem('investmentHorizon') || '',
      financialGoals: localStorage.getItem('financialGoals') || '',
      investmentAmount: localStorage.getItem('investmentAmount') || '',
      investmentPreference: localStorage.getItem('investmentPreference') || ''
    };
    
    console.log('User profile:', userProfile);
    
    // In a real app, these would be fetched from an API based on the user's profile
    fetchRecommendedProjects();
  });

  async function fetchRecommendedProjects() {
    try {
      // In a real app, this would be an API call with the user's profile
      // For now, we'll simulate it with sample data
      const response = await fetch('/api/projects');
      let allProjects: Project[] = [];
      
      try {
        const data = await response.json();
        if (Array.isArray(data)) {
          allProjects = data;
        } else if (data && typeof data === 'object' && Array.isArray(data.projects)) {
          allProjects = data.projects;
        } else {
          console.error('Projects data is not in expected format', data);
          allProjects = getMockProjects(); // Fallback to mock data
        }
      } catch (parseError) {
        console.error('Error parsing projects data:', parseError);
        allProjects = getMockProjects(); // Fallback to mock data
      }
      
      // Filter projects based on user profile (this would be done by the API in a real app)
      recommendedProjects = filterProjectsByUserProfile(allProjects, userProfile);
      
    } catch (error) {
      console.error('Error fetching recommended projects:', error);
      // Fallback to mock data
      recommendedProjects = getMockProjects();
    } finally {
      isLoading = false;
    }
  }

  function filterProjectsByUserProfile(projects: Project[], profile: any): Project[] {
    // This is a simplified algorithm - in a real app, this would be more sophisticated
    return projects
      .filter(project => {
        // Match by investment amount
        if (profile.investmentAmount === 'small' && (project.minimumInvestment > 10000)) return false;
        if (profile.investmentAmount === 'medium' && (project.minimumInvestment > 100000)) return false;
        if (profile.investmentAmount === 'large' && (project.minimumInvestment > 500000)) return false;
        
        // Match by risk tolerance
        if (profile.riskTolerance === 'low' && project.riskScore && project.riskScore > 2.5) return false;
        if (profile.riskTolerance === 'medium' && project.riskScore && project.riskScore > 3.5) return false;
        
        return true;
      })
      .sort((a, b) => {
        // Sort based on preference
        if (profile.investmentPreference === 'high-return') {
          return (b.irr || 0) - (a.irr || 0);
        } else if (profile.investmentPreference === 'low-risk') {
          return (a.riskScore || 5) - (b.riskScore || 5);
        } else if (profile.investmentPreference === 'environmental-impact') {
          // Higher carbon offset is better for environmental impact
          return (b.carbonOffset || 0) - (a.carbonOffset || 0);
        }
        return 0;
      })
      .slice(0, 10); // Limit to top 10 matches
  }

  function getMockProjects(): Project[] {
    // Mock data for testing
    return [
      {
        id: '1',
        name: 'Solar Farm Alpha',
        type: 'Solar',
        location: 'Arizona, USA',
        status: 'Operational',
        riskLevel: 'Low',
        riskScore: 1.8,
        irr: 7.2,
        investment: 5000000,
        minimumInvestment: 5000,
        image: 'https://images.pexels.com/photos/15751137/pexels-photo-15751137/free-photo-of-top-view-of-a-solar-panels.jpeg?auto=compress&cs=tinysrgb&w=600',
        capacity: '50 MW',
        investmentType: 'equity',
        carbonOffset: 75000,
        developer: 'SunPower Corp',
        description: 'A utility-scale solar PV farm with tracking technology to maximize energy output throughout the day.'
      },
      {
        id: '2',
        name: 'Coastal Wind Project',
        type: 'Wind',
        location: 'North Carolina, USA',
        status: 'Under Construction',
        riskLevel: 'Medium',
        riskScore: 3.1,
        irr: 9.4,
        investment: 12000000,
        minimumInvestment: 10000,
        image: 'https://images.pexels.com/photos/1108814/pexels-photo-1108814.jpeg?auto=compress&cs=tinysrgb&w=600',
        capacity: '75 MW',
        investmentType: 'debt',
        carbonOffset: 120000,
        developer: 'Orsted Wind Power',
        description: 'An offshore wind farm utilizing the latest turbine technology to harness consistent coastal winds.'
      },
      {
        id: '3',
        name: 'Hydroelectric Station',
        type: 'Hydro',
        location: 'Washington, USA',
        status: 'Operational',
        riskLevel: 'Low',
        riskScore: 2.0,
        irr: 6.8,
        investment: 8500000,
        minimumInvestment: 25000,
        image: 'https://images.pexels.com/photos/1259924/pexels-photo-1259924.jpeg?auto=compress&cs=tinysrgb&w=600',
        capacity: '35 MW',
        investmentType: 'equity',
        carbonOffset: 60000,
        developer: 'Pacific Hydro',
        description: 'A run-of-river hydroelectric facility with minimal environmental impact and stable power generation.'
      }
    ];
  }

  function viewAllProjects() {
    goto('/shop');
  }

  function handlePageChange(page: number) {
    currentPage = page;
  }

  $: totalPages = Math.ceil(recommendedProjects.length / itemsPerPage);
  
  $: paginatedProjects = recommendedProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function getUserProfileSummary(): string {
    let summary = '';
    
    if (userProfile.riskTolerance === 'low') summary += 'lower-risk ';
    if (userProfile.riskTolerance === 'medium') summary += 'moderate-risk ';
    if (userProfile.riskTolerance === 'high') summary += 'higher-risk ';
    
    if (userProfile.investmentHorizon === 'short') summary += 'short-term ';
    if (userProfile.investmentHorizon === 'medium') summary += 'medium-term ';
    if (userProfile.investmentHorizon === 'long') summary += 'long-term ';
    
    summary += 'investments';
    
    return summary;
  }
</script>

<div class="min-h-screen bg-slate-900">
  <!-- Main Content -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-slate-300">Your AI-Recommended Portfolio</h1>
      <p class="mt-2 text-slate-400">Based on your profile, we've selected these projects for you</p>
    </div>
    
    <!-- Profile Summary -->
    <div class="mb-8 bg-slate-800 p-6 rounded-lg">
      <h2 class="text-xl font-semibold text-white mb-3">Your Investment Profile</h2>
      <div class="flex flex-wrap gap-4">
        <div class="px-4 py-2 bg-slate-700 rounded-full text-slate-300">
          <span class="font-medium">Risk Tolerance:</span> {userProfile.riskTolerance || 'Not specified'}
        </div>
        <div class="px-4 py-2 bg-slate-700 rounded-full text-slate-300">
          <span class="font-medium">Time Horizon:</span> {userProfile.investmentHorizon || 'Not specified'}
        </div>
        <div class="px-4 py-2 bg-slate-700 rounded-full text-slate-300">
          <span class="font-medium">Goal:</span> {userProfile.financialGoals || 'Not specified'}
        </div>
        <div class="px-4 py-2 bg-slate-700 rounded-full text-slate-300">
          <span class="font-medium">Preference:</span> {userProfile.investmentPreference || 'Not specified'}
        </div>
      </div>
      <p class="mt-4 text-slate-400">Our AI has selected projects suitable for {getUserProfileSummary()}</p>
    </div>

    <!-- Loading State -->
    {#if isLoading}
      <div class="flex justify-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    {:else}
      <!-- Projects Grid -->
      <div class="mb-8">
        {#if recommendedProjects.length > 0}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each paginatedProjects as project}
              <div class="bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div class="relative h-48">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute top-2 left-2">
                    <span class="px-2 py-1 bg-blue-600 rounded-full text-xs font-semibold text-white">
                      AI Recommended
                    </span>
                  </div>
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

                  <div class="mt-4 flex items-center justify-between">
                    <button
                      on:click={() => addToCart(project)}
                      class="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Add to Cart
                    </button>
                    
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
          
          <!-- Pagination -->
          {#if recommendedProjects.length > itemsPerPage}
            <div class="flex justify-center mt-8">
              <Pagination
                {currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          {/if}
          
        {:else}
          <div class="text-center py-8">
            <p class="text-slate-400">We couldn't find any projects matching your profile. Please try adjusting your preferences.</p>
          </div>
        {/if}
      </div>
      
      <!-- View All Projects Button -->
      <div class="mt-10 flex justify-center">
        <button 
          on:click={viewAllProjects}
          class="px-8 py-4 bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 text-white font-medium rounded-md shadow-lg text-lg"
        >
          Show Me All Available Projects
        </button>
      </div>
    {/if}
  </div>
  
  <!-- Cart Component -->
  <Cart bind:cart bind:isOpen={isCartOpen} />
</div> 