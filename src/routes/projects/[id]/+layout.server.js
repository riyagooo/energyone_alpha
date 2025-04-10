/** @type {import('./$types').LayoutServerLoad} */
export async function load({ params }) {
  // Get all projects from the shop data
  const shopData = await import('../../shop/+page.server.js');
  const projects = (await shopData.load()).projects;
  
  // Find the project with matching ID
  const project = projects.find(p => p.id === parseInt(params.id));

  if (!project) {
    return {
      status: 404,
      error: new Error('Project not found')
    };
  }

  // Add additional details for the project view
  const projectDetails = {
    ...project,
    developer: 'Solaris Energy',
    ppaTerm: 15,
    carbonOffset: 450000,
    description: 'Large-scale renewable energy project with strong financial metrics and environmental benefits.',
    
    financials: {
      totalInvestment: project.investment,
      equity: project.investment * 0.3,
      debt: project.investment * 0.7,
      dscr: 1.8,
      paybackPeriod: 7.5,
      npv: project.investment * 0.18,
      leveredIrr: project.irr,
      unleveredIrr: project.irr * 0.8,
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

  return { project: projectDetails };
} 