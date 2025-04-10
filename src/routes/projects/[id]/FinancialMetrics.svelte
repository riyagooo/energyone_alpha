<script lang="ts">
  import type { Project } from '$lib/types/project';
  
  export let project: Project;
  
  function formatPercentRange(value: number | undefined): string {
    if (!value) return 'N/A';
    // Create a range of +/- 1.5% around the actual value
    const lowerBound = Math.max(0, value - 1.5);
    const upperBound = value + 1.5;
    return `${lowerBound.toFixed(1)}% - ${upperBound.toFixed(1)}%`;
  }
  
  function formatCurrencyRange(value: number | undefined): string {
    if (!value) return 'N/A';
    // Create a range of +/- 10% around the actual value
    const lowerBound = Math.floor(value * 0.9 / 10000000) * 10000000;
    const upperBound = Math.ceil(value * 1.1 / 10000000) * 10000000;
    return `$${(lowerBound / 1000000).toFixed(0)}M - $${(upperBound / 1000000).toFixed(0)}M`;
  }
  
  function formatYearsRange(value: number | undefined): string {
    if (!value) return 'N/A';
    // Create a range of +/- 1 year around the actual value
    const lowerBound = Math.max(1, Math.floor(value - 1));
    const upperBound = Math.ceil(value + 1);
    return `${lowerBound} - ${upperBound} years`;
  }
  
  const targetIRR = project.financials?.leveredIrr || project.irr || 0;
  const irrRangeText = formatPercentRange(targetIRR);
</script>

<div class="bg-slate-800 rounded-lg p-6">
  <h2 class="text-xl font-semibold text-slate-300 mb-4">Financial Metrics</h2>
  
  <div class="space-y-6">
    <!-- Key Financial Metrics -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div>
        <p class="text-sm text-slate-400">Target IRR</p>
        <p class="text-lg font-medium text-blue-400">{irrRangeText}</p>
      </div>
      <div>
        <p class="text-sm text-slate-400">Investment Range</p>
        <p class="text-lg font-medium text-slate-300">{formatCurrencyRange(project.financials?.totalInvestment || project.investment)}</p>
      </div>
      <div>
        <p class="text-sm text-slate-400">Est. Payback Period</p>
        <p class="text-lg font-medium text-slate-300">{formatYearsRange(project.financials?.paybackPeriod)}</p>
      </div>
      <div>
        <p class="text-sm text-slate-400">Minimum Investment</p>
        <p class="text-lg font-medium text-slate-300">
          <span class="cursor-pointer hover:underline" 
                title="Please contact the project team for minimum investment details">
            Contact for details
          </span>
        </p>
      </div>
    </div>
    
    <!-- Confidential Financial Details -->
    <div class="border-t border-slate-700 pt-6">
      <div class="bg-slate-700 p-4 rounded-md">
        <h3 class="text-lg font-medium text-slate-300 mb-2">Detailed Financial Information</h3>
        <p class="text-slate-400 mb-3">
          Additional financial details including debt structure, NPV, DSCR, and detailed cash flow projections are available to qualified investors after signing an NDA.
        </p>
        <div class="flex flex-col sm:flex-row gap-3">
          <a href="/contact" class="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500">
            Request Financial Package
          </a>
          <a href="/contact" class="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-400 bg-slate-900 hover:bg-slate-800">
            Schedule Financial Briefing
          </a>
        </div>
      </div>
    </div>
    
    <!-- IRR Visualization -->
    <div class="border-t border-slate-700 pt-6">
      <div class="flex justify-between items-center mb-2">
        <span class="text-sm text-slate-400">Expected Return (Target IRR)</span>
        <span class="text-lg font-bold text-blue-400">{irrRangeText}</span>
      </div>
      <div class="h-3 bg-slate-700 rounded-full overflow-hidden">
        <div 
          class="h-full bg-blue-500" 
          style="width: {Math.min((targetIRR / 20) * 100, 100)}%"
        ></div>
      </div>
      <p class="mt-1 text-xs text-slate-400 text-right">Compared to industry average of 8.5%</p>
      <p class="mt-3 text-xs text-slate-500">
        Note: Actual returns may vary based on multiple factors. Historical performance is not indicative of future results. Please review the full financial disclosure available upon request.
      </p>
    </div>
    
    <!-- PROJECT FINANCE METRICS SECTION ADDED HERE -->
    <div class="border-t border-slate-700 pt-8">
      <h3 class="text-xl font-semibold text-slate-300 mb-4">Understanding Project Finance Metrics</h3>
      <p class="text-slate-400 mb-8">
        Sophisticated analysis tools are used to evaluate project performance and manage risk across renewable energy investments.
      </p>
      
      <!-- Project Finance Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <!-- Production Probability -->
        <div class="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50">
          <div class="flex items-start mb-4">
            <div class="bg-blue-900/30 p-3 rounded-lg mr-4">
              <svg class="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white mb-2">P50/P90/P99 Production Cases</h3>
              <p class="text-slate-400">Statistical confidence levels for energy production forecasts that drive investment decisions:</p>
            </div>
          </div>
          <ul class="space-y-3 mb-6">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div>
                <span class="text-slate-300 font-medium">P50:</span>
                <span class="text-slate-400"> 50% probability production estimate – base case for financial models</span>
              </div>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div>
                <span class="text-slate-300 font-medium">P90:</span>
                <span class="text-slate-400"> 90% probability production floor – lenders evaluate debt sizing</span>
              </div>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div>
                <span class="text-slate-300 font-medium">P99:</span>
                <span class="text-slate-400"> 99% probability production floor – worst-case scenario stress testing</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- Financial Sensitivity Analysis -->
        <div class="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50">
          <div class="flex items-start mb-4">
            <div class="bg-amber-900/30 p-3 rounded-lg mr-4">
              <svg class="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white mb-2">Financial Sensitivity Analysis</h3>
              <p class="text-slate-400">Rigorous testing of financial models against key variable fluctuations:</p>
            </div>
          </div>
          <ul class="space-y-3 mb-6">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-amber-400 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div>
                <span class="text-slate-300 font-medium">DSCR Testing:</span>
                <span class="text-slate-400"> Debt Service Coverage Ratio analysis under multiple scenarios</span>
              </div>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-amber-400 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div>
                <span class="text-slate-300 font-medium">LCOE Analysis:</span>
                <span class="text-slate-400"> Levelized Cost of Energy compared to local market prices</span>
              </div>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-amber-400 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div>
                <span class="text-slate-300 font-medium">Monte Carlo Simulation:</span>
                <span class="text-slate-400"> Probability assessment across thousands of scenarios</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- Risk Mitigation -->
        <div class="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50">
          <div class="flex items-start mb-4">
            <div class="bg-green-900/30 p-3 rounded-lg mr-4">
              <svg class="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white mb-2">Risk Mitigation Structures</h3>
              <p class="text-slate-400">Comprehensive contractual and insurance frameworks to safeguard investments:</p>
            </div>
          </div>
          <ul class="space-y-3 mb-6">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-400 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div>
                <span class="text-slate-300 font-medium">PPA Structure:</span>
                <span class="text-slate-400"> Power Purchase Agreements with creditworthy offtakers</span>
              </div>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-400 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div>
                <span class="text-slate-300 font-medium">Insurance Coverage:</span>
                <span class="text-slate-400"> Comprehensive policies for weather, business interruption, and equipment</span>
              </div>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-400 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div>
                <span class="text-slate-300 font-medium">Warranties:</span>
                <span class="text-slate-400"> Equipment performance guarantees and O&M contracts</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- Project Technical Due Diligence -->
        <div class="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50">
          <div class="flex items-start mb-4">
            <div class="bg-indigo-900/30 p-3 rounded-lg mr-4">
              <svg class="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white mb-2">Technical Due Diligence</h3>
              <p class="text-slate-400">Comprehensive assessment of project technical fundamentals:</p>
            </div>
          </div>
          <ul class="space-y-3 mb-6">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-indigo-400 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div>
                <span class="text-slate-300 font-medium">Resource Assessment:</span>
                <span class="text-slate-400"> Independent verification of solar/wind/hydro resources</span>
              </div>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-indigo-400 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div>
                <span class="text-slate-300 font-medium">Technology Review:</span>
                <span class="text-slate-400"> Equipment quality, track record and performance analysis</span>
              </div>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-indigo-400 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div>
                <span class="text-slate-300 font-medium">Operational Assessment:</span>
                <span class="text-slate-400"> O&M strategy evaluation and performance optimization</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Tools Banner -->
      <div class="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 flex flex-col md:flex-row items-center">
        <div class="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
          <div class="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600/30 to-indigo-600/30 flex items-center justify-center">
            <svg class="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div class="flex-1 text-center md:text-left">
          <h3 class="text-xl font-bold text-white mb-2">Run Your Own Financial Scenarios</h3>
          <p class="text-slate-400 mb-4">Request access to our proprietary financial modeling toolkit for this project.</p>
          <div>
            <button class="inline-flex items-center rounded-lg border border-transparent font-semibold px-4 py-2 text-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 shadow-sm transition duration-150 ease-in-out">
              Request Financial Model Access
              <svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 