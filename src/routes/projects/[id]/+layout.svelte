<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="flex flex-col min-h-screen bg-slate-900">
  <slot />
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #0f172a; /* bg-slate-900 */
    min-height: 100vh;
  }
</style> 