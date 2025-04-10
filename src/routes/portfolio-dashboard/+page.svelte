<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import type { Project } from '$lib/types/project';
  import Cart from '../../components/shop/Cart.svelte';

  // Sample data for the dashboard
  let portfolioSummary = {
    totalInvested: 250000,
    currentValue: 287500,
    absoluteReturn: 37500,
    percentageReturn: 15,
    projectedAnnualYield: 8.2,
    weightedRiskScore: 2.3,
    carbonOffset: 3250,
    portfolioAge: '1 year, 3 months'
  };

  let portfolioDistribution = {
    byType: [
      { type: 'Solar', percentage: 45, value: 129375 },
      { type: 'Wind', percentage: 35, value: 100625 },
      { type: 'Hydro', percentage: 15, value: 43125 },
      { type: 'Storage', percentage: 5, value: 14375 }
    ],
    byRiskLevel: [
      { level: 'Low', percentage: 60, value: 172500 },
      { level: 'Medium', percentage: 30, value: 86250 },
      { level: 'High', percentage: 10, value: 28750 }
    ],
    byRegion: [
      { region: 'North America', percentage: 50, value: 143750 },
      { region: 'Europe', percentage: 30, value: 86250 },
      { region: 'Asia', percentage: 15, value: 43125 },
      { region: 'South America', percentage: 5, value: 14375 }
    ]
  };

  let performanceHistory = [
    { month: 'Jan', value: 250000 },
    { month: 'Feb', value: 252500 },
    { month: 'Mar', value: 255000 },
    { month: 'Apr', value: 257500 },
    { month: 'May', value: 262500 },
    { month: 'Jun', value: 267500 },
    { month: 'Jul', value: 270000 },
    { month: 'Aug', value: 275000 },
    { month: 'Sep', value: 277500 },
    { month: 'Oct', value: 280000 },
    { month: 'Nov', value: 285000 },
    { month: 'Dec', value: 287500 }
  ];

  let benchmarkComparison = [
    { name: 'Your Portfolio', value: 15 },
    { name: 'S&P 500', value: 10.5 },
    { name: 'Renewable Energy Index', value: 12.8 },
    { name: 'Bond Market', value: 2.3 }
  ];

  let riskAnalysis = {
    categories: [
      { category: 'Market Risk', score: 2.1, analysis: 'Low exposure to market volatility due to long-term PPAs' },
      { category: 'Regulatory Risk', score: 3.4, analysis: 'Moderate exposure to policy changes in renewable energy incentives' },
      { category: 'Technical Risk', score: 1.9, analysis: 'Low risk with established technologies and strong maintenance contracts' },
      { category: 'Environmental Risk', score: 1.5, analysis: 'Very low environmental risk factors across the portfolio' },
      { category: 'Financial Risk', score: 2.8, analysis: 'Moderate financial risk due to capital-intensive projects' }
    ],
    totalScore: 2.3,
    riskRating: 'Low-Medium'
  };

  let portfolioProjects = [
    {
      id: 'solar-farm-alpha',
      name: 'Solar Farm Alpha',
      type: 'Solar',
      location: 'Arizona, USA',
      investmentAmount: 75000,
      currentValue: 86250,
      return: 15,
      riskLevel: 'Low',
      riskScore: 1.8,
      irr: 7.2,
      status: 'Operational',
      lastUpdate: '2023-12-15',
      performance: 'On target'
    },
    {
      id: 'coastal-wind',
      name: 'Coastal Wind Project',
      type: 'Wind',
      location: 'North Carolina, USA',
      investmentAmount: 100000,
      currentValue: 118000,
      return: 18,
      riskLevel: 'Medium',
      riskScore: 3.1,
      irr: 9.4,
      status: 'Operational',
      lastUpdate: '2023-12-10',
      performance: 'Above target'
    },
    {
      id: 'hydro-station',
      name: 'Hydroelectric Station',
      type: 'Hydro',
      location: 'Washington, USA',
      investmentAmount: 50000,
      currentValue: 54500,
      return: 9,
      riskLevel: 'Low',
      riskScore: 2.0,
      irr: 6.8,
      status: 'Operational',
      lastUpdate: '2023-12-18',
      performance: 'Slightly below target'
    },
    {
      id: 'storage-facility',
      name: 'Grid Storage Facility',
      type: 'Storage',
      location: 'California, USA',
      investmentAmount: 25000,
      currentValue: 28750,
      return: 15,
      riskLevel: 'High',
      riskScore: 3.8,
      irr: 11.2,
      status: 'Under Construction',
      lastUpdate: '2023-12-05',
      performance: 'On target'
    }
  ];

  let upcomingPayouts = [
    {
      project: 'Solar Farm Alpha',
      amount: 1350,
      date: '2024-01-15',
      type: 'Quarterly Dividend'
    },
    {
      project: 'Coastal Wind Project',
      amount: 2350,
      date: '2024-01-22',
      type: 'Quarterly Dividend'
    },
    {
      project: 'Hydroelectric Station',
      amount: 850,
      date: '2024-02-05',
      type: 'Quarterly Dividend'
    }
  ];

  let alerts = [
    {
      type: 'positive',
      message: 'Coastal Wind Project exceeding generation targets by 12%',
      date: '2023-12-17'
    },
    {
      type: 'neutral',
      message: 'Regulatory review announced for renewable energy incentives in Washington state',
      date: '2023-12-14'
    },
    {
      type: 'negative',
      message: 'Hydroelectric Station experiencing lower output due to reduced water levels',
      date: '2023-12-10'
    }
  ];

  let environmentalImpact = {
    totalCarbonOffset: 3250,
    treesEquivalent: 54165,
    homesPowered: 1250,
    waterSaved: 22500000
  };

  // Chart configurations
  let activeTimeframe = '1y';
  
  function formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  }
  
  function formatPercentage(value: number): string {
    return `${value.toFixed(1)}%`;
  }
  
  function getRiskColor(score: number): string {
    if (score <= 2.0) return 'text-green-500';
    if (score <= 3.0) return 'text-yellow-500';
    return 'text-red-500';
  }
  
  function getRiskBg(score: number): string {
    if (score <= 2.0) return 'bg-green-100';
    if (score <= 3.0) return 'bg-yellow-100';
    return 'bg-red-100';
  }
  
  function getPerformanceColor(performance: string): string {
    if (performance.includes('Above')) return 'text-green-500';
    if (performance.includes('On target')) return 'text-blue-500';
    return 'text-yellow-500';
  }
  
  function getAlertColor(type: string): string {
    if (type === 'positive') return 'bg-green-100 text-green-800';
    if (type === 'neutral') return 'bg-blue-100 text-blue-800';
    return 'bg-yellow-100 text-yellow-800';
  }
  
  function viewProjectDetails(id: string) {
    goto(`/projects/${id}`);
  }
  
  // Cart functionality
  let cart: (Project & { quantity: number })[] = [];
  let isCartOpen = false;
  
  onMount(() => {
    // In a real app, this would fetch data from an API
    console.log('Portfolio dashboard mounted');
  });
</script>

<div class="min-h-screen bg-slate-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Dashboard Header -->
    <div class="mb-8">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-3xl font-bold text-slate-300">Investment Portfolio</h1>
          <p class="mt-2 text-slate-400">Track your renewable energy investments and performance</p>
        </div>
        <div class="flex space-x-2">
          <button class="px-4 py-2 text-sm font-medium rounded-md bg-slate-800 text-slate-300 hover:bg-slate-700">Export Data</button>
          <button class="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-t from-blue-600 to-blue-400 text-white hover:to-blue-500">Find New Projects</button>
        </div>
      </div>
    </div>

    <!-- Portfolio Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-slate-800 rounded-lg p-6 shadow-lg">
        <h3 class="text-sm font-medium text-slate-400 mb-1">Total Investment</h3>
        <div class="flex items-baseline">
          <p class="text-2xl font-semibold text-slate-300">{formatCurrency(portfolioSummary.totalInvested)}</p>
          <span class="ml-2 text-sm font-medium text-slate-400">USD</span>
        </div>
        <div class="mt-1">
          <p class="text-sm text-slate-400">{portfolioSummary.portfolioAge} old</p>
        </div>
      </div>
      
      <div class="bg-slate-800 rounded-lg p-6 shadow-lg">
        <h3 class="text-sm font-medium text-slate-400 mb-1">Current Value</h3>
        <div class="flex items-baseline">
          <p class="text-2xl font-semibold text-slate-300">{formatCurrency(portfolioSummary.currentValue)}</p>
          <span class="ml-2 text-sm font-medium text-green-400">+{formatPercentage(portfolioSummary.percentageReturn)}</span>
        </div>
        <div class="mt-1">
          <p class="text-sm text-slate-400">+{formatCurrency(portfolioSummary.absoluteReturn)} overall</p>
        </div>
      </div>
      
      <div class="bg-slate-800 rounded-lg p-6 shadow-lg">
        <h3 class="text-sm font-medium text-slate-400 mb-1">Projected Annual Yield</h3>
        <div class="flex items-baseline">
          <p class="text-2xl font-semibold text-slate-300">{formatPercentage(portfolioSummary.projectedAnnualYield)}</p>
        </div>
        <div class="mt-1">
          <p class="text-sm text-slate-400">Based on current performance</p>
        </div>
      </div>
      
      <div class="bg-slate-800 rounded-lg p-6 shadow-lg">
        <h3 class="text-sm font-medium text-slate-400 mb-1">Portfolio Risk Score</h3>
        <div class="flex items-baseline">
          <p class="text-2xl font-semibold {getRiskColor(portfolioSummary.weightedRiskScore)}">{portfolioSummary.weightedRiskScore.toFixed(1)}</p>
          <span class="ml-2 text-sm font-medium text-slate-400">/ 5.0</span>
        </div>
        <div class="mt-1">
          <p class="text-sm text-slate-400">Low-Medium Risk Profile</p>
        </div>
      </div>
    </div>

    <!-- Main Dashboard Content -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Left Column -->
      <div class="lg:col-span-2 space-y-8">
        <!-- Portfolio Performance Chart -->
        <div class="bg-slate-800 rounded-lg p-6 shadow-lg">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-semibold text-slate-300">Portfolio Performance</h2>
            <div class="flex space-x-2">
              <button class={`px-3 py-1 text-xs font-medium rounded-md ${activeTimeframe === '1m' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>1M</button>
              <button class={`px-3 py-1 text-xs font-medium rounded-md ${activeTimeframe === '3m' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>3M</button>
              <button class={`px-3 py-1 text-xs font-medium rounded-md ${activeTimeframe === '6m' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>6M</button>
              <button class={`px-3 py-1 text-xs font-medium rounded-md ${activeTimeframe === '1y' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>1Y</button>
              <button class={`px-3 py-1 text-xs font-medium rounded-md ${activeTimeframe === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>All</button>
            </div>
          </div>
          
          <div class="h-64 relative">
            <!-- This would be a real chart in production -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-full h-40 rounded bg-slate-700 relative overflow-hidden">
                <div class="absolute inset-0 flex items-end px-4">
                  {#each performanceHistory as item, i}
                    <div class="flex-1 flex flex-col items-center">
                      <div class="w-full h-32 flex items-end">
                        <div class="w-4/5 mx-auto bg-gradient-to-t from-blue-600 to-blue-400 rounded-t" style="height: {(item.value - 250000) / 750}px"></div>
                      </div>
                      <span class="text-xs text-slate-400 mt-1">{item.month}</span>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
          </div>
          
          <div class="flex justify-between items-center mt-4">
            <div>
              <span class="text-sm font-medium text-slate-300">Starting: {formatCurrency(performanceHistory[0].value)}</span>
            </div>
            <div>
              <span class="text-sm font-medium text-slate-300">Current: {formatCurrency(performanceHistory[performanceHistory.length - 1].value)}</span>
            </div>
          </div>
        </div>
        
        <!-- Investment Distribution -->
        <div class="bg-slate-800 rounded-lg p-6 shadow-lg">
          <h2 class="text-lg font-semibold text-slate-300 mb-4">Portfolio Distribution</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- By Project Type -->
            <div>
              <h3 class="text-sm font-medium text-slate-400 mb-3">By Project Type</h3>
              <div class="space-y-2">
                {#each portfolioDistribution.byType as item}
                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="text-sm text-slate-300">{item.type}</span>
                      <span class="text-sm text-slate-400">{item.percentage}%</span>
                    </div>
                    <div class="w-full bg-slate-700 rounded-full h-2">
                      <div class="bg-blue-500 h-2 rounded-full" style="width: {item.percentage}%"></div>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
            
            <!-- By Risk Level -->
            <div>
              <h3 class="text-sm font-medium text-slate-400 mb-3">By Risk Level</h3>
              <div class="space-y-2">
                {#each portfolioDistribution.byRiskLevel as item}
                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="text-sm text-slate-300">{item.level}</span>
                      <span class="text-sm text-slate-400">{item.percentage}%</span>
                    </div>
                    <div class="w-full bg-slate-700 rounded-full h-2">
                      <div class="bg-blue-500 h-2 rounded-full" style="width: {item.percentage}%"></div>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
            
            <!-- By Region -->
            <div>
              <h3 class="text-sm font-medium text-slate-400 mb-3">By Region</h3>
              <div class="space-y-2">
                {#each portfolioDistribution.byRegion as item}
                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="text-sm text-slate-300">{item.region}</span>
                      <span class="text-sm text-slate-400">{item.percentage}%</span>
                    </div>
                    <div class="w-full bg-slate-700 rounded-full h-2">
                      <div class="bg-blue-500 h-2 rounded-full" style="width: {item.percentage}%"></div>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
        
        <!-- Portfolio Projects -->
        <div class="bg-slate-800 rounded-lg p-6 shadow-lg">
          <h2 class="text-lg font-semibold text-slate-300 mb-4">Your Projects</h2>
          
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-slate-700">
                  <th class="py-3 text-left text-sm font-medium text-slate-400">Project</th>
                  <th class="py-3 text-left text-sm font-medium text-slate-400">Type</th>
                  <th class="py-3 text-right text-sm font-medium text-slate-400">Investment</th>
                  <th class="py-3 text-right text-sm font-medium text-slate-400">Current Value</th>
                  <th class="py-3 text-right text-sm font-medium text-slate-400">Return</th>
                  <th class="py-3 text-right text-sm font-medium text-slate-400">Risk Score</th>
                  <th class="py-3 text-right text-sm font-medium text-slate-400">Performance</th>
                </tr>
              </thead>
              <tbody>
                {#each portfolioProjects as project}
                  <tr class="border-b border-slate-700 hover:bg-slate-700/30 cursor-pointer" on:click={() => viewProjectDetails(project.id)}>
                    <td class="py-4">
                      <div>
                        <div class="text-sm font-medium text-slate-300">{project.name}</div>
                        <div class="text-xs text-slate-400">{project.location}</div>
                      </div>
                    </td>
                    <td class="py-4">
                      <span class="text-sm text-slate-300">{project.type}</span>
                    </td>
                    <td class="py-4 text-right">
                      <span class="text-sm text-slate-300">{formatCurrency(project.investmentAmount)}</span>
                    </td>
                    <td class="py-4 text-right">
                      <span class="text-sm text-slate-300">{formatCurrency(project.currentValue)}</span>
                    </td>
                    <td class="py-4 text-right">
                      <span class="text-sm text-green-400">+{formatPercentage(project.return)}</span>
                    </td>
                    <td class="py-4 text-right">
                      <span class="text-sm {getRiskColor(project.riskScore)}">{project.riskScore.toFixed(1)}</span>
                    </td>
                    <td class="py-4 text-right">
                      <span class="text-sm {getPerformanceColor(project.performance)}">{project.performance}</span>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
        
        <!-- Performance Comparison -->
        <div class="bg-slate-800 rounded-lg p-6 shadow-lg">
          <h2 class="text-lg font-semibold text-slate-300 mb-4">Performance Comparison</h2>
          
          <div class="h-64 relative">
            <!-- This would be a real chart in production -->
            <div class="absolute inset-0">
              <div class="w-full h-40 mt-10 flex items-end space-x-12 px-6">
                {#each benchmarkComparison as item, i}
                  <div class="flex-1 flex flex-col items-center">
                    <div class="w-full h-40 flex items-end">
                      <div class="w-16 mx-auto bg-blue-500 rounded-t" style="height: {item.value * 10}px; {i === 0 ? 'background: linear-gradient(to top, #2563eb, #60a5fa);' : ''}"></div>
                    </div>
                    <span class="text-sm text-slate-300 mt-2">{item.name}</span>
                    <span class="text-xs text-slate-400 mt-1">{formatPercentage(item.value)}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right Column -->
      <div class="space-y-8">
        <!-- Risk Analysis -->
        <div class="bg-slate-800 rounded-lg p-6 shadow-lg">
          <h2 class="text-lg font-semibold text-slate-300 mb-4">Risk Analysis</h2>
          
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
              <div class="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center">
                <span class="text-lg font-bold {getRiskColor(riskAnalysis.totalScore)}">{riskAnalysis.totalScore.toFixed(1)}</span>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-slate-300">Overall Risk Score</p>
                <p class="text-xs text-slate-400">{riskAnalysis.riskRating} Risk</p>
              </div>
            </div>
          </div>
          
          <div class="space-y-4">
            {#each riskAnalysis.categories as category}
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm text-slate-300">{category.category}</span>
                  <span class="text-sm {getRiskColor(category.score)}">{category.score.toFixed(1)}</span>
                </div>
                <div class="w-full bg-slate-700 rounded-full h-2">
                  <div class="{category.score <= 2.0 ? 'bg-green-500' : category.score <= 3.0 ? 'bg-yellow-500' : 'bg-red-500'} h-2 rounded-full" style="width: {(category.score / 5) * 100}%"></div>
                </div>
                <p class="text-xs text-slate-400 mt-1">{category.analysis}</p>
              </div>
            {/each}
          </div>
        </div>
        
        <!-- Upcoming Payouts -->
        <div class="bg-slate-800 rounded-lg p-6 shadow-lg">
          <h2 class="text-lg font-semibold text-slate-300 mb-4">Upcoming Payouts</h2>
          
          <div class="space-y-4">
            {#each upcomingPayouts as payout}
              <div class="flex justify-between items-center py-3 border-b border-slate-700">
                <div>
                  <p class="text-sm font-medium text-slate-300">{payout.project}</p>
                  <p class="text-xs text-slate-400">{payout.type}</p>
                </div>
                <div class="text-right">
                  <p class="text-sm font-medium text-green-400">{formatCurrency(payout.amount)}</p>
                  <p class="text-xs text-slate-400">{payout.date}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
        
        <!-- Environmental Impact -->
        <div class="bg-slate-800 rounded-lg p-6 shadow-lg">
          <h2 class="text-lg font-semibold text-slate-300 mb-4">Environmental Impact</h2>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-slate-700 rounded-lg p-4">
              <p class="text-xs text-slate-400 mb-1">Carbon Offset</p>
              <p class="text-xl font-semibold text-slate-300">{environmentalImpact.totalCarbonOffset.toLocaleString()} <span class="text-sm text-slate-400">tons</span></p>
            </div>
            
            <div class="bg-slate-700 rounded-lg p-4">
              <p class="text-xs text-slate-400 mb-1">Trees Equivalent</p>
              <p class="text-xl font-semibold text-slate-300">{environmentalImpact.treesEquivalent.toLocaleString()}</p>
            </div>
            
            <div class="bg-slate-700 rounded-lg p-4">
              <p class="text-xs text-slate-400 mb-1">Homes Powered</p>
              <p class="text-xl font-semibold text-slate-300">{environmentalImpact.homesPowered.toLocaleString()}</p>
            </div>
            
            <div class="bg-slate-700 rounded-lg p-4">
              <p class="text-xs text-slate-400 mb-1">Water Saved</p>
              <p class="text-xl font-semibold text-slate-300">{(environmentalImpact.waterSaved / 1000000).toFixed(1)}M <span class="text-sm text-slate-400">gal</span></p>
            </div>
          </div>
        </div>
        
        <!-- Recent Alerts -->
        <div class="bg-slate-800 rounded-lg p-6 shadow-lg">
          <h2 class="text-lg font-semibold text-slate-300 mb-4">Recent Alerts</h2>
          
          <div class="space-y-3">
            {#each alerts as alert}
              <div class={`p-3 rounded-lg ${getAlertColor(alert.type)}`}>
                <p class="text-sm font-medium">{alert.message}</p>
                <p class="text-xs mt-1 opacity-75">{alert.date}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Cart Component -->
  <Cart bind:cart bind:isOpen={isCartOpen} />
</div> 