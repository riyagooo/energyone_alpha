<script lang="ts">
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';
</script>

<div class="min-h-screen w-full bg-slate-900 flex flex-col">
  <div class="flex h-[calc(100dvh-64px)] mt-16 overflow-hidden">
    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <main class="grow">
        <slot />
      </main>
    </div>
  </div>
</div> 