<script lang="ts">
  import type { Project } from '$lib/types/project';
  
  export let project: Project;
  
  // Team members with expanded information for display
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Project Director",
      company: project.team?.developer || "Solaris Energy",
      experience: "15+ years in renewable energy development",
      specialty: "Solar PV and hybrid systems",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Miguel Rodriguez",
      role: "Technical Lead",
      company: project.team?.technical || "Renewable Engineering Group",
      experience: "12 years designing utility-scale solar projects",
      specialty: "System optimization and grid integration",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Elena Petrov",
      role: "Finance Director",
      company: project.team?.developer || "Solaris Energy",
      experience: "18 years in renewable energy finance",
      specialty: "Project finance structuring and risk management",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "James Wilson",
      role: "EPC Manager",
      company: project.team?.epc || "Renewable Construction Co",
      experience: "10 years managing large-scale construction projects",
      specialty: "Project scheduling and logistics optimization",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Aisha Mahmoud",
      role: "Environmental Specialist",
      company: project.team?.developer || "Solaris Energy",
      experience: "8 years in environmental impact assessment",
      specialty: "Biodiversity conservation and sustainability planning",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Carlos Mendez",
      role: "O&M Manager",
      company: project.team?.om || "Green Operations Ltd",
      experience: "14 years in solar plant operations",
      specialty: "Performance optimization and predictive maintenance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];
  
  // Key project milestones - derived from project timeline
  const milestones = [
    {
      date: project.timeline?.development || "2020-01",
      event: "Development Start",
      status: "Completed",
      description: "Initial site assessment and feasibility studies"
    },
    {
      date: project.timeline?.construction || "2021-03",
      event: "Construction Start",
      status: "Completed",
      description: "Groundbreaking and initial infrastructure development"
    },
    {
      date: project.timeline?.commissioning || "2022-06",
      event: "Commissioning",
      status: "Completed",
      description: "System testing and grid connection"
    },
    {
      date: project.timeline?.operation || "2022-09",
      event: "Commercial Operation",
      status: "Current",
      description: "Beginning of power generation and revenue"
    }
  ];
  
  // Format date from YYYY-MM to Month Year
  function formatDate(dateString: string): string {
    if (!dateString) return "N/A";
    const [year, month] = dateString.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }
</script>

<div class="bg-slate-800 rounded-lg p-6 mb-6">
  <h2 class="text-xl font-semibold text-slate-300 mb-6">Project Team</h2>
  
  <!-- Team Lead Section -->
  <div class="mb-8">
    <div class="flex flex-col sm:flex-row items-center sm:items-start mb-6">
      <div class="w-24 h-24 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
        <img src={teamMembers[0].image} alt={teamMembers[0].name} class="w-full h-full object-cover" />
      </div>
      <div>
        <h3 class="text-lg font-semibold text-slate-300">{teamMembers[0].name}</h3>
        <p class="text-blue-400 font-medium">{teamMembers[0].role}</p>
        <p class="text-slate-400 text-sm">{teamMembers[0].company}</p>
        <p class="text-slate-400 mt-2">{teamMembers[0].experience}</p>
        <p class="text-slate-400">Specializes in {teamMembers[0].specialty}</p>
        <p class="mt-3 text-slate-400">
          Leading the {project.name} development from initial concept through operation,
          coordinating with all stakeholders to ensure project success.
        </p>
      </div>
    </div>
  </div>
  
  <!-- Core Team Members -->
  <div class="mb-8">
    <h3 class="text-lg font-semibold text-slate-300 mb-4">Core Project Team</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each teamMembers.slice(1) as member}
        <div class="flex items-center">
          <div class="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
            <img src={member.image} alt={member.name} class="w-full h-full object-cover" />
          </div>
          <div>
            <h4 class="text-base font-medium text-slate-300">{member.name}</h4>
            <p class="text-blue-400 text-sm">{member.role}</p>
            <p class="text-slate-400 text-sm">{member.company}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
  
  <!-- Project Organizations -->
  <div class="mb-8">
    <h3 class="text-lg font-semibold text-slate-300 mb-4">Project Organizations</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <p class="text-sm text-slate-400">Developer</p>
        <p class="text-base font-medium text-slate-300">{project.team?.developer || "N/A"}</p>
      </div>
      <div>
        <p class="text-sm text-slate-400">EPC Contractor</p>
        <p class="text-base font-medium text-slate-300">{project.team?.epc || "N/A"}</p>
      </div>
      <div>
        <p class="text-sm text-slate-400">Equipment Supplier</p>
        <p class="text-base font-medium text-slate-300">{project.team?.oem || "N/A"}</p>
      </div>
      <div>
        <p class="text-sm text-slate-400">O&M Provider</p>
        <p class="text-base font-medium text-slate-300">{project.team?.om || "N/A"}</p>
      </div>
      <div>
        <p class="text-sm text-slate-400">Legal Advisor</p>
        <p class="text-base font-medium text-slate-300">{project.team?.legal || "N/A"}</p>
      </div>
      <div>
        <p class="text-sm text-slate-400">Technical Advisor</p>
        <p class="text-base font-medium text-slate-300">{project.team?.technical || "N/A"}</p>
      </div>
    </div>
  </div>
  
  <!-- Key Project Milestones -->
  <div>
    <h3 class="text-lg font-semibold text-slate-300 mb-4">Key Project Milestones</h3>
    <div class="relative">
      <!-- Timeline Line -->
      <div class="absolute left-4 sm:left-6 h-full w-0.5 bg-slate-700"></div>
      
      <!-- Timeline Events -->
      <div class="space-y-8 relative">
        {#each milestones as milestone}
          <div class="flex">
            <!-- Timeline Dot -->
            <div class="absolute left-4 sm:left-6 w-2.5 h-2.5 bg-blue-500 rounded-full transform -translate-x-1/2 mt-1.5"></div>
            
            <!-- Timeline Content -->
            <div class="ml-10 sm:ml-14">
              <div class="flex flex-col sm:flex-row sm:items-center">
                <p class="text-sm font-medium text-blue-400">{formatDate(milestone.date)}</p>
                <p class="sm:ml-4 text-xs text-slate-500">
                  {milestone.status === "Current" ? 
                    "Current Phase" : 
                    milestone.status === "Completed" ? 
                      "Completed" : 
                      "Upcoming"}
                </p>
              </div>
              <h4 class="text-base font-medium text-slate-300 mt-1">{milestone.event}</h4>
              <p class="text-sm text-slate-400 mt-1">{milestone.description}</p>
            </div>
          </div>
        {/each}
        
        <!-- Future Milestone -->
        <div class="flex">
          <div class="absolute left-4 sm:left-6 w-2.5 h-2.5 bg-slate-600 rounded-full transform -translate-x-1/2 mt-1.5"></div>
          <div class="ml-10 sm:ml-14">
            <div class="flex flex-col sm:flex-row sm:items-center">
              <p class="text-sm font-medium text-slate-400">{formatDate(project.timeline?.ppaEnd || "2037-09")}</p>
              <p class="sm:ml-4 text-xs text-slate-500">Projected</p>
            </div>
            <h4 class="text-base font-medium text-slate-300 mt-1">PPA End Date</h4>
            <p class="text-sm text-slate-400 mt-1">End of initial power purchase agreement term</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 