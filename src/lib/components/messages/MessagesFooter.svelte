<script lang="ts">
  let messageText = '';
  
  const handleSubmit = () => {
    if (messageText.trim()) {
      // Here you would normally send the message to your backend
      console.log('Sending message:', messageText);
      messageText = '';
    }
  };
  
  const handleKeyDown = (e: KeyboardEvent) => {
    // Submit on Enter (without Shift key)
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };
</script>

<div class="border-t border-slate-700 px-4 md:px-6 py-4 bg-slate-800">
  <div class="flex gap-3">
    <!-- Add attachment button -->
    <button class="shrink-0 rounded-full p-2 text-slate-400 hover:text-white hover:bg-slate-700">
      <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
      </svg>
    </button>
    
    <!-- Message input -->
    <div class="grow">
      <textarea
        bind:value={messageText}
        on:keydown={handleKeyDown}
        placeholder="Message #general"
        class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400 resize-none overflow-hidden text-white placeholder-slate-400 text-sm"
        rows="1"
      ></textarea>
    </div>
    
    <!-- Actions -->
    <div class="flex shrink-0 items-center gap-2">
      <!-- Emoji button -->
      <button class="rounded-full p-2 text-slate-400 hover:text-white hover:bg-slate-700">
        <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clip-rule="evenodd" />
        </svg>
      </button>
      
      <!-- Send button -->
      <button 
        on:click={handleSubmit}
        class="flex items-center justify-center rounded-full p-2 bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
        disabled={!messageText.trim()}
      >
        <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      </button>
    </div>
  </div>
</div> 