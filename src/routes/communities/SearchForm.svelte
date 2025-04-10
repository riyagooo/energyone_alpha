<script lang="ts">
  let searchQuery = '';
</script>

<form class="relative">
  <label for="community-search" class="sr-only">Search</label>
  <input 
    id="community-search" 
    class="form-input w-full pl-9 bg-slate-800 border-slate-700 text-slate-200 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 rounded-md" 
    type="search" 
    placeholder="Search community members..." 
    bind:value={searchQuery}
  />
  <button class="absolute inset-0 right-auto group" type="submit" aria-label="Search">
    <svg class="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-300 ml-3 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
      <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
    </svg>
  </button>
</form> 