<script lang="ts">
  import { page } from '$app/stores';
  import ProjectHeader from './ProjectHeader.svelte';
  import RiskAnalysis from './RiskAnalysis.svelte';
  import FinancialMetrics from './FinancialMetrics.svelte';
  import ProjectTimeline from './ProjectTimeline.svelte';
  import EnergyMetrics from './EnergyMetrics.svelte';
  import EnvironmentalImpact from './EnvironmentalImpact.svelte';
  import ProjectTeam from './ProjectTeam.svelte';
  import Cart from '../../../components/shop/Cart.svelte';
  import type { Project, InvestmentType } from '$lib/types/project';
  
  export let data;
  const project = data.project || {
    id: '',
    name: 'Project',
    location: '',
    type: '',
    capacity: '',
    investment: 0,
    image: '',
    riskScore: 0,
    irr: 0,
    riskLevel: '',
    energySecurity: 0,
    status: '',
    developer: '',
    ppaTerm: 0,
    carbonOffset: 0,
    description: '',
    investmentType: 'equity' as InvestmentType,
    minimumInvestment: 0,
    financials: {},
    timeline: {},
    energyMetrics: {},
    environmental: {},
    team: {}
  };

  // Cart functionality
  let cart: (Project & { quantity: number })[] = [];
  let isCartOpen = false;

  function addToCart(projectToAdd: Project) {
    const existingItem = cart.find(item => item.id === projectToAdd.id);
    if (existingItem) {
      cart = cart.map(item =>
        item.id === projectToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      cart = [...cart, { ...projectToAdd, quantity: 1 }];
    }
    // Show cart when adding an item
    isCartOpen = true;
  }

  // These components were causing errors, since we've created them now we can use them directly
  // Commented import lines to avoid errors:
  // import ProjectDetails from './ProjectDetails.svelte';
  // import RiskAssessment from './RiskAssessment.svelte';
  
  // This would come from your API in a real app
  // const project: Project = {
  //   id: $page.params.id,
  //   name: 'Atacama Solar Park',
  //   location: 'Antofagasta, Chile',
  //   type: 'Solar PV',
  //   capacity: '250 MW',
  //   investment: 250000000,
  //   image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   riskScore: 3.2,
  //   irr: 12.5,
  //   riskLevel: 'Medium',
  //   energySecurity: 4.8,
  //   status: 'Operational',
  //   developer: 'Solaris Energy',
  //   ppaTerm: 15,
  //   carbonOffset: 450000,
  //   description: 'Large-scale solar PV project in the Atacama Desert, benefiting from one of the highest solar irradiance levels in the world.',
  //   
  //   // Detailed metrics
  //   financials: {
  //     totalInvestment: 250000000,
  //     equity: 75000000,
  //     debt: 175000000,
  //     dscr: 1.8,
  //     paybackPeriod: 7.5,
  //     npv: 45000000,
  //     leveredIrr: 12.5,
  //     unleveredIrr: 9.8,
  //     wacc: 7.2
  //   },
  //   
  //   timeline: {
  //     development: '2020-01',
  //     construction: '2021-03',
  //     commissioning: '2022-06',
  //     operation: '2022-09',
  //     ppaStart: '2022-09',
  //     ppaEnd: '2037-09'
  //   },
  //   
  //   energyMetrics: {
  //     annualGeneration: 550000,
  //     capacityFactor: 0.25,
  //     availability: 0.98,
  //     performanceRatio: 0.85,
  //     degradationRate: 0.005
  //   },
  //   
  //   environmental: {
  //     carbonOffset: 450000,
  //     landUse: 500,
  //     waterUsage: 0,
  //     biodiversityImpact: 'Low',
  //     socialImpact: 'Positive'
  //   },
  //   
  //   team: {
  //     developer: 'Solaris Energy',
  //     epc: 'Renewable Construction Co',
  //     oem: 'SolarTech Inc',
  //     om: 'Green Operations Ltd',
  //     legal: 'Energy Law Partners',
  //     technical: 'Renewable Engineering Group'
  //   }
  // };
</script>

<div class="min-h-screen bg-slate-900">
  <div style={`view-transition-name: product-${project.id}`}  class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Project Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-slate-300">{project.name}</h1>
      <p class="mt-2 text-slate-400">{project.location}</p>
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Left Column -->
      <div class="lg:col-span-2 space-y-8">
        <!-- Project Image -->
        <div class="rounded-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            class="w-full h-64 object-cover"
          />
        </div>

        <!-- Basic Project Details -->
        <div class="bg-slate-800 rounded-lg p-6">
          <h2 class="text-xl font-semibold text-slate-300 mb-4">Project Details</h2>
          
          <div class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-slate-400">Project Type</p>
                <p class="text-lg font-medium text-slate-300">{project.type}</p>
              </div>
              <div>
                <p class="text-sm text-slate-400">Capacity</p>
                <p class="text-lg font-medium text-slate-300">{project.capacity}</p>
              </div>
              <div>
                <p class="text-sm text-slate-400">Developer</p>
                <p class="text-lg font-medium text-slate-300">{project.developer}</p>
              </div>
              <div>
                <p class="text-sm text-slate-400">PPA Term</p>
                <p class="text-lg font-medium text-slate-300">{project.ppaTerm ? `${project.ppaTerm} years` : 'Not applicable'}</p>
              </div>
            </div>
            
            <div>
              <p class="text-sm text-slate-400">Description</p>
              <p class="mt-1 text-slate-300">{project.description}</p>
            </div>
          </div>
        </div>

        <!-- Risk Analysis -->
        <RiskAnalysis {project} />

        <!-- Environmental Impact -->
        <EnvironmentalImpact {project} />

        <!-- Energy Production Metrics -->
        <EnergyMetrics {project} />

        <!-- Financial Metrics -->
        <FinancialMetrics {project} />
        
        <!-- Project Team -->
        <ProjectTeam {project} />
      </div>

      <!-- Right Column -->
      <div class="space-y-8">
        <!-- Investment Summary -->
        <div class="bg-slate-800 rounded-lg p-6">
          <h2 class="text-xl font-semibold text-slate-300 mb-4">Investment Summary</h2>
          <div class="space-y-4">
            <div>
              <p class="text-sm text-slate-400">Minimum Investment</p>
              <p class="text-lg font-medium text-slate-300">${project.investment.toLocaleString()}</p>
            </div>
            <div>
              <p class="text-sm text-slate-400">Project Type</p>
              <p class="text-lg font-medium text-slate-300">{project.type}</p>
            </div>
            <div>
              <p class="text-sm text-slate-400">Status</p>
              <p class="text-lg font-medium text-slate-300">{project.status}</p>
            </div>
            <div>
              <p class="text-sm text-slate-400">Risk Level</p>
              <p class="text-lg font-medium text-slate-300">{project.riskLevel}</p>
            </div>
            
            <!-- Add To Cart Button -->
            <button
              on:click={() => addToCart(project as Project)}
              class="w-full mt-6 flex items-center justify-center px-4 py-3 rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to Investment Cart
            </button>
          </div>
        </div>

        <!-- Contact Section with Team Info -->
        <div class="bg-slate-800 rounded-lg p-6">
          <h2 class="text-xl font-semibold text-slate-300 mb-4">Interested in Learning More?</h2>
          <p class="text-slate-400 mb-4">
            Connect with this project team to discuss investment opportunities and technical details.
          </p>
          
          <!-- Key Team Members -->
          <div class="mb-6">
            <h3 class="text-lg font-medium text-slate-300 mb-3">Key Contacts</h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                       alt="Sarah Chen" 
                       class="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 class="text-base font-medium text-slate-300">Sarah Chen</h4>
                  <p class="text-blue-400 text-sm">Project Director</p>
                  <p class="text-slate-400 text-xs">15+ years in renewable energy development</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                       alt="Elena Petrov" 
                       class="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 class="text-base font-medium text-slate-300">Elena Petrov</h4>
                  <p class="text-blue-400 text-sm">Finance Director</p>
                  <p class="text-slate-400 text-xs">18 years in renewable energy finance</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="space-y-3">
            <a
              href="/projects/{$page.params.id}/team"
              class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500"
            >
              Contact Project Team
            </a>
            <a
              href="/contact"
              class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-400 bg-slate-900 hover:bg-slate-700"
            >
              Contact EnergyOne Team
            </a>
          </div>
        </div>

        <!-- Currency Hedging Options -->
        <div class="bg-slate-800 rounded-lg p-6 mt-8">
          <h2 class="text-xl font-semibold text-slate-300 mb-4">Currency Risk Hedging Solutions</h2>
          <p class="text-slate-400 mb-4">
            Protect your investment from currency fluctuations with tailored financial products from our trusted banking partners. Currency risk can significantly impact renewable energy projects with international funding or revenue streams.
          </p>
          
          <!-- Overview of Currency Hedging Types -->
          <div class="bg-slate-700/50 rounded-lg p-4 mb-6">
            <h3 class="text-lg font-medium text-slate-200 mb-3">Types of Currency Hedges</h3>
            <div class="space-y-3">
              <div>
                <h4 class="text-sm font-medium text-blue-400">Forward Contracts</h4>
                <p class="text-xs text-slate-400">Lock in exchange rates today for future transactions. Ideal for projects with predictable future cash flows in foreign currencies.</p>
              </div>
              <div>
                <h4 class="text-sm font-medium text-green-400">Options Contracts</h4>
                <p class="text-xs text-slate-400">Gain the right but not obligation to exchange currencies at predetermined rates. Provides protection while allowing benefit from favorable market movements.</p>
              </div>
              <div>
                <h4 class="text-sm font-medium text-purple-400">Currency Swaps</h4>
                <p class="text-xs text-slate-400">Exchange interest and principal payments from one currency to another. Perfect for long-term financing where debt and revenue are in different currencies.</p>
              </div>
              <div>
                <h4 class="text-sm font-medium text-amber-400">Revenue Hedging</h4>
                <p class="text-xs text-slate-400">Specialized structures that combine currency protection with revenue stabilization, often integrated with power purchase agreements (PPAs).</p>
              </div>
            </div>
          </div>
          
          <div class="space-y-6">
            <!-- Partner Bank 1 -->
            <div class="bg-slate-700 rounded-lg p-4 transition-all hover:bg-slate-600">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center">
                  <div class="w-12 h-12 rounded-full bg-blue-800 mr-3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-medium text-slate-200">Global Finance Bank</h3>
                    <p class="text-xs text-slate-400">Premier Currency Solutions</p>
                  </div>
                </div>
                <span class="px-2 py-1 bg-blue-900 text-blue-200 text-xs rounded-full">Recommended</span>
              </div>
              <div class="space-y-3 mb-4">
                <div class="flex justify-between">
                  <span class="text-slate-400 text-sm">Forward Contracts</span>
                  <span class="text-slate-300 text-sm">Up to 10 years</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400 text-sm">Currency Swaps</span>
                  <span class="text-slate-300 text-sm">Custom terms available</span>
                </div>
              </div>
              <p class="text-xs text-slate-400 mb-4">
                Global Finance Bank offers tailored currency hedging solutions specifically designed for renewable energy projects with exposure to multiple currencies.
              </p>
              <button class="w-full flex items-center justify-center px-3 py-2 border border-blue-500 rounded shadow-sm text-sm font-medium text-blue-400 bg-transparent hover:bg-blue-900/30">
                Request Information
              </button>
            </div>
            
            <!-- Partner Bank 2 -->
            <div class="bg-slate-700 rounded-lg p-4 transition-all hover:bg-slate-600">
              <div class="flex items-center mb-3">
                <div class="w-12 h-12 rounded-full bg-green-800 mr-3 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-slate-200">EcoTrade Financial</h3>
                  <p class="text-xs text-slate-400">Sustainable Currency Management</p>
                </div>
              </div>
              <div class="space-y-3 mb-4">
                <div class="flex justify-between">
                  <span class="text-slate-400 text-sm">Options Contracts</span>
                  <span class="text-slate-300 text-sm">Flexible strike prices</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400 text-sm">Cross-Currency Solutions</span>
                  <span class="text-slate-300 text-sm">For multi-country projects</span>
                </div>
              </div>
              <p class="text-xs text-slate-400 mb-4">
                Specialized in emerging markets currencies with favorable terms for renewable energy developers and investors.
              </p>
              <button class="w-full flex items-center justify-center px-3 py-2 border border-green-500 rounded shadow-sm text-sm font-medium text-green-400 bg-transparent hover:bg-green-900/30">
                Request Information
              </button>
            </div>
            
            <!-- Partner Bank 3 -->
            <div class="bg-slate-700 rounded-lg p-4 transition-all hover:bg-slate-600">
              <div class="flex items-center mb-3">
                <div class="w-12 h-12 rounded-full bg-purple-800 mr-3 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-slate-200">Meridian Partners</h3>
                  <p class="text-xs text-slate-400">Innovative Risk Solutions</p>
                </div>
              </div>
              <div class="space-y-3 mb-4">
                <div class="flex justify-between">
                  <span class="text-slate-400 text-sm">Structured Products</span>
                  <span class="text-slate-300 text-sm">Tailored hedging strategies</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400 text-sm">Revenue Hedging</span>
                  <span class="text-slate-300 text-sm">Combine with PPA protection</span>
                </div>
              </div>
              <p class="text-xs text-slate-400 mb-4">
                Meridian offers comprehensive solutions that combine currency hedging with other risk mitigation strategies specific to renewable energy projects.
              </p>
              <button class="w-full flex items-center justify-center px-3 py-2 border border-purple-500 rounded shadow-sm text-sm font-medium text-purple-400 bg-transparent hover:bg-purple-900/30">
                Request Information
              </button>
            </div>
          </div>
          
          <div class="mt-6 p-4 bg-blue-900/30 rounded-lg border border-blue-700">
            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-sm text-slate-300">
                Our financial team can help you identify the best currency hedging strategy for this specific project. 
                <a href="/contact" class="text-blue-400 hover:underline">Schedule a consultation</a> to discuss your options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Cart Component -->
  <Cart bind:cart bind:isOpen={isCartOpen} />
</div> 