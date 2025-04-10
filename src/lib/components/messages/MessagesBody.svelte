<script lang="ts">
  import { onMount } from 'svelte';
  
  // Sample messages data - in a real app this would come from an API
  const messages = [
    {
      id: 1,
      user: {
        name: 'Alex Chen',
        avatar: '/images/avatars/alex.jpg'
      },
      timestamp: '2:32 PM',
      date: 'Today',
      content: 'Has anyone looked at the ROI projections for the Tuscaloosa solar farm?',
      attachments: []
    },
    {
      id: 2,
      user: {
        name: 'Sarah Johnson',
        avatar: '/images/avatars/sarah.jpg'
      },
      timestamp: '2:35 PM',
      date: 'Today',
      content: 'I just reviewed them. The P50 production case looks promising, but I have concerns about the grid interconnection timeline.',
      attachments: []
    },
    {
      id: 3,
      user: {
        name: 'Miguel Rodriguez',
        avatar: '/images/avatars/miguel.jpg'
      },
      timestamp: '2:40 PM',
      date: 'Today',
      content: 'The transmission capacity study came back positive. We should be able to connect by Q3 next year.',
      attachments: []
    },
    {
      id: 4,
      user: {
        name: 'Alex Chen',
        avatar: '/images/avatars/alex.jpg'
      },
      timestamp: '2:45 PM',
      date: 'Today',
      content: 'Great news! What about the tax equity investor? Are they still on board?',
      attachments: []
    },
    {
      id: 5,
      user: {
        name: 'Priya Patel',
        avatar: '/images/avatars/priya.jpg'
      },
      timestamp: '2:50 PM',
      date: 'Today',
      content: 'Yes, they confirmed yesterday. I\'ve uploaded the term sheet to the shared folder.',
      attachments: [
        { name: 'TaxEquity_TermSheet.pdf', size: '2.4 MB' }
      ]
    }
  ];
  
  let messagesContainer: HTMLElement;
  
  onMount(() => {
    // Scroll to bottom of messages on load
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  });
</script>

<div class="grow overflow-hidden">
  <div 
    bind:this={messagesContainer}
    class="h-full overflow-y-auto px-4 py-6 md:px-6 space-y-6"
  >
    <!-- Channel welcome -->
    <div class="text-center py-8">
      <div class="inline-flex items-center justify-center w-12 h-12 bg-slate-700 rounded-full mb-4">
        <svg class="w-6 h-6 fill-current text-slate-400" viewBox="0 0 20 20">
          <path d="M10 0C4.5 0 0 4.5 0 10c0 5.5 4.5 10 10 10s10-4.5 10-10C20 4.5 15.5 0 10 0zM8 15L3 10l2-2 3 3 7-7 2 2-9 9z" />
        </svg>
      </div>
      <h2 class="text-2xl font-bold text-slate-200 mb-2">Welcome to #general</h2>
      <p class="text-sm text-slate-400">This is the beginning of the channel - a place for project discussions, updates, and collaboration.</p>
    </div>
    
    <!-- Date separator -->
    <div class="relative text-center">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t border-slate-700"></div>
      </div>
      <div class="relative flex justify-center">
        <span class="px-2 bg-slate-900 text-xs font-medium text-slate-500">Today</span>
      </div>
    </div>
    
    <!-- Messages -->
    {#each messages as message, i}
      <div class="flex items-start group">
        <!-- Avatar -->
        <img 
          class="w-8 h-8 rounded-full mr-4" 
          src="https://ui-avatars.com/api/?name={message.user.name}&background=1e293b&color=94a3b8"
          alt="{message.user.name}" 
        />
        
        <!-- Message content -->
        <div class="grow">
          <div class="flex items-center mb-1">
            <h3 class="font-bold text-slate-200 text-sm">{message.user.name}</h3>
            <span class="text-xs text-slate-500 ml-2">{message.timestamp}</span>
          </div>
          
          <div class="text-sm text-slate-300 space-y-2">
            <p>{message.content}</p>
            
            {#if message.attachments.length > 0}
              <div class="flex flex-wrap gap-2 mt-2">
                {#each message.attachments as attachment}
                  <div class="bg-slate-800 border border-slate-700 rounded-md px-3 py-2 flex items-center">
                    <svg class="w-4 h-4 text-slate-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-xs text-slate-300">{attachment.name} <span class="text-slate-500">({attachment.size})</span></span>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
        </div>
        
        <!-- Actions -->
        <div class="flex opacity-0 group-hover:opacity-100 transition-opacity">
          <button class="p-1 text-slate-500 hover:text-slate-300 rounded-full">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 16 16">
              <path d="M10 9.172l4-4L16 7l-6 6-6-6 2-1.828 4 4z" />
            </svg>
          </button>
          <button class="p-1 text-slate-500 hover:text-slate-300 rounded-full">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 16 16">
              <path d="M3 1v14l6-5 6 5V1H3z" />
            </svg>
          </button>
        </div>
      </div>
    {/each}
  </div>
</div> 