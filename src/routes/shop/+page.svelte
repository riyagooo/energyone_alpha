<script>
  import ShopSidebar from '../../components/shop/ShopSidebar.svelte';
  import ShopCards from '../../components/shop/ShopCards.svelte';
  import Pagination from '../../components/shop/Pagination.svelte';
  import Cart from '../../components/shop/Cart.svelte';

  export let data;

  let currentPage = 1;
  const itemsPerPage = 6;
  let filters = {
    projectTypes: [],
    regions: [],
    riskLevels: [],
    statuses: [],
    minPrice: 0,
    maxPrice: 1000000000
  };

  let cart = [];
  let isCartOpen = false;

  function handlePageChange(page) {
    currentPage = page;
  }

  function addToCart(project) {
    const existingItem = cart.find(item => item.id === project.id);
    if (existingItem) {
      cart = cart.map(item =>
        item.id === project.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      cart = [...cart, { ...project, quantity: 1 }];
    }
  }
</script>

<div class="min-h-screen bg-white">
  <!-- Main Content -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-slate-900">Renewable Energy Projects</h1>
      <p class="mt-2 text-sm text-slate-500">
        Browse and invest in sustainable energy projects across Latin America
      </p>
    </div>

    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Sidebar -->
      <div class="w-full lg:w-64 flex-shrink-0">
        <ShopSidebar bind:filters />
      </div>

      <!-- Main Content -->
      <div class="flex-1">
        <!-- Filters Bar -->
        <div class="mb-6 flex flex-wrap items-center gap-4 bg-slate-50 p-4 rounded-lg">
          <div class="flex-1">
            <div class="relative">
              <input
                type="text"
                placeholder="Search projects..."
                class="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
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
              class="px-4 py-2 border border-slate-200 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              <option>Sort by: Newest</option>
              <option>Sort by: Highest IRR</option>
              <option>Sort by: Lowest Risk</option>
            </select>
          </div>
        </div>

        <!-- Product Grid -->
        <div class="mb-8">
          <ShopCards projects={data.projects} {filters} on:addToCart={({ detail }) => addToCart(detail)} />
        </div>

        <!-- Pagination -->
        <div class="flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(data.projects.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Cart -->
  <Cart bind:cart bind:isOpen={isCartOpen} />
</div> 