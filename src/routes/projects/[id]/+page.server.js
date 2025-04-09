/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }) => {
  // In a real app, this would fetch data from your API based on the project ID
  const project = {
    id: params.id,
    name: 'Atacama Solar Park',
    location: 'Antofagasta, Chile',
    type: 'Solar PV',
    capacity: '250 MW',
    investment: 250000000,
    riskScore: 3.2,
    irr: 12.5,
    riskLevel: 'Medium',
    energySecurity: 4.8,
    status: 'Operational',
    developer: 'Solaris Energy',
    ppaTerm: 15,
    carbonOffset: 450000,
    description: 'Large-scale solar PV project in the Atacama Desert, benefiting from one of the highest solar irradiance levels in the world.',
    
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

  return { project };
};