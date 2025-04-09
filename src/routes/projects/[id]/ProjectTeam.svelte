<script>
  export let project;

  const teamMembers = [
    {
      name: 'Project Manager',
      role: 'Senior Project Manager',
      experience: '15+ years in renewable energy',
      image: '/images/team/project-manager.jpg'
    },
    {
      name: 'Technical Lead',
      role: 'Chief Technical Officer',
      experience: '12+ years in solar and wind projects',
      image: '/images/team/technical-lead.jpg'
    },
    {
      name: 'Financial Analyst',
      role: 'Senior Financial Analyst',
      experience: '10+ years in energy project financing',
      image: '/images/team/financial-analyst.jpg'
    },
    {
      name: 'Environmental Specialist',
      role: 'Environmental Impact Consultant',
      experience: '8+ years in environmental assessment',
      image: '/images/team/environmental-specialist.jpg'
    }
  ];
</script>

<div class="bg-white rounded-lg shadow-sm p-6">
  <h2 class="text-lg font-semibold text-slate-900 mb-6">Project Team</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each teamMembers as member}
      <div class="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
        <div class="flex-shrink-0">
          <div class="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center">
            <span class="text-2xl font-semibold text-slate-400">
              {member.name.charAt(0)}
            </span>
          </div>
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="text-sm font-medium text-slate-900">{member.name}</h3>
          <p class="text-sm text-slate-500">{member.role}</p>
          <p class="mt-1 text-xs text-slate-400">{member.experience}</p>
        </div>
      </div>
    {/each}
  </div>

  <div class="mt-6">
    <h3 class="text-sm font-medium text-slate-900 mb-4">Key Responsibilities</h3>
    <ul class="space-y-2">
      <li class="flex items-start">
        <svg class="h-5 w-5 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="ml-2 text-sm text-slate-600">Project planning and execution</span>
      </li>
      <li class="flex items-start">
        <svg class="h-5 w-5 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="ml-2 text-sm text-slate-600">Technical design and implementation</span>
      </li>
      <li class="flex items-start">
        <svg class="h-5 w-5 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="ml-2 text-sm text-slate-600">Financial modeling and analysis</span>
      </li>
      <li class="flex items-start">
        <svg class="h-5 w-5 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="ml-2 text-sm text-slate-600">Environmental impact assessment</span>
      </li>
    </ul>
  </div>
</div> 