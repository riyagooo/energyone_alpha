<script lang="ts">
  import type { Project } from '$lib/types/project';
  
  export let project: Project;
</script>

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