<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let isMenuOpen = false;
	let isScrolled = false;

	onMount(() => {
		window.addEventListener('scroll', () => {
			isScrolled = window.scrollY > 0;
		});
	});
</script>

<div class="min-h-screen bg-white">
	<!-- Navigation -->
	<nav
		class={`fixed w-full z-50 transition-all duration-200 ${
			isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
		}`}
	>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16">
				<div class="flex">
					<div class="flex-shrink-0 flex items-center">
						<a href="/" class="text-2xl font-bold text-emerald-600">EnergyOne</a>
					</div>
				</div>
				<div class="hidden md:flex items-center space-x-8">
					<a href="/shop" class="text-slate-600 hover:text-emerald-600">Projects</a>
					<a href="#features" class="text-slate-600 hover:text-emerald-600">Solutions</a>
					<a href="#testimonials" class="text-slate-600 hover:text-emerald-600">Testimonials</a>
					<a href="/contact" class="text-slate-600 hover:text-emerald-600">Contact</a>
					<a
						href="/auth/signup"
						class="px-4 py-2 rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
					>
						Get Started
					</a>
				</div>
				<div class="flex items-center md:hidden">
					<button
						type="button"
						class="text-slate-600 hover:text-emerald-600"
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
				<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
					<a href="/shop" class="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-emerald-600">Projects</a>
					<a href="#features" class="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-emerald-600">Solutions</a>
					<a href="#testimonials" class="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-emerald-600">Testimonials</a>
					<a href="/contact" class="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-emerald-600">Contact</a>
					<a
						href="/auth/signup"
						class="block px-3 py-2 rounded-md text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700"
					>
						Get Started
					</a>
				</div>
			</div>
		{/if}
	</nav>

	<!-- Hero Section -->
	<div class="relative overflow-hidden">
		<div class="max-w-7xl mx-auto">
			<div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
				<main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
					<div class="sm:text-center lg:text-left">
						<h1 class="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
							<span class="block">Invest in the Future of</span>
							<span class="block text-emerald-600">Renewable Energy</span>
						</h1>
						<p class="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
							Access vetted renewable energy projects in emerging markets. Our platform connects investors with sustainable infrastructure projects, providing transparent risk assessment and streamlined investment opportunities.
						</p>
						<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
							<div class="rounded-md shadow">
								<a
									href="/shop"
									class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10"
								>
									Browse Projects
								</a>
							</div>
							<div class="mt-3 sm:mt-0 sm:ml-3">
								<a
									href="#features"
									class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200 md:py-4 md:text-lg md:px-10"
								>
									Learn More
								</a>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	</div>

	<!-- Features Section -->
	<div id="features" class="py-12 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="lg:text-center">
				<h2 class="text-base text-emerald-600 font-semibold tracking-wide uppercase">Investment Solutions</h2>
				<p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
					Why Choose Our Platform
				</p>
				<p class="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
					We address the key challenges faced by investors in renewable energy infrastructure
				</p>
			</div>

			<div class="mt-10">
				<div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
					<!-- Feature 1 -->
					<div class="relative">
						<div class="absolute h-12 w-12 rounded-md bg-emerald-500 flex items-center justify-center">
							<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
							</svg>
						</div>
						<div class="ml-16">
							<h3 class="text-lg leading-6 font-medium text-slate-900">Comprehensive Risk Assessment</h3>
							<p class="mt-2 text-base text-slate-500">
								Our AI-powered platform analyzes multiple risk factors including regulatory environment, market conditions, and project viability. Get detailed risk scores and mitigation strategies for each investment opportunity.
							</p>
						</div>
					</div>

					<!-- Feature 2 -->
					<div class="relative">
						<div class="absolute h-12 w-12 rounded-md bg-emerald-500 flex items-center justify-center">
							<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
						</div>
						<div class="ml-16">
							<h3 class="text-lg leading-6 font-medium text-slate-900">Direct Project Access</h3>
							<p class="mt-2 text-base text-slate-500">
								Connect directly with project developers and operators. Our platform eliminates intermediaries, providing transparent communication channels and detailed project documentation.
							</p>
						</div>
					</div>

					<!-- Feature 3 -->
					<div class="relative">
						<div class="absolute h-12 w-12 rounded-md bg-emerald-500 flex items-center justify-center">
							<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
							</svg>
						</div>
						<div class="ml-16">
							<h3 class="text-lg leading-6 font-medium text-slate-900">Tangible Impact</h3>
							<p class="mt-2 text-base text-slate-500">
								Invest in real infrastructure projects with measurable environmental impact. Track carbon offset, energy generation, and community benefits for each investment.
							</p>
						</div>
					</div>

					<!-- Feature 4 -->
					<div class="relative">
						<div class="absolute h-12 w-12 rounded-md bg-emerald-500 flex items-center justify-center">
							<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div class="ml-16">
							<h3 class="text-lg leading-6 font-medium text-slate-900">Regulatory Support</h3>
							<p class="mt-2 text-base text-slate-500">
								Navigate complex regulatory environments with confidence. Our platform provides up-to-date regulatory information and compliance guidance for each market.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Testimonials Section -->
	<div id="testimonials" class="bg-slate-50 py-16">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="lg:text-center mb-12">
				<h2 class="text-base text-emerald-600 font-semibold tracking-wide uppercase">Testimonials</h2>
				<p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
					What Our Investors Say
				</p>
			</div>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				<!-- Testimonial 1 -->
				<div class="bg-white p-6 rounded-lg shadow-sm">
					<div class="flex items-center mb-4">
						<div class="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
							<span class="text-emerald-600 font-medium">JD</span>
						</div>
						<div class="ml-4">
							<h4 class="text-lg font-medium text-slate-900">John D.</h4>
							<p class="text-sm text-slate-500">Institutional Investor</p>
						</div>
					</div>
					<p class="text-slate-600">
						"As someone who wanted to invest in infrastructure but was overwhelmed by regulatory complexity, this platform has been a game-changer. The risk assessment tools and direct project access have made it possible to confidently invest in emerging markets."
					</p>
				</div>

				<!-- Testimonial 2 -->
				<div class="bg-white p-6 rounded-lg shadow-sm">
					<div class="flex items-center mb-4">
						<div class="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
							<span class="text-emerald-600 font-medium">SR</span>
						</div>
						<div class="ml-4">
							<h4 class="text-lg font-medium text-slate-900">Sarah R.</h4>
							<p class="text-sm text-slate-500">Impact Investor</p>
						</div>
					</div>
					<p class="text-slate-600">
						"The ability to track both financial returns and environmental impact is exactly what I was looking for. I can see exactly how my investments are contributing to carbon reduction while generating stable returns."
					</p>
				</div>

				<!-- Testimonial 3 -->
				<div class="bg-white p-6 rounded-lg shadow-sm">
					<div class="flex items-center mb-4">
						<div class="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
							<span class="text-emerald-600 font-medium">MK</span>
						</div>
						<div class="ml-4">
							<h4 class="text-lg font-medium text-slate-900">Michael K.</h4>
							<p class="text-sm text-slate-500">Private Equity</p>
						</div>
					</div>
					<p class="text-slate-600">
						"The platform's comprehensive due diligence and risk management tools have saved us countless hours of research. We can now efficiently evaluate and invest in renewable energy projects across Latin America."
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- CTA Section -->
	<div class="bg-emerald-50">
		<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
			<h2 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
				<span class="block">Ready to invest in sustainable energy?</span>
				<span class="block text-emerald-600">Start exploring projects today.</span>
			</h2>
			<div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
				<div class="inline-flex rounded-md shadow">
					<a
						href="/shop"
						class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
					>
						Browse Projects
					</a>
				</div>
				<div class="ml-3 inline-flex rounded-md shadow">
					<a
						href="/contact"
						class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-emerald-50"
					>
						Contact Us
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
    html {
        scroll-behavior: smooth;
    }
</style>