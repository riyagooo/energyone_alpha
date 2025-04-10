<script lang="ts">
  import { goto } from '$app/navigation';
  
  let selected: string | null = null;
  
  function nextQuestion() {
    if (selected) {
      localStorage.setItem('investmentPreference', selected);
      // Calculate and show the AI-recommended portfolio
      goto('/recommended-portfolio');
    }
  }
  
  function prevQuestion() {
    goto('/investor-profile/question4');
  }
</script>

<div class="min-h-screen bg-slate-900 flex flex-col">
  <div class="flex-grow flex items-center justify-center">
    <div class="max-w-2xl w-full mx-4 bg-slate-800 shadow-lg rounded-lg p-8">
      <!-- Progress indicator -->
      <div class="mb-8">
        <div class="flex justify-between items-center">
          <p class="text-sm font-medium text-slate-300">Question 5 of 5</p>
          <p class="text-sm font-medium text-slate-400">100% Complete</p>
        </div>
        <div class="mt-2 w-full bg-slate-700 rounded-full h-2">
          <div class="bg-blue-500 h-2 rounded-full" style="width: 100%"></div>
        </div>
      </div>
      
      <!-- Question -->
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-white mb-2">What are your primary investment preferences?</h1>
        <p class="text-slate-400">Select what matters most to you when investing in renewable energy projects.</p>
      </div>
      
      <!-- Options -->
      <div class="space-y-4 mb-8">
        <label class="block p-4 bg-slate-700 rounded-lg border-2 {selected === 'high-return' ? 'border-blue-500' : 'border-slate-700'} cursor-pointer hover:bg-slate-600 transition-colors">
          <div class="flex items-start">
            <input 
              type="radio" 
              name="investmentPreference" 
              value="high-return" 
              bind:group={selected} 
              class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"
            />
            <div class="ml-3">
              <span class="block text-white font-medium">Maximum Returns</span>
              <span class="block text-slate-400 text-sm">I prioritize projects that offer the highest potential returns</span>
            </div>
          </div>
        </label>
        
        <label class="block p-4 bg-slate-700 rounded-lg border-2 {selected === 'low-risk' ? 'border-blue-500' : 'border-slate-700'} cursor-pointer hover:bg-slate-600 transition-colors">
          <div class="flex items-start">
            <input 
              type="radio" 
              name="investmentPreference" 
              value="low-risk" 
              bind:group={selected} 
              class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"
            />
            <div class="ml-3">
              <span class="block text-white font-medium">Safety & Stability</span>
              <span class="block text-slate-400 text-sm">I prefer lower-risk investments with more predictable returns</span>
            </div>
          </div>
        </label>
        
        <label class="block p-4 bg-slate-700 rounded-lg border-2 {selected === 'environmental-impact' ? 'border-blue-500' : 'border-slate-700'} cursor-pointer hover:bg-slate-600 transition-colors">
          <div class="flex items-start">
            <input 
              type="radio" 
              name="investmentPreference" 
              value="environmental-impact" 
              bind:group={selected} 
              class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"
            />
            <div class="ml-3">
              <span class="block text-white font-medium">Environmental Impact</span>
              <span class="block text-slate-400 text-sm">I want to maximize the positive environmental impact of my investments</span>
            </div>
          </div>
        </label>
        
        <label class="block p-4 bg-slate-700 rounded-lg border-2 {selected === 'tech-innovation' ? 'border-blue-500' : 'border-slate-700'} cursor-pointer hover:bg-slate-600 transition-colors">
          <div class="flex items-start">
            <input 
              type="radio" 
              name="investmentPreference" 
              value="tech-innovation" 
              bind:group={selected} 
              class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"
            />
            <div class="ml-3">
              <span class="block text-white font-medium">Technological Innovation</span>
              <span class="block text-slate-400 text-sm">I prefer cutting-edge projects using innovative technologies</span>
            </div>
          </div>
        </label>
        
        <label class="block p-4 bg-slate-700 rounded-lg border-2 {selected === 'balanced' ? 'border-blue-500' : 'border-slate-700'} cursor-pointer hover:bg-slate-600 transition-colors">
          <div class="flex items-start">
            <input 
              type="radio" 
              name="investmentPreference" 
              value="balanced" 
              bind:group={selected} 
              class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"
            />
            <div class="ml-3">
              <span class="block text-white font-medium">Balanced Approach</span>
              <span class="block text-slate-400 text-sm">I want a balance of returns, risk, and environmental impact</span>
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
          See My Recommendations
        </button>
      </div>
    </div>
  </div>
</div> 