<script>
  import { goto } from '$app/navigation';
  
  let selected = null;
  
  function nextQuestion() {
    if (selected) {
      // In a real app, we'd store this answer in a state management system or localStorage
      localStorage.setItem('investmentGoal', selected);
      goto('/investor-profile/question2');
    }
  }
</script>

<div class="min-h-screen bg-slate-900 flex flex-col">
  <div class="flex-grow flex items-center justify-center">
    <div class="max-w-2xl w-full mx-4 bg-slate-800 shadow-lg rounded-lg p-8">
      <!-- Progress indicator -->
      <div class="mb-8">
        <div class="flex justify-between items-center">
          <p class="text-sm font-medium text-slate-300">Question 1 of 5</p>
          <p class="text-sm font-medium text-slate-400">20% Complete</p>
        </div>
        <div class="mt-2 w-full bg-slate-700 rounded-full h-2">
          <div class="bg-blue-500 h-2 rounded-full" style="width: 20%"></div>
        </div>
      </div>
      
      <!-- Question -->
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-white mb-2">What is your primary investment goal?</h1>
        <p class="text-slate-400">Select the most important objective for your investments.</p>
      </div>
      
      <!-- Options -->
      <div class="space-y-4 mb-8">
        <label class="block p-4 bg-slate-700 rounded-lg border-2 {selected === 'growth' ? 'border-blue-500' : 'border-slate-700'} cursor-pointer hover:bg-slate-600 transition-colors">
          <div class="flex items-start">
            <input 
              type="radio" 
              name="investmentGoal" 
              value="growth" 
              bind:group={selected} 
              class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"
            />
            <div class="ml-3">
              <span class="block text-white font-medium">Capital Appreciation</span>
              <span class="block text-slate-400 text-sm">Growing the value of my investment over time</span>
            </div>
          </div>
        </label>
        
        <label class="block p-4 bg-slate-700 rounded-lg border-2 {selected === 'income' ? 'border-blue-500' : 'border-slate-700'} cursor-pointer hover:bg-slate-600 transition-colors">
          <div class="flex items-start">
            <input 
              type="radio" 
              name="investmentGoal" 
              value="income" 
              bind:group={selected} 
              class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"
            />
            <div class="ml-3">
              <span class="block text-white font-medium">Steady Income</span>
              <span class="block text-slate-400 text-sm">Receiving regular cash distributions or yield</span>
            </div>
          </div>
        </label>
        
        <label class="block p-4 bg-slate-700 rounded-lg border-2 {selected === 'preservation' ? 'border-blue-500' : 'border-slate-700'} cursor-pointer hover:bg-slate-600 transition-colors">
          <div class="flex items-start">
            <input 
              type="radio" 
              name="investmentGoal" 
              value="preservation" 
              bind:group={selected} 
              class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"
            />
            <div class="ml-3">
              <span class="block text-white font-medium">Preservation of Capital</span>
              <span class="block text-slate-400 text-sm">Minimizing risk and protecting your capital</span>
            </div>
          </div>
        </label>
        
        <label class="block p-4 bg-slate-700 rounded-lg border-2 {selected === 'impact' ? 'border-blue-500' : 'border-slate-700'} cursor-pointer hover:bg-slate-600 transition-colors">
          <div class="flex items-start">
            <input 
              type="radio" 
              name="investmentGoal" 
              value="impact" 
              bind:group={selected} 
              class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"
            />
            <div class="ml-3">
              <span class="block text-white font-medium">Impact Investing</span>
              <span class="block text-slate-400 text-sm">Generating measurable environmental or social impact alongside returns</span>
            </div>
          </div>
        </label>
      </div>
      
      <!-- Next button -->
      <div class="flex justify-end">
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