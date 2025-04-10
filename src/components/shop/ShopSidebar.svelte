<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { formatCurrency } from '$lib/utils/formatters';
  import type { ProjectFilters } from '$lib/types/project';

  export let filters: ProjectFilters;

  const projectTypes = ['Solar', 'Wind', 'Hydro', 'Geothermal', 'Biomass', 'Tidal', 'Wave', 'Storage', 'Hydrogen'] as const;
  const regions = ['North America', 'Europe', 'Asia', 'Africa', 'South America'] as const;
  const riskLevels = ['Low', 'Medium', 'High'] as const;
  const statuses = ['Operational', 'Under Construction', 'Development'] as const;
  const investmentTypes = ['Equity', 'Debt', 'Tax Equity', 'Passive Investment', 'Mixed'] as const;

  type ProjectType = typeof projectTypes[number];
  type Region = typeof regions[number];
  type RiskLevel = typeof riskLevels[number];
  type Status = typeof statuses[number];
  type InvestmentType = typeof investmentTypes[number];

  // Set max to a more realistic range for renewable energy projects
  const maxInvestmentAmount = 3000000000; // $3 billion
  const maxMinimumInvestment = 20000000; // $20 million
  
  // Initialize investmentTypes if it doesn't exist
  if (!filters.investmentTypes) {
    filters.investmentTypes = [];
  }

  // Initialize minimumInvestmentRange if it doesn't exist
  if (!filters.minimumInvestmentRange) {
    filters.minimumInvestmentRange = {
      min: 0,
      max: 5000000  // Default to $5M max minimum investment
    };
  }

  let isOpen = false;

  function toggleProjectType(type: ProjectType) {
    if (filters.projectTypes.includes(type)) {
      filters.projectTypes = filters.projectTypes.filter(t => t !== type);
    } else {
      filters.projectTypes = [...filters.projectTypes, type];
    }
  }

  function toggleRegion(region: Region) {
    if (filters.regions.includes(region)) {
      filters.regions = filters.regions.filter(r => r !== region);
    } else {
      filters.regions = [...filters.regions, region];
    }
  }

  function toggleRiskLevel(level: RiskLevel) {
    if (filters.riskLevels.includes(level)) {
      filters.riskLevels = filters.riskLevels.filter(l => l !== level);
    } else {
      filters.riskLevels = [...filters.riskLevels, level];
    }
  }

  function toggleStatus(status: Status) {
    if (filters.statuses.includes(status)) {
      filters.statuses = filters.statuses.filter(s => s !== status);
    } else {
      filters.statuses = [...filters.statuses, status];
    }
  }

  function toggleInvestmentType(type: InvestmentType) {
    // Ensure investmentTypes exists
    if (!filters.investmentTypes) {
      filters.investmentTypes = [];
    }
    
    if (filters.investmentTypes.includes(type)) {
      filters.investmentTypes = filters.investmentTypes.filter(t => t !== type);
    } else {
      filters.investmentTypes = [...filters.investmentTypes, type];
    }
  }

  function handlePriceChange() {
    // Ensure min price is not greater than max price
    if (filters.priceRange.min > filters.priceRange.max) {
      filters.priceRange.min = filters.priceRange.max;
    }
  }

  function handleMinimumInvestmentChange() {
    // Ensure min is not greater than max
    if (filters.minimumInvestmentRange.min > filters.minimumInvestmentRange.max) {
      filters.minimumInvestmentRange.min = filters.minimumInvestmentRange.max;
    }
  }
</script>

<!-- Mobile Menu Button -->
<button
  class="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800 rounded-lg shadow-sm"
  on:click={() => (isOpen = !isOpen)}
  aria-label="Toggle filters menu"
>
  <svg
    class="w-6 h-6 text-slate-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</button>

<!-- Mobile Backdrop -->
{#if isOpen}
  <button
    type="button"
    class="fixed inset-0 bg-black/20 z-40 lg:hidden"
    on:click={() => (isOpen = false)}
    on:keydown={e => e.key === 'Escape' && (isOpen = false)}
    aria-label="Close sidebar"
  />
{/if}

<!-- Sidebar -->
<aside
  class={`bg-slate-800 rounded-lg shadow-sm p-6 ${
    isOpen ? 'fixed top-0 left-0 z-40 w-64 h-screen lg:relative lg:w-full' : 'relative w-full'
  }`}
  aria-label="Project filters"
>
  <div class="flex items-center justify-between mb-6">
    <h2 class="text-lg font-semibold text-slate-300">Filters</h2>
    <button
      type="button"
      class="lg:hidden p-2 text-slate-400 hover:text-slate-300 rounded-lg hover:bg-slate-700"
      on:click={() => (isOpen = false)}
      aria-label="Close sidebar"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>

  <!-- Investment Range -->
  <div class="space-y-4">
    <div>
      <label for="priceRange" class="block text-sm font-medium text-slate-300">Project Size</label>
      <div class="mt-1">
        <input
          type="range"
          id="priceRange"
          bind:value={filters.priceRange.max}
          min="1000000"
          max={maxInvestmentAmount}
          step="10000000"
          class="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
          on:change={handlePriceChange}
        />
        <div class="flex justify-between text-sm text-slate-400">
          <span>{formatCurrency(1000000)}</span>
          <span>{formatCurrency(filters.priceRange.max)}</span>
        </div>
      </div>
    </div>

    <!-- Minimum Investment Range -->
    <div>
      <label for="minimumInvestmentRange" class="block text-sm font-medium text-slate-300">Minimum Investment</label>
      <div class="mt-1">
        <input
          type="range"
          id="minimumInvestmentRange"
          bind:value={filters.minimumInvestmentRange.max}
          min="1000"
          max={maxMinimumInvestment}
          step="500000"
          class="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
          on:change={handleMinimumInvestmentChange}
        />
        <div class="flex justify-between text-sm text-slate-400">
          <span>{formatCurrency(1000)}</span>
          <span>{formatCurrency(filters.minimumInvestmentRange.max)}</span>
        </div>
      </div>
    </div>

    <div>
      <label class="block text-sm font-medium text-slate-300">Project Types</label>
      <div class="mt-2 space-y-2">
        {#each projectTypes as type (type)}
          <label class="flex items-center">
            <input
              type="checkbox"
              bind:group={filters.projectTypes}
              value={type}
              class="h-4 w-4 text-blue-400 focus:ring-blue-500 border-slate-700 rounded"
            />
            <span class="ml-2 text-sm text-slate-400">{type}</span>
          </label>
        {/each}
      </div>
    </div>

    <div>
      <label class="block text-sm font-medium text-slate-300">Investment Types</label>
      <div class="mt-2 space-y-2">
        {#each investmentTypes as type (type)}
          <label class="flex items-center">
            <input
              type="checkbox"
              bind:group={filters.investmentTypes}
              value={type}
              class="h-4 w-4 text-blue-400 focus:ring-blue-500 border-slate-700 rounded"
            />
            <span class="ml-2 text-sm text-slate-400">{type}</span>
          </label>
        {/each}
      </div>
    </div>

    <div>
      <label class="block text-sm font-medium text-slate-300">Regions</label>
      <div class="mt-2 space-y-2">
        {#each regions as region (region)}
          <label class="flex items-center">
            <input
              type="checkbox"
              bind:group={filters.regions}
              value={region}
              class="h-4 w-4 text-blue-400 focus:ring-blue-500 border-slate-700 rounded"
            />
            <span class="ml-2 text-sm text-slate-400">{region}</span>
          </label>
        {/each}
      </div>
    </div>

    <div>
      <label class="block text-sm font-medium text-slate-300">Risk Levels</label>
      <div class="mt-2 space-y-2">
        {#each riskLevels as level (level)}
          <label class="flex items-center">
            <input
              type="checkbox"
              bind:group={filters.riskLevels}
              value={level}
              class="h-4 w-4 text-blue-400 focus:ring-blue-500 border-slate-700 rounded"
            />
            <span class="ml-2 text-sm text-slate-400">{level}</span>
          </label>
        {/each}
      </div>
    </div>

    <div>
      <label class="block text-sm font-medium text-slate-300">Status</label>
      <div class="mt-2 space-y-2">
        {#each statuses as status (status)}
          <label class="flex items-center">
            <input
              type="checkbox"
              bind:group={filters.statuses}
              value={status}
              class="h-4 w-4 text-blue-400 focus:ring-blue-500 border-slate-700 rounded"
            />
            <span class="ml-2 text-sm text-slate-400">{status}</span>
          </label>
        {/each}
      </div>
    </div>
  </div>

  <!-- Apply Filters Button -->
  <button
    type="button"
    class="w-full py-2 px-4 text-white rounded-lg bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
  >
    Apply Filters
  </button>
</aside> 