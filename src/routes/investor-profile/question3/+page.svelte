<script lang="ts">
  import { goto } from '$app/navigation';
  
  let selected = null;
  
  function nextQuestion() {
    if (selected) {
      localStorage.setItem('timeHorizon', selected);
      goto('/investor-profile/question4');
    }
  }
  
  function prevQuestion() {
    goto('/investor-profile/question2');
  }
</script>

<div class="min-h-screen bg-slate-900 flex flex-col">
  <div class="flex-grow flex items-center justify-center">
    <div class="max-w-2xl w-full mx-4 bg-slate-800 shadow-lg rounded-lg p-8">
      <!-- Progress indicator -->
      <div class="mb-8">
        <div class="flex justify-between items-center">
          <p class="text-sm font-medium text-slate-300">Question 3 of 5</p>
          <p class="text-sm font-medium text-slate-400">60% Complete</p>
        </div>
        <div class="mt-2 w-full bg-slate-700 rounded-full h-2">
          <div class="bg-blue-500 h-2 rounded-full" style="width: 60%"></div>
        </div>
      </div>
      
      <!-- Question -->
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-white mb-2">What is your investment time horizon?</h1>
        <p class="text-slate-400">How long do you plan to keep your money invested before you need it?</p>
      </div>
      
      <!-- Options -->
      <div class="space-y-4 mb-8">
        <label class="block p-4 bg-slate-700 rounded-lg border-2 {selected === 'short' ? 'border-blue-500' : 'border-slate-700'} cursor-pointer hover:bg-slate-600 transition-colors">
          <div class="flex items-start">
            <input 
              type="radio" 
              name="timeHorizon" 
              value="short" 
              bind:group={selected} 
              class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"
            />
            <div class="ml-3">
              <span class="block text-white font-medium">Short-term (&lt;3 years)</span>
              <span class="block text-slate-400 text-sm">I need to access these funds within the next few years</span>
            </div>
          </div>
        </label>
        
        <label class="block p-4 bg-slate-700 rounded-lg border-2 {selected === 'medium' ? 'border-blue-500' : 'border-slate-700'} cursor-pointer hover:bg-slate-600 transition-colors">
          <div class="flex items-start">
            <input 
              type="radio" 
              name="timeHorizon" 
              value="medium" 
              bind:group={selected} 
              class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"
            />
            <div class="ml-3">
              <span class="block text-white font-medium">Medium-term (3-7 years)</span>
              <span class="block text-slate-400 text-sm">I'm investing for goals several years away</span>
            </div>
          </div>
        </label>
        
        <label class="block p-4 bg-slate-700 rounded-lg border-2 {selected === 'long' ? 'border-blue-500' : 'border-slate-700'} cursor-pointer hover:bg-slate-600 transition-colors">
          <div class="flex items-start">
            <input 
              type="radio" 
              name="timeHorizon" 
              value="long" 
              bind:group={selected} 
              class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"
            />
            <div class="ml-3">
              <span class="block text-white font-medium">Long-term (&gt;7 years)</span>
              <span class="block text-slate-400 text-sm">I'm investing for long-term goals like retirement or legacy</span>
            </div>
          </div>
        </label>
      </div>
      
      <!-- Navigation buttons -->
      <div class="flex justify-between">
        <button 
          on:click={prevQuestion}
          class="px-6 py-3 border border-slate-600 text-slate-300 hover:bg-slate-700 font-medium rounded-md"
        >
          Back
        </button>
        
        <button 
          on:click={nextQuestion}
          disabled={!selected}
          class="px-6 py-3 bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 text-white font-medium rounded-md shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</div> 