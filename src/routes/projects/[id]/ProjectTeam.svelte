<script>
  /** @type {import('$lib/types/project').Project} */
  export let project;

  const teamMembers = [
    {
      name: project.team.developer,
      role: 'Developer',
      description: 'Lead project developer responsible for overall project execution.'
    },
    {
      name: project.team.epc,
      role: 'EPC Contractor',
      description: 'Engineering, Procurement, and Construction services.'
    },
    {
      name: project.team.oem,
      role: 'Equipment Manufacturer',
      description: 'Primary equipment supplier and technical support.'
    },
    {
      name: project.team.om,
      role: 'O&M Provider',
      description: 'Operations and maintenance services provider.'
    },
    {
      name: project.team.legal,
      role: 'Legal Advisor',
      description: 'Legal and regulatory compliance support.'
    },
    {
      name: project.team.technical,
      role: 'Technical Advisor',
      description: 'Technical due diligence and engineering support.'
    }
  ];
</script>

<div class="bg-white shadow sm:rounded-lg">
  <div class="px-4 py-5 sm:p-6">
    <h3 class="text-base font-semibold leading-6 text-gray-900">Project Team</h3>
    <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each teamMembers as member}
        <div class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
          <div class="min-w-0 flex-1">
            <span class="absolute inset-0" aria-hidden="true" />
            <p class="text-sm font-medium text-gray-900">{member.name}</p>
            <p class="truncate text-sm text-gray-500">{member.role}</p>
            <p class="mt-1 text-sm text-gray-500">{member.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div> 