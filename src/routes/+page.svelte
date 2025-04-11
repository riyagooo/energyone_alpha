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
	<!-- Hero Section -->
	<section class="pt-16 py-8 sm:py-12 bg-gradient-to-b from-gray-900 to-slate-900">
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
							<p class="text-lg text-slate-300">One stop solution to fund the renewable energy revolution.</p>
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

	<!-- Investment Opportunities Section -->
	<section class="bg-gradient-to-b from-slate-900 to-slate-800 py-16 overflow-hidden relative">
		<!-- Background decorative elements -->
		<div class="absolute top-0 left-1/4 w-96 h-96 bg-emerald-900/5 rounded-full filter blur-3xl"></div>
		<div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/5 rounded-full filter blur-3xl"></div>
		
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
			<!-- Section header -->
			<div class="max-w-3xl mx-auto text-center mb-16">
				<div class="inline-flex text-sm font-semibold py-1 px-4 text-amber-200 bg-amber-900/30 rounded-full mb-4">
					Investment Opportunities
				</div>
				<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
					Choose Your Impact Investment
				</h2>
				<p class="text-xl text-slate-400">
					Diversify your portfolio with sustainable energy projects at different scales and investment levels.
				</p>
			</div>

			<!-- Energy Project Cards -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
				<!-- Solar Energy Project -->
				<div class="group bg-slate-800/60 rounded-xl overflow-hidden shadow-lg border border-slate-700/50">
					<div class="relative h-48 overflow-hidden">
						<div class="absolute inset-0 bg-emerald-900/20"></div>
						<div class="absolute inset-0 flex items-center justify-center">
							<div class="bg-emerald-500/90 p-3 rounded-lg shadow-lg">
								<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
								</svg>
							</div>
						</div>
						<div class="absolute bottom-0 left-0 p-4 z-10">
							<h3 class="text-xl font-bold text-white">Solar Energy</h3>
						</div>
					</div>
					
					<div class="p-5">
						<div class="mb-4">
							<div class="flex justify-between items-center mb-2">
								<span class="text-emerald-400 font-semibold">6-8% ROI</span>
								<span class="px-2 py-1 bg-slate-700/70 rounded-lg text-xs text-slate-300">5-10 years</span>
							</div>
							<div class="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
								<div class="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full" style="width: 75%"></div>
							</div>
							<div class="flex justify-between text-xs text-slate-400 mt-1">
								<span>Risk: Moderate</span>
								<span>CO₂ Offset: High</span>
							</div>
						</div>
						
						<p class="text-slate-300 mb-4 text-sm">
							Invest in photovoltaic solar farms and distributed solar projects that power homes and businesses with clean, renewable energy.
						</p>
						
						<div class="space-y-2 mb-4">
							<div class="flex items-center text-sm text-slate-400">
								<svg class="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
								<span class="text-sm">Stable returns with long-term contracts</span>
							</div>
							<div class="flex items-center text-sm text-slate-400">
								<svg class="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
								<span class="text-sm">Minimal operational challenges</span>
							</div>
							<div class="flex items-center text-sm text-slate-400">
								<svg class="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
								<span class="text-sm">Strong environmental impact</span>
							</div>
						</div>
						
						<a href="/shop" class="group inline-flex items-center font-medium text-emerald-400 hover:text-emerald-300">
							Explore Solar Projects
							<svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
							</svg>
						</a>
					</div>
				</div>

				<!-- Wind Energy Project -->
				<div class="group bg-slate-800/60 rounded-xl overflow-hidden shadow-lg border border-blue-500/30 relative">
					<div class="absolute -top-3 right-3 z-10">
						<div class="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
							Most Popular
						</div>
					</div>
					<div class="relative h-48 overflow-hidden">
						<div class="absolute inset-0 bg-blue-900/20"></div>
						<div class="absolute inset-0 flex items-center justify-center">
							<div class="bg-blue-500/90 p-3 rounded-lg shadow-lg">
								<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
								</svg>
							</div>
						</div>
						<div class="absolute bottom-0 left-0 p-4 z-10">
							<h3 class="text-xl font-bold text-white">Wind Energy</h3>
						</div>
					</div>
					
					<div class="p-5">
						<div class="mb-4">
							<div class="flex justify-between items-center mb-2">
								<span class="text-blue-400 font-semibold">7-10% ROI</span>
								<span class="px-2 py-1 bg-slate-700/70 rounded-lg text-xs text-slate-300">8-15 years</span>
							</div>
							<div class="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
								<div class="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" style="width: 85%"></div>
							</div>
							<div class="flex justify-between text-xs text-slate-400 mt-1">
								<span>Risk: Moderate</span>
								<span>CO₂ Offset: Very High</span>
							</div>
						</div>
						
						<p class="text-slate-300 mb-4 text-sm">
							Finance modern wind farms in high-yield locations around the globe with long-term power purchase agreements and stable returns.
						</p>
						
						<div class="space-y-2 mb-4">
							<div class="flex items-center text-sm text-slate-400">
								<svg class="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
								<span class="text-sm">Higher returns than solar energy</span>
							</div>
							<div class="flex items-center text-sm text-slate-400">
								<svg class="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
								<span class="text-sm">Onshore and offshore opportunities</span>
							</div>
							<div class="flex items-center text-sm text-slate-400">
								<svg class="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
								<span class="text-sm">Exceptional carbon offset potential</span>
							</div>
						</div>
						
						<a href="/shop" class="group inline-flex items-center font-medium text-blue-400 hover:text-blue-300">
							Explore Wind Projects
							<svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
							</svg>
						</a>
					</div>
				</div>

				<!-- Energy Storage Project -->
				<div class="group bg-slate-800/60 rounded-xl overflow-hidden shadow-lg border border-slate-700/50">
					<div class="relative h-48 overflow-hidden">
						<div class="absolute inset-0 bg-purple-900/20"></div>
						<div class="absolute inset-0 flex items-center justify-center">
							<div class="bg-purple-500/90 p-3 rounded-lg shadow-lg">
								<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
						</div>
						<div class="absolute bottom-0 left-0 p-4 z-10">
							<h3 class="text-xl font-bold text-white">Energy Storage</h3>
						</div>
					</div>
					
					<div class="p-5">
						<div class="mb-4">
							<div class="flex justify-between items-center mb-2">
								<span class="text-purple-400 font-semibold">8-12% ROI</span>
								<span class="px-2 py-1 bg-slate-700/70 rounded-lg text-xs text-slate-300">3-7 years</span>
							</div>
							<div class="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
								<div class="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" style="width: 90%"></div>
							</div>
							<div class="flex justify-between text-xs text-slate-400 mt-1">
								<span>Risk: Higher</span>
								<span>CO₂ Offset: Medium</span>
							</div>
						</div>
						
						<p class="text-slate-300 mb-4 text-sm">
							Support grid-scale battery storage solutions and innovative technologies that enable greater renewable energy integration.
						</p>
						
						<div class="space-y-2 mb-4">
							<div class="flex items-center text-sm text-slate-400">
								<svg class="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
								<span class="text-sm">Highest potential returns</span>
							</div>
							<div class="flex items-center text-sm text-slate-400">
								<svg class="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
								<span class="text-sm">Cutting-edge technology exposure</span>
							</div>
							<div class="flex items-center text-sm text-slate-400">
								<svg class="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
								<span class="text-sm">Shorter investment terms</span>
							</div>
						</div>
						
						<a href="/shop" class="group inline-flex items-center font-medium text-purple-400 hover:text-purple-300">
							Explore Storage Projects
							<svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
							</svg>
						</a>
					</div>
				</div>
			</div>

			<!-- CTA Section -->
			<div class="mt-16 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 sm:p-10 text-center md:text-left md:flex md:items-center md:justify-between">
				<div class="md:max-w-md mb-6 md:mb-0">
					<h3 class="text-xl md:text-2xl font-bold text-white mb-2">Ready to make an impact?</h3>
					<p class="text-slate-400">Our investment advisors can help you build a custom portfolio aligned with your financial goals and values.</p>
				</div>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/shop" class="inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 shadow-lg shadow-blue-500/20">
						Explore All Projects
					</a>
					<a href="/contact" class="inline-flex justify-center items-center px-6 py-3 border border-slate-600 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-700/50">
						Speak to an Advisor
					</a>
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

	<!-- Membership Tiers Section -->
	<div class="bg-slate-900 py-16">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="lg:text-center mb-12">
				<div class="inline-flex text-sm font-semibold py-1 px-3 text-purple-200 bg-purple-900/50 rounded-full mb-3">Membership Levels</div>
				<h2 class="text-3xl font-bold text-white mb-4">Choose Your Access Level</h2>
				<p class="text-xl text-slate-400 max-w-3xl mx-auto">
					Select the right membership tier for your investment goals and access exclusive features, insights, and project opportunities.
				</p>
			</div>

			<div class="grid gap-8 lg:grid-cols-4 lg:gap-6 items-start">
				<!-- Free Trial Tier -->
				<div class="relative flex flex-col h-full p-6 bg-slate-800 rounded-xl border border-slate-700">
					<div class="mb-5">
						<div class="text-slate-300 bg-slate-700 rounded-full w-12 h-12 flex items-center justify-center mb-3">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
							</svg>
						</div>
						<h3 class="text-xl font-bold mb-2 text-white">Discovery</h3>
						<p class="text-lg font-bold mb-2 text-slate-300">$0</p>
						<p class="text-slate-400 text-sm mb-5">Test drive our platform and discover the potential of renewable energy investments.</p>
					</div>
					
					<div class="space-y-3 mb-6 flex-grow">
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">14-day trial access</span>
						</div>
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">Preview investment opportunities</span>
						</div>
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">Sample project reports</span>
						</div>
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">Newsletter subscription</span>
						</div>
					</div>
					
					<a href="/signup" class="w-full inline-flex justify-center py-2 px-4 border border-slate-600 rounded-md shadow-sm text-sm font-medium text-slate-300 bg-transparent hover:bg-slate-700 focus:outline-none">
						Start Discovery
					</a>
				</div>

				<!-- Investor Tier -->
				<div class="relative flex flex-col h-full p-6 bg-slate-800 rounded-xl border border-slate-700">
					<div class="mb-5">
						<div class="text-blue-300 bg-blue-900/50 rounded-full w-12 h-12 flex items-center justify-center mb-3">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
							</svg>
						</div>
						<h3 class="text-xl font-bold mb-2 text-white">Horizon</h3>
						<p class="text-lg font-bold mb-2 text-slate-300">$1,000<span class="text-sm font-normal text-slate-400">/year</span></p>
						<p class="text-slate-400 text-sm mb-5">Access curated deals and essential data to make informed investment decisions.</p>
					</div>
					
					<div class="space-y-3 mb-6 flex-grow">
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">Full deal access</span>
						</div>
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">Basic project data</span>
						</div>
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">Monthly market insights</span>
						</div>
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">Standard risk assessment</span>
						</div>
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">Email support</span>
						</div>
					</div>
					
					<a href="/signup?tier=investor" class="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
						Join Horizon
					</a>
				</div>

				<!-- Professional Tier -->
				<div class="relative flex flex-col h-full p-6 bg-slate-800 rounded-xl border border-blue-500/50 shadow-lg shadow-blue-500/10">
					<div class="absolute top-0 right-0 -mt-4 mr-4">
						<div class="inline-flex text-xs font-semibold py-1 px-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full">Most Popular</div>
					</div>
					<div class="mb-5">
						<div class="text-blue-300 bg-blue-900/50 rounded-full w-12 h-12 flex items-center justify-center mb-3">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
							</svg>
						</div>
						<h3 class="text-xl font-bold mb-2 text-white">Catalyst</h3>
						<p class="text-lg font-bold mb-2 text-slate-300">$5,000<span class="text-sm font-normal text-slate-400">/year</span></p>
						<p class="text-slate-400 text-sm mb-5">Full access to data room and comprehensive due diligence services for serious investors.</p>
					</div>
					
					<div class="space-y-3 mb-6 flex-grow">
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">All Investor features</span>
						</div>
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">Complete data room access</span>
						</div>
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">Due diligence support</span>
						</div>
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">Quarterly detailed reports</span>
						</div>
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">Dedicated account manager</span>
						</div>
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">Risk hedging consultation</span>
						</div>
					</div>
					
					<a href="/signup?tier=professional" class="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 focus:outline-none">
						Become a Catalyst
					</a>
				</div>

				<!-- Partner Tier -->
				<div class="relative flex flex-col h-full p-6 bg-slate-800 rounded-xl border border-slate-700">
					<div class="mb-5">
						<div class="text-purple-300 bg-purple-900/50 rounded-full w-12 h-12 flex items-center justify-center mb-3">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
							</svg>
						</div>
						<h3 class="text-xl font-bold mb-2 text-white">Pinnacle</h3>
						<p class="text-lg font-bold mb-2 text-slate-300">Custom</p>
						<p class="text-slate-400 text-sm mb-5">Priority access to co-investment opportunities and advanced structuring tools.</p>
					</div>
					
					<div class="space-y-3 mb-6 flex-grow">
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">All Professional features</span>
						</div>
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">Co-investment priority</span>
						</div>
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">Advanced structuring tools</span>
						</div>
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">Custom investment strategies</span>
						</div>
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">Executive deal access</span>
						</div>
						<div class="flex items-start">
							<svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-slate-300">Dedicated investment team</span>
						</div>
					</div>
					
					<a href="/contact?subject=Partner" class="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none">
						Reach the Pinnacle
					</a>
				</div>
			</div>

			<!-- Additional information -->
			<div class="mt-12 bg-slate-800/50 rounded-xl p-6 border border-slate-700">
				<div class="flex flex-col md:flex-row items-start md:items-center">
					<div class="flex-shrink-0 bg-blue-900/30 rounded-full p-3 mb-4 md:mb-0 md:mr-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<div>
						<h3 class="text-xl font-bold text-white mb-2">Not sure which tier is right for you?</h3>
						<p class="text-slate-400 mb-4">Our team can help you identify the best membership level based on your investment goals and portfolio size.</p>
						<div class="flex flex-wrap gap-3">
							<a href="/contact" class="inline-flex items-center text-sm px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
								Schedule a Consultation
							</a>
							<a href="/compare-tiers" class="inline-flex items-center text-sm px-4 py-2 border border-slate-600 text-slate-300 rounded-md hover:bg-slate-700">
								View Detailed Comparison
							</a>
						</div>
					</div>
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