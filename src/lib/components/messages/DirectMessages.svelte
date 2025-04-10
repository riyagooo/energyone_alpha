<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  export let msgSidebarOpen: boolean;
  
  const dispatch = createEventDispatcher();
  
  function closeMsgSidebar() {
    dispatch('closeMsgSidebar');
  }
  
  // Sample direct message users
  const directMessages = [
    { id: 1, name: 'Sarah Johnson', avatar: '/images/avatars/sarah.jpg', status: 'online' },
    { id: 2, name: 'Alex Chen', avatar: '/images/avatars/alex.jpg', status: 'busy' },
    { id: 3, name: 'Miguel Rodriguez', avatar: '/images/avatars/miguel.jpg', status: 'offline' },
    { id: 4, name: 'Priya Patel', avatar: '/images/avatars/priya.jpg', status: 'online' },
    { id: 5, name: 'John Wilson', avatar: '/images/avatars/john.jpg', status: 'offline' }
  ];
</script>

<div class="mt-6">
  <div class="text-xs font-semibold text-slate-400 uppercase mb-3">Direct Messages</div>
  <ul class="mb-6 space-y-0.5">
    {#each directMessages as user}
      <li>
        <a 
          href={`/messages/dm/${user.id}`} 
          class="flex items-center px-2.5 py-2 rounded transition duration-150 hover:bg-slate-800"
          on:click={() => closeMsgSidebar()}
        >
          <div class="relative mr-2">
            <img 
              class="w-8 h-8 rounded-full"
              src={`https://ui-avatars.com/api/?name=${user.name}&background=1e293b&color=94a3b8`}
              alt={user.name}
            />
            <div class={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-slate-900 ${user.status === 'online' ? 'bg-blue-500' : user.status === 'busy' ? 'bg-rose-500' : 'bg-slate-600'}`}></div>
          </div>
          <div class="truncate">
            <span class="text-sm font-medium text-slate-300">{user.name}</span>
          </div>
        </a>
      </li>
    {/each}
  </ul>
</div> 