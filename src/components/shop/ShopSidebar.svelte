<script>
  import { fade, slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  export let filters = {
    projectTypes: [],
    regions: [],
    riskLevels: [],
    statuses: [],
    minPrice: 0,
    maxPrice: 1000000000
  };

  let isOpen = false;

  function toggleProjectType(type) {
    if (filters.projectTypes.includes(type)) {
      filters.projectTypes = filters.projectTypes.filter(t => t !== type);
    } else {
      filters.projectTypes = [...filters.projectTypes, type];
    }
  }

  function toggleRegion(region) {
    if (filters.regions.includes(region)) {
      filters.regions = filters.regions.filter(r => r !== region);
    } else {
      filters.regions = [...filters.regions, region];
    }
  }

  function toggleRiskLevel(level) {
    if (filters.riskLevels.includes(level)) {
      filters.riskLevels = filters.riskLevels.filter(l => l !== level);
    } else {
      filters.riskLevels = [...filters.riskLevels, level];
    }
  }

  function toggleStatus(status) {
    if (filters.statuses.includes(status)) {
      filters.statuses = filters.statuses.filter(s => s !== status);
    } else {
      filters.statuses = [...filters.statuses, status];
    }
  }

  function handlePriceChange() {
    // Ensure min price is not greater than max price
    if (filters.minPrice > filters.maxPrice) {
      filters.minPrice = filters.maxPrice;
    }
  }
</script>

<!-- Mobile Menu Button -->
<button
  class="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-sm"
  on:click={() => (isOpen = !isOpen)}
  aria-label="Toggle filters menu"
>
  <svg
    class="w-6 h-6 text-slate-600"
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
  <div
    class="fixed inset-0 bg-black/20 z-40 lg:hidden"
    on:click={() => (isOpen = false)}
    role="button"
    tabindex="0"
    aria-label="Close sidebar"
  />
{/if}

<!-- Sidebar -->
<aside
  class={`bg-white rounded-lg shadow-sm p-6 ${
    isOpen ? 'fixed top-0 left-0 z-40 w-64 h-screen lg:relative lg:w-full' : 'relative w-full'
  }`}
  aria-label="Project filters"
>
  <div class="flex items-center justify-between mb-6">
    <h2 class="text-lg font-semibold text-slate-900">Filters</h2>
    <button
      type="button"
      class="lg:hidden p-2 text-slate-400 hover:text-slate-500 rounded-lg hover:bg-slate-100"
      on:click={() => (isOpen = false)}
      aria-label="Close sidebar"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>

  <!-- Investment Range -->
  <div class="mb-6">
    <h3 class="text-sm font-medium text-slate-900 mb-4">Investment Range</h3>
    <div class="space-y-4">
      <div class="flex items-center gap-4">
        <input
          type="number"
          bind:value={filters.minPrice}
          on:change={handlePriceChange}
          class="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          placeholder="Min"
        />
        <span class="text-slate-500">to</span>
        <input
          type="number"
          bind:value={filters.maxPrice}
          on:change={handlePriceChange}
          class="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          placeholder="Max"
        />
      </div>
    </div>
  </div>

  <!-- Project Types -->
  <div class="mb-6">
    <h3 class="text-sm font-medium text-slate-900 mb-4">Project Types</h3>
    <div class="space-y-2">
      {#each ['Solar PV', 'Wind', 'Hydro', 'Biomass', 'Geothermal'] as type}
        <label class="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.projectTypes.includes(type)}
            on:change={() => toggleProjectType(type)}
            class="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
          />
          <span class="text-sm text-slate-700">{type}</span>
        </label>
      {/each}
    </div>
  </div>

  <!-- Regions -->
  <div class="mb-6">
    <h3 class="text-sm font-medium text-slate-900 mb-4">Regions</h3>
    <div class="space-y-2">
      {#each ['Chile', 'Brazil', 'Mexico', 'Colombia', 'Peru'] as region}
        <label class="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.regions.includes(region)}
            on:change={() => toggleRegion(region)}
            class="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
          />
          <span class="text-sm text-slate-700">{region}</span>
        </label>
      {/each}
    </div>
  </div>

  <!-- Risk Levels -->
  <div class="mb-6">
    <h3 class="text-sm font-medium text-slate-900 mb-4">Risk Levels</h3>
    <div class="space-y-2">
      {#each ['Low', 'Medium', 'High'] as level}
        <label class="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.riskLevels.includes(level)}
            on:change={() => toggleRiskLevel(level)}
            class="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
          />
          <span class="text-sm text-slate-700">{level}</span>
        </label>
      {/each}
    </div>
  </div>

  <!-- Project Status -->
  <div class="mb-6">
    <h3 class="text-sm font-medium text-slate-900 mb-4">Project Status</h3>
    <div class="space-y-2">
      {#each ['Active', 'Planning', 'Construction', 'Operational'] as status}
        <label class="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.statuses.includes(status)}
            on:change={() => toggleStatus(status)}
            class="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
          />
          <span class="text-sm text-slate-700">{status}</span>
        </label>
      {/each}
    </div>
  </div>

  <!-- Apply Filters Button -->
  <button
    type="button"
    class="w-full py-2 px-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
  >
    Apply Filters
  </button>
</aside> 