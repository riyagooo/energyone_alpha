<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  export let msgSidebarOpen: boolean;
  
  const dispatch = createEventDispatcher();
  
  function closeMsgSidebar() {
    dispatch('closeMsgSidebar');
  }
  
  // Sample channels
  const channels = [
    { id: 1, name: 'general', unread: true },
    { id: 2, name: 'projects', unread: false },
    { id: 3, name: 'investment-opportunities', unread: false },
    { id: 4, name: 'marketing', unread: true },
    { id: 5, name: 'announcements', unread: false }
  ];
</script>

<div>
  <div class="text-xs font-semibold text-slate-400 uppercase mb-3">Channels</div>
  <ul class="mb-6 space-y-0.5">
    {#each channels as channel}
      <li>
        <a 
          href={`/messages/channel/${channel.id}`} 
          class="flex items-center px-2.5 py-2 rounded transition duration-150 hover:bg-slate-800"
          on:click={() => closeMsgSidebar()}
        >
          <div class="flex items-center">
            <span class="text-blue-400 mr-2">#</span>
            <span class={`text-sm font-medium ${channel.unread ? 'text-white font-semibold' : 'text-slate-300'}`}>
              {channel.name}
            </span>
          </div>
          {#if channel.unread}
            <div class="ml-auto w-2 h-2 rounded-full bg-blue-500"></div>
          {/if}
        </a>
      </li>
    {/each}
  </ul>
  
  <!-- Add channel button -->
  <div class="text-center mt-4">
    <button class="px-4 py-2 text-xs font-medium text-slate-300 border border-slate-700 rounded-md hover:bg-slate-800 w-full">
      + Add New Channel
    </button>
  </div>
</div> 