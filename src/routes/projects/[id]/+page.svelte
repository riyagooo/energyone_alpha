<script>
  import { page } from '$app/stores';
  import ProjectHeader from './ProjectHeader.svelte';
  import RiskAnalysis from './RiskAnalysis.svelte';
  import FinancialMetrics from './FinancialMetrics.svelte';
  import ProjectTimeline from './ProjectTimeline.svelte';
  import EnergyMetrics from './EnergyMetrics.svelte';
  import EnvironmentalImpact from './EnvironmentalImpact.svelte';
  import ProjectTeam from './ProjectTeam.svelte';

  // This would come from your API in a real app
  const project = {
    id: $page.params.id,
    name: 'Atacama Solar Park',
    location: 'Antofagasta, Chile',
    type: 'Solar PV',
    capacity: '250 MW',
    investment: 250000000,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    riskScore: 3.2,
    irr: 12.5,
    riskLevel: 'Medium',
    energySecurity: 4.8,
    status: 'Operational',
    developer: 'Solaris Energy',
    ppaTerm: 15,
    carbonOffset: 450000,
    description: 'Large-scale solar PV project in the Atacama Desert, benefiting from one of the highest solar irradiance levels in the world.',
    
    // Detailed metrics
    financials: {
      totalInvestment: 250000000,
      equity: 75000000,
      debt: 175000000,
      dscr: 1.8,
      paybackPeriod: 7.5,
      npv: 45000000,
      leveredIrr: 12.5,
      unleveredIrr: 9.8,
      wacc: 7.2
    },
    
    timeline: {
      development: '2020-01',
      construction: '2021-03',
      commissioning: '2022-06',
      operation: '2022-09',
      ppaStart: '2022-09',
      ppaEnd: '2037-09'
    },
    
    energyMetrics: {
      annualGeneration: 550000,
      capacityFactor: 0.25,
      availability: 0.98,
      performanceRatio: 0.85,
      degradationRate: 0.005
    },
    
    environmental: {
      carbonOffset: 450000,
      landUse: 500,
      waterUsage: 0,
      biodiversityImpact: 'Low',
      socialImpact: 'Positive'
    },
    
    team: {
      developer: 'Solaris Energy',
      epc: 'Renewable Construction Co',
      oem: 'SolarTech Inc',
      om: 'Green Operations Ltd',
      legal: 'Energy Law Partners',
      technical: 'Renewable Engineering Group'
    }
  };
</script>

<div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
  <!-- Project Header -->
  <ProjectHeader {project} />

  <!-- Main Content -->
  <div class="grid grid-cols-12 gap-6">
    <!-- Risk Analysis -->
    <div class="col-span-full lg:col-span-8">
      <RiskAnalysis {project} />
    </div>

    <!-- Financial Metrics -->
    <div class="col-span-full lg:col-span-4">
      <FinancialMetrics {project} />
    </div>

    <!-- Project Timeline -->
    <div class="col-span-full">
      <ProjectTimeline {project} />
    </div>

    <!-- Energy Metrics -->
    <div class="col-span-full lg:col-span-6">
      <EnergyMetrics {project} />
    </div>

    <!-- Environmental Impact -->
    <div class="col-span-full lg:col-span-6">
      <EnvironmentalImpact {project} />
    </div>

    <!-- Project Team -->
    <div class="col-span-full">
      <ProjectTeam {project} />
    </div>

    <!-- Contact Section -->
    <div class="col-span-full mt-12">
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Interested in Learning More?</h2>
          <p class="text-lg mb-6 text-blue-100">
            Connect with our project team to discuss investment opportunities, technical details, or any questions you may have.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact?project={project.id}" 
              class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
            >
              Contact Project Team
            </a>
            <a 
              href="/schedule-call?project={project.id}" 
              class="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
            >
              Schedule a Call
            </a>
          </div>
          <div class="mt-6 text-sm text-blue-200">
            <p>Our team typically responds within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 