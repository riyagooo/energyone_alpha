<script lang="ts">
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';
</script>

<div class="min-h-screen w-full bg-slate-900 flex flex-col">
  <!-- Main content -->
  <div>
    <slot />
  </div>
</div> 