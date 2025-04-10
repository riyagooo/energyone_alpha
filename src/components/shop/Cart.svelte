<script lang="ts">
  import { fade } from 'svelte/transition';
  import { formatCurrency } from '$lib/utils/formatters';
  import type { Project } from '$lib/types/project';

  interface CartItem extends Project {
    quantity: number;
  }

  export let cart: CartItem[] = [];
  export let isOpen = false;

  function removeFromCart(projectId: number | string) {
    cart = cart.filter(item => item.id !== projectId);
  }

  function updateQuantity(projectId: number | string, newQuantity: number) {
    cart = cart.map(item => 
      item.id === projectId ? { ...item, quantity: newQuantity } : item
    );
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.investment * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;
</script>

<!-- Cart Button -->
<button
  class="fixed bottom-4 right-4 z-50 p-3 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
  on:click={() => (isOpen = !isOpen)}
  aria-label="Open cart"
>
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
  {#if cart.length > 0}
    <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
      {cart.length}
    </span>
  {/if}
</button>

<!-- Cart Overlay -->
{#if isOpen}
  <button
    type="button"
    class="fixed inset-0 bg-black/20 z-40"
    on:click={() => (isOpen = false)}
    on:keydown={e => e.key === 'Escape' && (isOpen = false)}
    aria-label="Close cart"
  />
{/if}

<!-- Cart Panel -->
<div
  class={`fixed top-0 right-0 z-50 w-full max-w-md h-screen bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
    isOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
  aria-label="Shopping cart"
>
  <div class="flex flex-col h-full">
    <!-- Header -->
    <div class="flex items-center justify-between p-4 border-b border-slate-200">
      <h2 class="text-lg font-semibold text-slate-900">Investment Cart</h2>
      <button
        class="p-2 text-slate-400 hover:text-slate-500 rounded-lg hover:bg-slate-100"
        on:click={() => (isOpen = false)}
        aria-label="Close cart"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Cart Items -->
    <div class="flex-1 overflow-y-auto p-4">
      {#if cart.length === 0}
        <div class="text-center py-8">
          <svg class="mx-auto h-12 w-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h3 class="mt-2 text-sm font-medium text-slate-900">Your cart is empty</h3>
          <p class="mt-1 text-sm text-slate-500">Start adding projects to your investment portfolio</p>
        </div>
      {:else}
        <div class="space-y-4">
          {#each cart as item (item.id)}
            <div
              class="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg"
              transition:fade
            >
              <div class="flex-1 min-w-0">
                <h3 class="text-sm font-medium text-slate-900">{item.name}</h3>
                <p class="text-sm text-slate-500">{item.type} Project</p>
                <div class="mt-2 flex items-center space-x-4">
                  <div class="flex items-center space-x-2">
                    <button
                      class="p-1 text-slate-400 hover:text-slate-500"
                      on:click={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      aria-label="Decrease quantity"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                      </svg>
                    </button>
                    <span class="text-sm text-slate-900">{item.quantity}</span>
                    <button
                      class="p-1 text-slate-400 hover:text-slate-500"
                      on:click={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  <span class="text-sm font-medium text-slate-900">
                    {formatCurrency(item.investment * item.quantity)}
                  </span>
                </div>
              </div>
              <button
                class="p-2 text-slate-400 hover:text-slate-500 rounded-lg hover:bg-slate-100"
                on:click={() => removeFromCart(item.id)}
                aria-label="Remove item"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          {/each}
        </div>
      {/if}
    </div>

    <!-- Footer -->
    <div class="p-4 border-t border-slate-200">
      <div class="space-y-2">
        <div class="flex justify-between text-sm text-slate-600">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div class="flex justify-between text-sm text-slate-600">
          <span>Tax (10%)</span>
          <span>{formatCurrency(tax)}</span>
        </div>
        <div class="flex justify-between text-base font-medium text-slate-900">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>
      <button
        class="mt-4 w-full py-2 px-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        disabled={cart.length === 0}
      >
        Proceed to Checkout
      </button>
    </div>
  </div>
</div> 