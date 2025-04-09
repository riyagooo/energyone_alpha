<script>
  export let project;

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  }

  const milestones = [
    { date: project.timeline.development, title: 'Development Start', description: 'Project development initiated' },
    { date: project.timeline.construction, title: 'Construction Start', description: 'Construction activities commenced' },
    { date: project.timeline.commissioning, title: 'Commissioning', description: 'Project commissioning and testing' },
    { date: project.timeline.operation, title: 'Commercial Operation', description: 'Project reached commercial operation' },
    { date: project.timeline.ppaStart, title: 'PPA Start', description: 'Power Purchase Agreement commenced' },
    { date: project.timeline.ppaEnd, title: 'PPA End', description: 'Power Purchase Agreement expires' }
  ];
</script>

<div class="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
  <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
    <h2 class="font-semibold text-slate-800 dark:text-slate-100">Project Timeline</h2>
  </header>

  <div class="px-5 py-4">
    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>

      <!-- Timeline items -->
      <div class="space-y-6">
        {#each milestones as milestone, i}
          <div class="relative pl-12">
            <!-- Timeline dot -->
            <div class="absolute left-3 top-1 w-3 h-3 rounded-full bg-indigo-500 border-2 border-white dark:border-slate-800"></div>

            <!-- Timeline content -->
            <div class="bg-slate-50 dark:bg-slate-700/50 rounded p-4">
              <div class="flex items-center justify-between mb-1">
                <h3 class="text-sm font-medium text-slate-800 dark:text-slate-100">
                  {milestone.title}
                </h3>
                <span class="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {formatDate(milestone.date)}
                </span>
              </div>
              <p class="text-sm text-slate-500 dark:text-slate-400">
                {milestone.description}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>