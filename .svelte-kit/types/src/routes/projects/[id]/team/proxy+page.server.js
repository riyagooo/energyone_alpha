// @ts-nocheck
/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export const load = async ({ params, parent }) => {
  try {
    // Get the project data from the parent route instead of fetching
    const parentData = await parent();
    const project = parentData.project;
    
    if (!project) {
      return {
        status: 404,
        error: new Error('Project not found')
      };
    }
    
    return {
      project,
      team: {
        lead: {
          name: "Sarah Chen",
          role: "Project Director",
          company: project.team?.developer || "Solaris Energy",
          experience: "15+ years in renewable energy development",
          specialty: "Solar PV and hybrid systems",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
        },
        members: [
          {
            id: 2,
            name: "Miguel Rodriguez",
            role: "Technical Lead",
            company: project.team?.technical || "Renewable Engineering Group",
            experience: "12 years designing utility-scale solar projects",
            specialty: "System optimization and grid integration",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
            location: "🇪🇸",
            expertise: "Technical"
          },
          {
            id: 3,
            name: "Elena Petrov",
            role: "Finance Director",
            company: project.team?.developer || "Solaris Energy",
            experience: "18 years in renewable energy finance",
            specialty: "Project finance structuring and risk management",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
            location: "🇷🇺",
            expertise: "Finance"
          },
          {
            id: 4,
            name: "James Wilson",
            role: "EPC Manager",
            company: project.team?.epc || "Renewable Construction Co",
            experience: "10 years managing large-scale construction projects",
            specialty: "Project scheduling and logistics optimization",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
            location: "🇬🇧",
            expertise: "EPC"
          },
          {
            id: 5,
            name: "Aisha Mahmoud",
            role: "Environmental Specialist",
            company: project.team?.developer || "Solaris Energy",
            experience: "8 years in environmental impact assessment",
            specialty: "Biodiversity conservation and sustainability planning",
            image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
            location: "🇪🇬",
            expertise: "Environment"
          },
          {
            id: 6,
            name: "Carlos Mendez",
            role: "O&M Manager",
            company: project.team?.om || "Green Operations Ltd",
            experience: "14 years in solar plant operations",
            specialty: "Performance optimization and predictive maintenance",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
            location: "🇲🇽",
            expertise: "O&M"
          }
        ]
      }
    };
  } catch (error) {
    console.error('Error loading project team data:', error);
    return {
      status: 500,
      error: new Error('An error occurred while loading the project team')
    };
  }
}; 