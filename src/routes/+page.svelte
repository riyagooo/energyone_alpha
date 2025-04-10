<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import Globe from '../components/Globe.svelte';

	let isMenuOpen = false;
	let isScrolled = false;

	onMount(() => {
		window.addEventListener('scroll', () => {
			isScrolled = window.scrollY > 0;
		});
	});
</script>

<div class="min-h-screen min-h-[calc(var(--vh,1vh)*100)] w-full bg-slate-900 flex flex-col">
	<!-- Navigation -->
	<nav
		class={`fixed w-full z-50 transition-all duration-200 ${
			isScrolled ? 'bg-slate-900 shadow-sm' : 'bg-transparent'
		}`}
	>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16">
				<div class="flex">
					<div class="flex-shrink-0 flex items-center">
						<a href="/" class="text-2xl font-bold text-blue-400">EnergyOne</a>
					</div>
				</div>
				<div class="hidden md:flex items-center space-x-8">
					<a href="/shop" class="text-slate-300 hover:text-white">Projects</a>
					<a href="#features" class="text-slate-300 hover:text-white">Communities</a>
					<a href="/messages" class="text-slate-300 hover:text-white">Messages</a>
					<a href="/contact" class="text-slate-300 hover:text-white">Contact</a>
					<a
						href="/login"
						class="px-4 py-2 rounded-md text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 shadow-lg"
					>
						Log in
					</a>
				</div>
				<div class="flex items-center md:hidden">
					<button
						type="button"
						class="text-slate-300 hover:text-white"
						on:click={() => (isMenuOpen = !isMenuOpen)}
					>
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							{#if isMenuOpen}
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							{:else}
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							{/if}
						</svg>
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile menu -->
		{#if isMenuOpen}
			<div
				class="md:hidden"
				transition:fade={{ duration: 200, easing: cubicOut }}
			>
				<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
					<a href="/shop" class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white">Projects</a>
					<a href="#features" class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white">Communities</a>
					<a href="/messages" class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white">Messages</a>
					<a href="/contact" class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white">Contact</a>
					<a
						href="/login"
						class="block px-3 py-2 rounded-md text-base font-medium text-center text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 shadow-lg"
					>
						Log in
					</a>
				</div>
			</div>
		{/if}
	</nav>

	<!-- Hero Section -->
	<section class="py-8 sm:py-12 bg-gradient-to-b from-gray-900 to-slate-900">
		<div class="max-w-6xl mx-auto px-4 sm:px-6">
			<div class="relative">
				<!-- Background shape with neon glow -->
				<div class="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 pointer-events-none -z-10 rounded-xl" aria-hidden="true"></div>
				<!-- Glow effect -->
				<div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
					<div class="w-[300px] sm:w-[500px] h-[200px] sm:h-[300px] bg-blue-600/20 blur-[100px] -z-10"></div>
				</div>

				<div class="py-6 px-4 sm:px-6 rounded-xl">
					<!-- Hero content at top -->
					<div class="max-w-3xl mx-auto text-center mb-8">
						<h1 class="text-3xl md:text-5xl font-bold text-white mb-4">
							EnergyOne: Power Your Investment Portfolio
						</h1>
						<div class="max-w-2xl mx-auto mb-6">
							<p class="text-lg text-slate-300">Join thousands of investors funding the renewable energy revolution with our transparent, data-driven platform.</p>
						</div>
						<div class="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
							<a href="/signup" class="btn text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 shadow-lg shadow-blue-500/20 rounded-full px-6 py-2 sm:px-8 sm:py-3 font-semibold w-full sm:w-auto">
								Create Your Account
							</a>
							<a href="/shop" class="btn text-slate-300 bg-slate-700/80 hover:bg-slate-600 border-slate-600 rounded-full px-6 py-2 sm:px-8 sm:py-3 font-semibold w-full sm:w-auto">
								Browse Projects
							</a>
						</div>
					</div>

					<!-- Earth Visualization with glowing box -->
					<div class="relative mx-auto earth-viz-container mb-6">
						<div class="flex justify-center">
							<div class="earth-container">
								<Globe />
							</div>
						</div>
					</div>
					
					<!-- Compact section header below Earth -->
					<div class="max-w-3xl mx-auto text-center mb-5">
						<div class="inline-flex text-sm font-semibold py-1 px-3 text-blue-200 bg-blue-900/50 rounded-full mb-2">Global Impact</div>
						<h2 class="text-2xl sm:text-3xl font-bold text-white mb-2">Renewable Energy Around the World</h2>
						<p class="text-base sm:text-lg text-slate-400">Explore the global impact of renewable energy projects and discover investment opportunities across continents.</p>
					</div>

					<!-- Stats in a grid for better mobile layout -->
					<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
						<div class="text-center px-2 py-3 bg-slate-800/50 rounded-lg">
							<div class="text-xl sm:text-2xl font-bold text-blue-400 mb-1">20</div>
							<div class="text-sm text-slate-400">Energy Projects</div>
						</div>
						<div class="text-center px-2 py-3 bg-slate-800/50 rounded-lg">
							<div class="text-xl sm:text-2xl font-bold text-blue-400 mb-1">13</div>
							<div class="text-sm text-slate-400">Countries</div>
						</div>
						<div class="text-center px-2 py-3 bg-slate-800/50 rounded-lg">
							<div class="text-xl sm:text-2xl font-bold text-blue-400 mb-1">$280M</div>
							<div class="text-sm text-slate-400">Investments</div>
						</div>
						<div class="text-center px-2 py-3 bg-slate-800/50 rounded-lg">
							<div class="text-xl sm:text-2xl font-bold text-blue-400 mb-1">550K</div>
							<div class="text-sm text-slate-400">Tons CO₂ Offset</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<div id="features" class="py-16 bg-slate-900 relative overflow-hidden">
		<!-- Background decorative elements -->
		<div class="absolute top-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
		<div class="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
		
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
			<div class="lg:text-center mb-16">
				<div class="inline-flex text-sm font-semibold py-1 px-3 text-blue-200 bg-blue-900/30 rounded-full mb-3">Investment Solutions</div>
				<h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
					Why Choose Our Platform
				</h2>
				<div class="max-w-2xl mx-auto">
					<p class="text-xl text-slate-400 leading-relaxed">
						We provide innovative solutions to unlock renewable energy investment opportunities across emerging markets
					</p>
				</div>
			</div>

			<div class="space-y-24">
				<!-- Smart Data -->
				<div class="flex flex-col md:flex-row md:items-center">
					<div class="md:w-1/2 mb-8 md:mb-0 md:pr-12">
						<div class="bg-gradient-to-br from-blue-600/20 to-blue-600/5 p-4 inline-flex rounded-xl mb-6">
							<div class="h-16 w-16 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
								<svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
								</svg>
							</div>
						</div>
						<h3 class="text-2xl font-bold text-white mb-3">Smart Data</h3>
						<div class="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-6"></div>
						<p class="text-slate-400 text-lg mb-6">
							Unlock granular project insights across emerging markets. Our proprietary data engine transforms complex information into actionable intelligence to spot opportunities.
						</p>
					</div>
					<div class="md:w-1/2 bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
						<ul class="space-y-4">
							<li class="flex items-start">
								<div class="flex-shrink-0 h-10 w-10 rounded-full bg-blue-900/30 flex items-center justify-center mr-4">
									<svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
									</svg>
								</div>
								<div>
									<h4 class="text-lg font-medium text-slate-200 mb-1">Curated clean energy project database</h4>
									<p class="text-slate-400">Access verified data on projects across solar, wind, hydro, and other renewable technologies</p>
								</div>
							</li>
							<li class="flex items-start">
								<div class="flex-shrink-0 h-10 w-10 rounded-full bg-blue-900/30 flex items-center justify-center mr-4">
									<svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
									</svg>
								</div>
								<div>
									<h4 class="text-lg font-medium text-slate-200 mb-1">Geopolitical and policy landscape insights</h4>
									<p class="text-slate-400">Stay informed on regulatory frameworks and incentive programs by region</p>
								</div>
							</li>
							<li class="flex items-start">
								<div class="flex-shrink-0 h-10 w-10 rounded-full bg-blue-900/30 flex items-center justify-center mr-4">
									<svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
									</svg>
								</div>
								<div>
									<h4 class="text-lg font-medium text-slate-200 mb-1">ESG and developer credibility scoring</h4>
									<p class="text-slate-400">Evaluate project developers based on their track record and sustainability metrics</p>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<!-- Risk Intelligence -->
				<div class="flex flex-col md:flex-row-reverse md:items-center">
					<div class="md:w-1/2 mb-8 md:mb-0 md:pl-12">
						<div class="bg-gradient-to-br from-amber-600/20 to-amber-600/5 p-4 inline-flex rounded-xl mb-6">
							<div class="h-16 w-16 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20">
								<svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
								</svg>
							</div>
						</div>
						<h3 class="text-2xl font-bold text-white mb-3">Risk Intelligence</h3>
						<div class="h-1 w-20 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-6"></div>
						<p class="text-slate-400 text-lg mb-6">
							Model risk where others guess. Our AI-powered assessment analyzes regulatory, market, and project factors to provide dynamic cost-of-capital estimates.
						</p>
					</div>
					<div class="md:w-1/2 bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
						<ul class="space-y-4">
							<li class="flex items-start">
								<div class="flex-shrink-0 h-10 w-10 rounded-full bg-amber-900/30 flex items-center justify-center mr-4">
									<svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
									</svg>
								</div>
								<div>
									<h4 class="text-lg font-medium text-slate-200 mb-1">AI-driven WACC modeling</h4>
									<p class="text-slate-400">Precision calculation of weighted average cost of capital specific to each project</p>
								</div>
							</li>
							<li class="flex items-start">
								<div class="flex-shrink-0 h-10 w-10 rounded-full bg-amber-900/30 flex items-center justify-center mr-4">
									<svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
									</svg>
								</div>
								<div>
									<h4 class="text-lg font-medium text-slate-200 mb-1">FX & political risk integration</h4>
									<p class="text-slate-400">Comprehensive analysis of currency fluctuations and political stability factors</p>
								</div>
							</li>
							<li class="flex items-start">
								<div class="flex-shrink-0 h-10 w-10 rounded-full bg-amber-900/30 flex items-center justify-center mr-4">
									<svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
									</svg>
								</div>
								<div>
									<h4 class="text-lg font-medium text-slate-200 mb-1">Personalized mitigation strategies</h4>
									<p class="text-slate-400">Tailored approaches to address project-specific risks and improve investment security</p>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<!-- Brokered Connections -->
				<div class="flex flex-col md:flex-row md:items-center">
					<div class="md:w-1/2 mb-8 md:mb-0 md:pr-12">
						<div class="bg-gradient-to-br from-green-600/20 to-green-600/5 p-4 inline-flex rounded-xl mb-6">
							<div class="h-16 w-16 rounded-xl bg-gradient-to-tr from-green-600 to-green-400 flex items-center justify-center shadow-lg shadow-green-500/20">
								<svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
								</svg>
							</div>
						</div>
						<h3 class="text-2xl font-bold text-white mb-3">Brokered Connections</h3>
						<div class="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-6"></div>
						<p class="text-slate-400 text-lg mb-6">
							Where finance meets projects. We connect investors and developers directly while providing transparent communication and impact tracking.
						</p>
					</div>
					<div class="md:w-1/2 bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
						<ul class="space-y-4">
							<li class="flex items-start">
								<div class="flex-shrink-0 h-10 w-10 rounded-full bg-green-900/30 flex items-center justify-center mr-4">
									<svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
									</svg>
								</div>
								<div>
									<h4 class="text-lg font-medium text-slate-200 mb-1">Investor-developer matchmaking</h4>
									<p class="text-slate-400">Algorithm-driven partnerships based on investment preferences and project attributes</p>
								</div>
							</li>
							<li class="flex items-start">
								<div class="flex-shrink-0 h-10 w-10 rounded-full bg-green-900/30 flex items-center justify-center mr-4">
									<svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
									</svg>
								</div>
								<div>
									<h4 class="text-lg font-medium text-slate-200 mb-1">Real-time impact & generation data</h4>
									<p class="text-slate-400">Live monitoring of energy production and carbon offset metrics for your investments</p>
								</div>
							</li>
							<li class="flex items-start">
								<div class="flex-shrink-0 h-10 w-10 rounded-full bg-green-900/30 flex items-center justify-center mr-4">
									<svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
									</svg>
								</div>
								<div>
									<h4 class="text-lg font-medium text-slate-200 mb-1">End-to-end due diligence support</h4>
									<p class="text-slate-400">Comprehensive validation and verification processes to ensure investment quality</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Investment Options Section -->
	<section class="bg-slate-900">
		<div class="max-w-6xl mx-auto px-4 sm:px-6">
			<div class="py-12 md:py-20 border-t border-slate-700">
				
				<!-- Section header -->
				<div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
					<div class="inline-flex text-sm font-semibold py-1 px-4 m-2 text-amber-200 bg-amber-900/50 rounded-full mb-4">Investment Opportunities</div>
					<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Impact Investment</h2>
					<p class="text-xl text-slate-400">Diversify your portfolio with sustainable energy projects at different scales and investment levels.</p>
				</div>

				<!-- Pricing tables -->
				<div class="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
					
					<!-- Solar Energy Investment -->
					<div class="relative flex flex-col h-full p-6 bg-slate-800 rounded-xl shadow-lg">
						<div class="mb-4">
							<div class="text-emerald-400 bg-emerald-900/50 rounded-full w-12 h-12 flex items-center justify-center mb-3">
								<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 17.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V18a.75.75 0 0 1 .75-.75Zm0-13.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 1 .75-.75Zm6.44 2.03a.75.75 0 0 1 0 1.06l-1.591 1.591a.75.75 0 0 1-1.06-1.06l1.591-1.591a.75.75 0 0 1 1.06 0ZM7.197 14.384a.75.75 0 0 0 1.06 1.06l-1.591 1.591a.75.75 0 0 1-1.06-1.06l1.591-1.591ZM18 12a.75.75 0 0 1 .75.75h2.25a.75.75 0 0 1 0 1.5H18.75A.75.75 0 0 1 18 15a.75.75 0 0 1-.75-.75H3a.75.75 0 0 1 0-1.5h14.25A.75.75 0 0 1 18 12Zm-6 0a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
								</svg>
							</div>
							<h3 class="text-xl font-bold mb-2 text-white">Solar Energy</h3>
							<div class="text-lg text-slate-300 mb-3">Start investing in photovoltaic solar farms and distributed solar projects.</div>
							<div class="font-bold text-slate-200 mb-4">From $1M</div>
							<div class="text-slate-400 mb-8">Invest in large-scale solar farms or distributed solar projects that power homes and businesses.</div>
							<div class="flex items-center mb-6">
								<svg class="w-4 h-4 fill-current text-emerald-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.707 3.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L6 10.586l7.293-7.293a1 1 0 0 1 1.414 0Z" />
								</svg>
								<div class="text-slate-300">Expected ROI: 6-8%</div>
							</div>
							<div class="flex items-center mb-6">
								<svg class="w-4 h-4 fill-current text-emerald-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.707 3.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L6 10.586l7.293-7.293a1 1 0 0 1 1.414 0Z" />
								</svg>
								<div class="text-slate-300">CO₂ Offset: High</div>
							</div>
							<div class="flex items-center mb-6">
								<svg class="w-4 h-4 fill-current text-emerald-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.707 3.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L6 10.586l7.293-7.293a1 1 0 0 1 1.414 0Z" />
								</svg>
								<div class="text-slate-300">Term: 5-10 years</div>
							</div>
						</div>
						<div class="mt-auto">
							<a class="inline-flex items-center justify-center rounded-lg border border-transparent font-semibold text-sm px-4 py-2.5 transition duration-150 ease-in-out text-white bg-emerald-600 hover:bg-emerald-700 w-full" href="/shop">Learn More</a>
						</div>
					</div>

					<!-- Wind Energy Investment -->
					<div class="relative flex flex-col h-full p-6 bg-slate-800 shadow-xl rounded-xl">
						<div class="absolute top-0 right-0 mr-6 -mt-4">
							<div class="inline-flex text-sm font-semibold py-1 px-3 mt-px text-emerald-200 bg-emerald-900/50 rounded-full">Most Popular</div>
						</div>
						<div class="mb-4">
							<div class="text-blue-400 bg-blue-900/50 rounded-full w-12 h-12 flex items-center justify-center mb-3">
								<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 4.5C7.582 4.5 4.5 7.582 4.5 12a7.5 7.5 0 0 0 9.566 7.227A18.998 18.998 0 0 1 7.5 14.46l2.46-.92a16.44 16.44 0 0 0 4.5 1.257v-1.04a4.5 4.5 0 1 1 1.5 0v.962c2.074-.21 4.03-.86 5.76-1.817L19.5 13.8a18.724 18.724 0 0 1-5.645 3.42A7.499 7.499 0 0 0 12 4.5Z" />
								</svg>
							</div>
							<h3 class="text-xl font-bold mb-2 text-white">Wind Energy</h3>
							<div class="text-lg text-slate-300 mb-3">Finance modern wind farms in high-yield locations around the globe.</div>
							<div class="font-bold text-slate-200 mb-4">From $2.5M</div>
							<div class="text-slate-400 mb-8">Invest in onshore and offshore wind energy projects with long-term power purchase agreements.</div>
							<div class="flex items-center mb-6">
								<svg class="w-4 h-4 fill-current text-emerald-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.707 3.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L6 10.586l7.293-7.293a1 1 0 0 1 1.414 0Z" />
								</svg>
								<div class="text-slate-300">Expected ROI: 7-10%</div>
							</div>
							<div class="flex items-center mb-6">
								<svg class="w-4 h-4 fill-current text-emerald-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.707 3.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L6 10.586l7.293-7.293a1 1 0 0 1 1.414 0Z" />
								</svg>
								<div class="text-slate-300">CO₂ Offset: Very High</div>
							</div>
							<div class="flex items-center mb-6">
								<svg class="w-4 h-4 fill-current text-emerald-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.707 3.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L6 10.586l7.293-7.293a1 1 0 0 1 1.414 0Z" />
								</svg>
								<div class="text-slate-300">Term: 8-15 years</div>
							</div>
						</div>
						<div class="mt-auto">
							<a class="inline-flex items-center justify-center rounded-lg border border-transparent font-semibold text-sm px-4 py-2.5 transition duration-150 ease-in-out text-white bg-blue-600 hover:bg-blue-700 w-full" href="/shop">Learn More</a>
						</div>
					</div>

					<!-- Energy Storage Investment -->
					<div class="relative flex flex-col h-full p-6 bg-slate-800 rounded-xl shadow-lg">
						<div class="mb-4">
							<div class="text-indigo-400 bg-indigo-900/50 rounded-full w-12 h-12 flex items-center justify-center mb-3">
								<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M6.22 5.78a.75.75 0 0 1 1.06-1.06l1.97 1.97v5.56c0 .41.34.75.75.75s.75-.34.75-.75V6.69l1.97-1.97a.75.75 0 0 1 1.06 1.06L12.75 6.8v1.79H3v-.5a8.249 8.249 0 0 1 2.26-5.69l.96-.9Zm8.28 4.56a.75.75 0 0 0-.75.75v5.38l-1.97 1.97a.75.75 0 1 0 1.06 1.06l1.97-1.97h5.56c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-5.56l1.97-1.97a.75.75 0 0 0-1.06-1.06l-1.97 1.97v-4.63c0-.41-.34-.75-.75-.75Z" />
								</svg>
							</div>
							<h3 class="text-xl font-bold mb-2 text-white">Energy Storage</h3>
							<div class="text-lg text-slate-300 mb-3">Support grid-scale battery storage solutions and innovative technologies.</div>
							<div class="font-bold text-slate-200 mb-4">From $3M</div>
							<div class="text-slate-400 mb-8">Invest in cutting-edge storage technologies that enable greater renewable energy integration.</div>
							<div class="flex items-center mb-6">
								<svg class="w-4 h-4 fill-current text-emerald-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.707 3.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L6 10.586l7.293-7.293a1 1 0 0 1 1.414 0Z" />
								</svg>
								<div class="text-slate-300">Expected ROI: 8-12%</div>
							</div>
							<div class="flex items-center mb-6">
								<svg class="w-4 h-4 fill-current text-emerald-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.707 3.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L6 10.586l7.293-7.293a1 1 0 0 1 1.414 0Z" />
								</svg>
								<div class="text-slate-300">CO₂ Offset: Medium</div>
							</div>
							<div class="flex items-center mb-6">
								<svg class="w-4 h-4 fill-current text-emerald-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.707 3.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L6 10.586l7.293-7.293a1 1 0 0 1 1.414 0Z" />
								</svg>
								<div class="text-slate-300">Term: 3-7 years</div>
							</div>
						</div>
						<div class="mt-auto">
							<a class="inline-flex items-center justify-center rounded-lg border border-transparent font-semibold text-sm px-4 py-2.5 transition duration-150 ease-in-out text-white bg-indigo-600 hover:bg-indigo-700 w-full" href="/shop">Learn More</a>
						</div>
					</div>
				</div>

				<!-- Call to action -->
				<div class="text-center pt-12 md:pt-16">
					<div class="font-medium text-white mb-2">Need more information?</div>
					<div class="text-slate-400 mb-6">Have questions about investment options and fund management?</div>
					<a class="inline-flex items-center justify-center rounded-lg border border-transparent font-semibold text-sm px-4 py-2.5 transition duration-150 ease-in-out text-white bg-blue-600 hover:bg-blue-700" href="/contact">Contact an Investment Advisor</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Testimonials Section -->
	<div id="testimonials" class="bg-slate-800 py-16">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="lg:text-center mb-12">
				<h2 class="text-base text-blue-400 font-semibold tracking-wide uppercase">Testimonials</h2>
				<p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-300 sm:text-4xl">
					What Our Investors Say
				</p>
			</div>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				<!-- Testimonial 1 -->
				<div class="bg-slate-900 p-6 rounded-lg shadow-sm">
					<div class="flex items-center mb-4">
						<div class="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center">
							<span class="text-blue-400 font-medium">JD</span>
						</div>
						<div class="ml-4">
							<h4 class="text-lg font-medium text-slate-300">John D.</h4>
							<p class="text-sm text-slate-400">Institutional Investor</p>
						</div>
					</div>
					<p class="text-slate-400">
						"As someone who wanted to invest in infrastructure but was overwhelmed by regulatory complexity, this platform has been a game-changer. The risk assessment tools and direct project access have made it possible to confidently invest in emerging markets."
					</p>
				</div>

				<!-- Testimonial 2 -->
				<div class="bg-slate-900 p-6 rounded-lg shadow-sm">
					<div class="flex items-center mb-4">
						<div class="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center">
							<span class="text-blue-400 font-medium">SR</span>
						</div>
						<div class="ml-4">
							<h4 class="text-lg font-medium text-slate-300">Sarah R.</h4>
							<p class="text-sm text-slate-400">Impact Investor</p>
						</div>
					</div>
					<p class="text-slate-400">
						"The ability to track both financial returns and environmental impact is exactly what I was looking for. I can see exactly how my investments are contributing to carbon reduction while generating stable returns."
					</p>
				</div>

				<!-- Testimonial 3 -->
				<div class="bg-slate-900 p-6 rounded-lg shadow-sm">
					<div class="flex items-center mb-4">
						<div class="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center">
							<span class="text-blue-400 font-medium">MK</span>
						</div>
						<div class="ml-4">
							<h4 class="text-lg font-medium text-slate-300">Michael K.</h4>
							<p class="text-sm text-slate-400">Private Equity</p>
						</div>
					</div>
					<p class="text-slate-400">
						"The platform's AI-driven risk assessment has transformed how we evaluate renewable energy projects. It's like having a team of experts analyzing every aspect of potential investments."
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- CTA Section -->
	<div class="bg-slate-800">
		<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
			<h2 class="text-3xl font-extrabold tracking-tight text-slate-300 sm:text-4xl">
				<span class="block">Ready to invest in sustainable energy?</span>
				<span class="block text-blue-400">Start exploring projects today.</span>
			</h2>
			<div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
				<div class="inline-flex rounded-md shadow">
					<a
						href="/shop"
						class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500"
					>
						Browse Projects
					</a>
				</div>
				<div class="ml-3 inline-flex rounded-md shadow">
					<a
						href="/contact"
						class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-400 bg-slate-900 hover:bg-slate-700"
					>
						Contact Us
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* Mobile adjustments */
	@media (max-width: 640px) {
		.py-16 {
			padding-top: 2rem;
			padding-bottom: 2rem;
		}
		
		h1 {
			font-size: 1.875rem;
			line-height: 2.25rem;
		}
		
		h2 {
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
		
		.text-xl {
			font-size: 1.125rem;
			line-height: 1.75rem;
		}
    }

	.earth-viz-container {
		border-radius: 12px;
		min-height: 300px;
		height: calc(100vw * 0.35);
		max-height: 400px;
		overflow: hidden;
		box-shadow: 
			0 0 25px 5px rgba(59, 130, 246, 0.15),
			0 8px 32px -4px rgba(59, 130, 246, 0.35);
		position: relative;
		width: 100%;
		background-color: #111827;
		margin: 2rem auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.earth-viz-container::after {
		content: "";
		position: absolute;
		inset: 0;
		border-radius: 12px;
		padding: 1.5px;
		background: linear-gradient(45deg, rgba(59, 130, 246, 0.4), rgba(96, 165, 250, 0.1), rgba(59, 130, 246, 0.4));
		-webkit-mask: 
			linear-gradient(#fff 0 0) content-box, 
			linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		pointer-events: none;
	}

	.earth-container {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: 0.5rem;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease-in-out;
		text-decoration: none;
    }
</style>