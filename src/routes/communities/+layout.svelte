<script lang="ts">
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';
</script>

<div class="min-h-screen w-full bg-slate-900 flex flex-col">
  <!-- Navigation -->
  <nav class="bg-slate-900 shadow-sm fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <a href="/" class="text-2xl font-bold text-blue-400">EnergyOne</a>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a 
            href="/shop" 
            class="text-slate-300 hover:text-white"
            class:text-white={$page.url.pathname.startsWith('/shop')}
            class:border-b-2={$page.url.pathname.startsWith('/shop')}
            class:border-blue-400={$page.url.pathname.startsWith('/shop')}
            class:pb-1={$page.url.pathname.startsWith('/shop')}
          >
            Projects
          </a>
          <a 
            href="/communities" 
            class="text-white border-b-2 border-blue-400 pb-1"
          >
            Communities
          </a>
          <a 
            href="/messages" 
            class="text-slate-300 hover:text-white"
            class:text-white={$page.url.pathname.startsWith('/messages')}
            class:border-b-2={$page.url.pathname.startsWith('/messages')}
            class:border-blue-400={$page.url.pathname.startsWith('/messages')}
            class:pb-1={$page.url.pathname.startsWith('/messages')}
          >
            Messages
          </a>
          <a 
            href="/contact" 
            class="text-slate-300 hover:text-white"
            class:text-white={$page.url.pathname.startsWith('/contact')}
            class:border-b-2={$page.url.pathname.startsWith('/contact')}
            class:border-blue-400={$page.url.pathname.startsWith('/contact')}
            class:pb-1={$page.url.pathname.startsWith('/contact')}
          >
            Contact
          </a>
          <a
            href="/login"
            class="px-4 py-2 rounded-md text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 shadow-lg"
          >
            Log in
          </a>
        </div>
        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden">
          <button
            type="button"
            class="text-slate-300 hover:text-white"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Main content -->
  <div class="pt-16">
    <slot />
  </div>
</div> 