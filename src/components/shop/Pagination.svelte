<script>
  export let currentPage = 1;
  export let totalPages = 1;
  export let onPageChange;

  function handlePageChange(page) {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
      if (onPageChange) onPageChange(page);
    }
  }
</script>

<div class="flex items-center justify-center space-x-2 mt-8">
  <button
    class="px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 disabled:opacity-50"
    disabled={currentPage === 1}
    on:click={() => handlePageChange(currentPage - 1)}
  >
    Previous
  </button>

  {#each Array(totalPages) as _, i}
    <button
      class="px-3 py-1 rounded-md border {currentPage === i + 1 ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400'}"
      on:click={() => handlePageChange(i + 1)}
    >
      {i + 1}
    </button>
  {/each}

  <button
    class="px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 disabled:opacity-50"
    disabled={currentPage === totalPages}
    on:click={() => handlePageChange(currentPage + 1)}
  >
    Next
  </button>
</div> 