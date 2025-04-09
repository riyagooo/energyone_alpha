<script>
	import { page } from '$app/stores';
	let showMenu = false;
</script>

<nav class="bg-white shadow">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<div class="flex">
				<a href="/" class="flex flex-shrink-0 items-center">
					<img class="h-8 w-auto" src="/logo.svg" alt="EnergyOne Logo" />
				</a>
				<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
					<a
						href="/shop"
						class="inline-flex items-center border-b-2 {$page.url.pathname === '/shop'
							? 'border-indigo-500 text-gray-900'
							: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} px-1 pt-1 text-sm font-medium"
					>
						Projects
					</a>
					<a
						href="/about"
						class="inline-flex items-center border-b-2 {$page.url.pathname === '/about'
							? 'border-indigo-500 text-gray-900'
							: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} px-1 pt-1 text-sm font-medium"
					>
						About
					</a>
					<a
						href="/contact"
						class="inline-flex items-center border-b-2 {$page.url.pathname === '/contact'
							? 'border-indigo-500 text-gray-900'
							: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} px-1 pt-1 text-sm font-medium"
					>
						Contact
					</a>
				</div>
			</div>
			<div class="hidden sm:ml-6 sm:flex sm:items-center">
				<a
					href="/login"
					class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Log in
				</a>
			</div>
			<div class="-mr-2 flex items-center sm:hidden">
				<!-- Mobile menu button -->
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					aria-controls="mobile-menu"
					aria-expanded={showMenu}
					on:click={() => (showMenu = !showMenu)}
				>
					<span class="sr-only">Open main menu</span>
					{#if !showMenu}
						<svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					{:else}
						<svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if showMenu}
		<div class="sm:hidden" id="mobile-menu">
			<div class="space-y-1 pb-3 pt-2">
				<a
					href="/shop"
					class="block border-l-4 {$page.url.pathname === '/shop'
						? 'border-indigo-500 bg-indigo-50 text-indigo-700'
						: 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'} py-2 pl-3 pr-4 text-base font-medium"
				>
					Projects
				</a>
				<a
					href="/about"
					class="block border-l-4 {$page.url.pathname === '/about'
						? 'border-indigo-500 bg-indigo-50 text-indigo-700'
						: 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'} py-2 pl-3 pr-4 text-base font-medium"
				>
					About
				</a>
				<a
					href="/contact"
					class="block border-l-4 {$page.url.pathname === '/contact'
						? 'border-indigo-500 bg-indigo-50 text-indigo-700'
						: 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'} py-2 pl-3 pr-4 text-base font-medium"
				>
					Contact
				</a>
			</div>
			<div class="border-t border-gray-200 pb-3 pt-4">
				<a
					href="/login"
					class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
				>
					Log in
				</a>
			</div>
		</div>
	{/if}
</nav>