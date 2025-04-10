<script lang="ts">
  import { goto } from '$app/navigation';
  
  let selected = null;
  
  function nextQuestion() {
    if (selected) {
      localStorage.setItem('investmentAmount', selected);
      goto('/investor-profile/question5');
    }
  }
  
  function prevQuestion() {
    goto('/investor-profile/question3');
  }
</script>

<div class="min-h-screen bg-slate-900 flex flex-col">
  <div class="flex-grow flex items-center justify-center">
    <div class="max-w-2xl w-full mx-4 bg-slate-800 shadow-lg rounded-lg p-8">
      <!-- Progress indicator -->
      <div class="mb-8">
        <div class="flex justify-between items-center">
          <p class="text-sm font-medium text-slate-300">Question 4 of 5</p>
          <p class="text-sm font-medium text-slate-400">80% Complete</p>
        </div>
        <div class="mt-2 w-full bg-slate-700 rounded-full h-2">
          <div class="bg-blue-500 h-2 rounded-full" style="width: 80%"></div>
        </div>
      </div>
      
      <!-- Question -->
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-white mb-2">How much capital are you willing to invest?</h1>
        <p class="text-slate-400">Select the amount range you're considering for renewable energy investments.</p>
      </div>
      
      <!-- Options -->
      <div class="space-y-4 mb-8">
        <label class="block p-4 bg-slate-700 rounded-lg border-2 {selected === 'small' ? 'border-blue-500' : 'border-slate-700'} cursor-pointer hover:bg-slate-600 transition-colors">
          <div class="flex items-start">
            <input 
              type="radio" 
              name="investmentAmount" 
              value="small" 
              bind:group={selected} 
              class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"
            />
            <div class="ml-3">
              <span class="block text-white font-medium">$1,000 - $10,000</span>
              <span class="block text-slate-400 text-sm">Entry-level investment with select opportunities</span>
            </div>
          </div>
        </label>
        
        <label class="block p-4 bg-slate-700 rounded-lg border-2 {selected === 'medium' ? 'border-blue-500' : 'border-slate-700'} cursor-pointer hover:bg-slate-600 transition-colors">
          <div class="flex items-start">
            <input 
              type="radio" 
              name="investmentAmount" 
              value="medium" 
              bind:group={selected} 
              class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"
            />
            <div class="ml-3">
              <span class="block text-white font-medium">$10,000 - $100,000</span>
              <span class="block text-slate-400 text-sm">Smaller investment with expanded options</span>
            </div>
          </div>
        </label>
        
        <label class="block p-4 bg-slate-700 rounded-lg border-2 {selected === 'large' ? 'border-blue-500' : 'border-slate-700'} cursor-pointer hover:bg-slate-600 transition-colors">
          <div class="flex items-start">
            <input 
              type="radio" 
              name="investmentAmount" 
              value="large" 
              bind:group={selected} 
              class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"
            />
            <div class="ml-3">
              <span class="block text-white font-medium">$100,000 - $500,000</span>
              <span class="block text-slate-400 text-sm">Mid-size investments with extensive options</span>
            </div>
          </div>
        </label>
        
        <label class="block p-4 bg-slate-700 rounded-lg border-2 {selected === 'institutional' ? 'border-blue-500' : 'border-slate-700'} cursor-pointer hover:bg-slate-600 transition-colors">
          <div class="flex items-start">
            <input 
              type="radio" 
              name="investmentAmount" 
              value="institutional" 
              bind:group={selected} 
              class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"
            />
            <div class="ml-3">
              <span class="block text-white font-medium">$500,000 - $5 million</span>
              <span class="block text-slate-400 text-sm">Larger investments with premium opportunities</span>
            </div>
          </div>
        </label>
        
        <label class="block p-4 bg-slate-700 rounded-lg border-2 {selected === 'flexible' ? 'border-blue-500' : 'border-slate-700'} cursor-pointer hover:bg-slate-600 transition-colors">
          <div class="flex items-start">
            <input 
              type="radio" 
              name="investmentAmount" 
              value="flexible" 
              bind:group={selected} 
              class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"
            />
            <div class="ml-3">
              <span class="block text-white font-medium">Flexible - depends on the opportunity</span>
              <span class="block text-slate-400 text-sm">I'm open to various investment sizes based on specific projects</span>
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