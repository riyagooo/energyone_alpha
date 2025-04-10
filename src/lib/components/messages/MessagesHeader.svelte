<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  export let msgSidebarOpen = true;
  
  const dispatch = createEventDispatcher();
  
  const handleToggleSidebar = () => {
    dispatch('toggleMsgSidebar');
  };
</script>

<div class="bg-slate-800 border-b border-slate-700 h-16 flex items-center px-4 md:px-6 justify-between z-20">
  <div class="flex items-center">
    <!-- Toggle button for sidebar -->
    <button 
      type="button" 
      class="md:hidden text-slate-400 hover:text-white mr-3"
      on:click={handleToggleSidebar}
    >
      <span class="sr-only">Open sidebar</span>
      <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
      </svg>
    </button>
    
    <!-- Channel name -->
    <h2 class="text-xl font-bold"><span class="text-blue-400">#</span> <span class="text-white">general</span></h2>
  </div>
  
  <div class="flex items-center space-x-3">
    <!-- Search button -->
    <button class="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-700">
      <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
      </svg>
    </button>
    
    <!-- Channel members button -->
    <button class="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-700">
      <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 18v1h-3zM4.75 14.094A5.973 5.973 0 004 17v1H1v-1a3 3 0 013.75-2.906z" />
      </svg>
    </button>
    
    <!-- More options button -->
    <button class="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-700">
      <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
    </button>
  </div>
</div> 