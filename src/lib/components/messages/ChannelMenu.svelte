<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { slide } from 'svelte/transition';

  let dropdownOpen = false;
  let trigger: HTMLElement;
  let dropdown: HTMLElement;

  // close on click outside
  const clickHandler = (event: MouseEvent) => {
    const target = event.target as Node;
    if (!dropdownOpen || dropdown?.contains(target) || trigger?.contains(target)) return;
    dropdownOpen = false;
  };

  // close if the esc key is pressed
  const keyHandler = (event: KeyboardEvent) => {
    if (!dropdownOpen || event.key !== 'Escape') return;
    dropdownOpen = false;
  };

  onMount(() => {
    document.addEventListener('click', clickHandler);
    document.addEventListener('keydown', keyHandler);
  });

  onDestroy(() => {
    document.removeEventListener('click', clickHandler);
    document.removeEventListener('keydown', keyHandler);
  });
</script>

<div class="relative">
  <button
    bind:this={trigger}
    class="grow flex items-center truncate"
    aria-haspopup="true"
    on:click|preventDefault={() => dropdownOpen = !dropdownOpen}
    aria-expanded={dropdownOpen}
  >
    <img class="w-8 h-8 rounded-full mr-2" src="/images/user-avatar-32.png" width="32" height="32" alt="Group 01" />
    <div class="truncate">
      <span class="font-semibold text-white"><span class="text-blue-400">#</span> general</span>
    </div>
    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
    </svg>
  </button>
  
  {#if dropdownOpen}
    <div 
      bind:this={dropdown}
      class="origin-top-right z-10 absolute top-full left-0 min-w-60 bg-slate-800 border border-slate-700 py-1.5 rounded shadow-lg overflow-hidden mt-1"
      transition:slide={{ duration: 200 }}
    >
      <ul>
        <li>
          <a class="font-medium text-sm text-slate-300 hover:text-slate-200 block py-1.5 px-3" href="#0" on:click={() => dropdownOpen = false}>
            <div class="flex items-center justify-between">
              <div class="grow flex items-center truncate">
                <img class="w-7 h-7 rounded-full mr-2" src="/images/channel-01.png" width="28" height="28" alt="Channel 01" />
                <div class="truncate">#Marketing</div>
              </div>
              <svg class="w-3 h-3 shrink-0 fill-current text-blue-500 ml-1" viewBox="0 0 12 12">
                <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a class="font-medium text-sm text-slate-300 hover:text-slate-200 block py-1.5 px-3" href="#0" on:click={() => dropdownOpen = false}>
            <div class="flex items-center justify-between">
              <div class="grow flex items-center truncate">
                <img class="w-7 h-7 rounded-full mr-2" src="/images/channel-02.png" width="28" height="28" alt="Channel 02" />
                <div class="truncate">#Developing</div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="font-medium text-sm text-slate-300 hover:text-slate-200 block py-1.5 px-3" href="#0" on:click={() => dropdownOpen = false}>
            <div class="flex items-center justify-between">
              <div class="grow flex items-center truncate">
                <img class="w-7 h-7 rounded-full mr-2" src="/images/channel-03.png" width="28" height="28" alt="Channel 03" />
                <div class="truncate">#ProductSupport</div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  {/if}
</div> 