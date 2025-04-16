<script>
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	onNavigate((navigation) => {
		// Check if the browser supports the View Transitions API
		if (!document.startViewTransition) return;

		// Return a promise to delay navigation until the transition starts
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve(); // Allow the navigation to proceed
				await navigation.complete; // Wait for the navigation to complete
			});
		});
	});

	$: pathname = $page.url.pathname;
</script>

<header class="bg-slate-800 shadow-lg">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between h-16">
			<div class="flex">
				<div class="flex-shrink-0 flex items-center">
					<a href="/" class="text-xl font-bold text-white">EnergyOne</a>
				</div>
				<nav class="ml-6 flex space-x-8">
					<a href="/" class={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${pathname === '/' ? 'border-blue-500 text-white' : 'border-transparent text-slate-300 hover:border-slate-300 hover:text-white'}`}>
						Home
					</a>
					<a href="/shop" class={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${pathname === '/shop' || pathname.startsWith('/shop/') ? 'border-blue-500 text-white' : 'border-transparent text-slate-300 hover:border-slate-300 hover:text-white'}`}>
						Projects
					</a>
					<a href="/portfolio-dashboard" class={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${pathname === '/portfolio-dashboard' ? 'border-blue-500 text-white' : 'border-transparent text-slate-300 hover:border-slate-300 hover:text-white'}`}>
						Portfolio
					</a>
					<a href="/communities" class={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${pathname === '/communities' || pathname.startsWith('/communities/') ? 'border-blue-500 text-white' : 'border-transparent text-slate-300 hover:border-slate-300 hover:text-white'}`}>
						Communities
					</a>
					<a href="/messages" class={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${pathname === '/messages' || pathname.startsWith('/messages/') ? 'border-blue-500 text-white' : 'border-transparent text-slate-300 hover:border-slate-300 hover:text-white'}`}>
						Messages
					</a>
					<a href="/contact" class={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${pathname === '/contact' ? 'border-blue-500 text-white' : 'border-transparent text-slate-300 hover:border-slate-300 hover:text-white'}`}>
						Contact
					</a>
				</nav>
			</div>
			<div class="flex items-center">
				<a href="/login" class="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700">
					Log in
				</a>
				<a href="/signup" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500">
					Sign up
				</a>
			</div>
		</div>
	</div>
</header>

<main>
	<slot />
</main>

<footer class="bg-slate-800 mt-auto">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
		<div class="text-center text-slate-400 text-sm">
			&copy; 2025 EnergyOne. All rights reserved.
		</div>
	</div>
</footer>

<style>
    @view-transition { navigation: auto; }
</style>
