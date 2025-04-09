export async function load() {
  const projects = [
    {
      id: 1,
      name: 'Atacama Solar Park',
      location: 'Antofagasta, Chile',
      type: 'Solar PV',
      capacity: '250 MW',
      investment: 250000000,
      riskScore: 2.8,
      riskLevel: 'Medium',
      irr: 12.5,
      status: 'Operational',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      riskDetails: {
        sentiment: 'Positive',
        marketAnalysis: 'Stable',
        regulatory: 'Favorable',
        technical: 'Proven',
        environmental: 'Low Impact'
      }
    },
    {
      id: 2,
      name: 'Patagonia Wind Farm',
      location: 'Santa Cruz, Argentina',
      type: 'Wind',
      capacity: '150 MW',
      investment: 180000000,
      riskScore: 3.2,
      riskLevel: 'Medium',
      irr: 11.8,
      status: 'Under Construction',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      riskDetails: {
        sentiment: 'Positive',
        marketAnalysis: 'Growing',
        regulatory: 'Stable',
        technical: 'Proven',
        environmental: 'Moderate Impact'
      }
    },
    {
      id: 3,
      name: 'Amazon Hydro Project',
      location: 'Pará, Brazil',
      type: 'Hydro',
      capacity: '500 MW',
      investment: 750000000,
      riskScore: 3.8,
      riskLevel: 'High',
      irr: 14.2,
      status: 'Development',
      image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      riskDetails: {
        sentiment: 'Mixed',
        marketAnalysis: 'Volatile',
        regulatory: 'Complex',
        technical: 'Challenging',
        environmental: 'High Impact'
      }
    },
    {
      id: 4,
      name: 'Baja Solar Farm',
      location: 'Baja California, Mexico',
      type: 'Solar PV',
      capacity: '300 MW',
      investment: 300000000,
      riskScore: 2.3,
      riskLevel: 'Low',
      irr: 10.8,
      status: 'Operational',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      riskDetails: {
        sentiment: 'Very Positive',
        marketAnalysis: 'Stable',
        regulatory: 'Favorable',
        technical: 'Proven',
        environmental: 'Low Impact'
      }
    },
    {
      id: 5,
      name: 'Andes Geothermal',
      location: 'Antofagasta, Chile',
      type: 'Geothermal',
      capacity: '100 MW',
      investment: 200000000,
      riskScore: 3.5,
      riskLevel: 'High',
      irr: 13.5,
      status: 'Under Construction',
      image: 'https://images.unsplash.com/photo-1518176258769-f227c798150e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      riskDetails: {
        sentiment: 'Positive',
        marketAnalysis: 'Emerging',
        regulatory: 'Complex',
        technical: 'Innovative',
        environmental: 'Moderate Impact'
      }
    },
    {
      id: 6,
      name: 'Sierra Biomass Plant',
      location: 'Jalisco, Mexico',
      type: 'Biomass',
      capacity: '75 MW',
      investment: 120000000,
      riskScore: 2.5,
      riskLevel: 'Low',
      irr: 9.8,
      status: 'Operational',
      image: 'https://images.unsplash.com/photo-1518176258769-f227c798150e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      riskDetails: {
        sentiment: 'Positive',
        marketAnalysis: 'Stable',
        regulatory: 'Favorable',
        technical: 'Proven',
        environmental: 'Sustainable'
      }
    }
  ];

  return {
    projects
  };
} 