<script>
  export let project;
</script>

<div class="bg-white rounded-lg shadow-sm p-6 mb-6">
  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <!-- Project Info -->
    <div class="flex-1">
      <div class="flex items-center gap-4 mb-4">
        <h1 class="text-2xl font-bold text-slate-900">{project.name}</h1>
        <span class="text-sm font-medium px-3 py-1 rounded-full {project.status === 'Operational' ? 'text-green-600 bg-green-100' : project.status === 'Under Construction' ? 'text-amber-600 bg-amber-100' : 'text-blue-600 bg-blue-100'}">
          {project.status}
        </span>
      </div>
      <div class="flex flex-wrap gap-4 text-sm text-slate-500">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {project.location}
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          {project.type}
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          {project.capacity}
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="flex items-center gap-3">
      <button class="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Invest Now
      </button>
      <button class="p-2 text-slate-400 hover:text-slate-500 rounded-lg hover:bg-slate-100">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      </button>
    </div>
  </div>

  <!-- Project Description -->
  <div class="mt-6">
    <h2 class="text-lg font-semibold text-slate-900 mb-2">Project Overview</h2>
    <p class="text-slate-600">{project.description}</p>
  </div>
</div> 