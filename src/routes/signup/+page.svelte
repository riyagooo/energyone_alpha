<script lang="ts">
	import { goto } from '$app/navigation';
	
	// State management
	let currentStep = 1;
	const totalSteps = 3;

	// Form data
	let formData = {
		riskTolerance: null,
		investmentHorizon: null,
		financialGoals: null
	};

	// Product recommendations based on risk profile
	interface ProductRecommendation {
		name: string;
		description: string;
	}

	const productRecommendations: Record<string, ProductRecommendation> = {
		conservative: {
			name: 'Conservative Portfolio',
			description: 'Low-risk investments focused on capital preservation with modest returns.'
		},
		balanced: {
			name: 'Balanced Portfolio',
			description: 'Moderate risk with a mix of stable income and growth potential.'
		},
		aggressive: {
			name: 'Growth Portfolio',
			description: 'Higher risk investments aimed at maximizing long-term returns.'
		}
	};

	let recommendedProduct: ProductRecommendation | null = null;

	// Calculate progress percentage
	$: progressPercentage = ((currentStep - 1) / totalSteps) * 100;

	// Handle next step
	function nextStep() {
		if (currentStep < totalSteps) {
			currentStep++;
		} else {
			// Calculate recommendation on final step
			calculateRecommendation();
		}
	}

	// Handle previous step
	function prevStep() {
		if (currentStep > 1) {
			currentStep--;
		}
	}

	// Calculate product recommendation based on answers
	function calculateRecommendation() {
		let score = 0;

		// Risk tolerance scoring
		if (formData.riskTolerance === 'low') score += 1;
		else if (formData.riskTolerance === 'medium') score += 2;
		else if (formData.riskTolerance === 'high') score += 3;

		// Investment horizon scoring
		if (formData.investmentHorizon === 'short') score += 1;
		else if (formData.investmentHorizon === 'medium') score += 2;
		else if (formData.investmentHorizon === 'long') score += 3;

		// Financial goals scoring
		if (formData.financialGoals === 'preservation') score += 1;
		else if (formData.financialGoals === 'income') score += 2;
		else if (formData.financialGoals === 'growth') score += 3;

		// Determine recommendation based on score
		if (score <= 5) {
			recommendedProduct = productRecommendations.conservative;
		} else if (score <= 7) {
			recommendedProduct = productRecommendations.balanced;
		} else {
			recommendedProduct = productRecommendations.aggressive;
		}

		// Move to results (step 4)
		currentStep = 4;
	}

	// Reset form
	function resetForm() {
		currentStep = 1;
		formData = {
			riskTolerance: null,
			investmentHorizon: null,
			financialGoals: null
		};
		recommendedProduct = null;
	}
	
	function skipToQuestions() {
		goto('/investor-profile/question1');
	}
	
	function skipToPortfolio() {
		goto('/portfolio-dashboard');
	}
</script>

<div class="min-h-screen bg-slate-900 flex flex-col items-center justify-center">
	<div class="max-w-md w-full bg-slate-800 shadow-lg rounded-lg p-8 mx-4">
		<div class="text-center mb-8">
			<h1 class="text-3xl font-bold text-white mb-2">Join EnergyOne</h1>
			<p class="text-slate-400">Create an account to save your preferences and get personalized investment opportunities.</p>
		</div>
		
		<form class="space-y-6">
			<div>
				<label for="email" class="block text-sm font-medium text-slate-300 mb-1">Email</label>
				<input 
					id="email" 
					type="email" 
					class="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
					placeholder="you@example.com"
				/>
			</div>
			
			<div>
				<label for="password" class="block text-sm font-medium text-slate-300 mb-1">Password</label>
				<input 
					id="password" 
					type="password" 
					class="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
					placeholder="Create a password"
				/>
			</div>
			
			<div class="flex items-center">
				<input 
					id="terms" 
					type="checkbox" 
					class="h-4 w-4 rounded bg-slate-700 border-slate-600 text-blue-500 focus:ring-blue-500"
				/>
				<label for="terms" class="ml-2 block text-sm text-slate-300">
					I agree to the <a href="/terms" class="text-blue-400 hover:text-blue-300">Terms of Service</a> and <a href="/privacy" class="text-blue-400 hover:text-blue-300">Privacy Policy</a>
				</label>
			</div>
			
			<button 
				type="submit"
				class="w-full py-3 px-4 bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 text-white font-medium rounded-md shadow-lg"
			>
				Create Account
			</button>
		</form>
		
		<div class="mt-6 text-center space-y-3">
			<button 
				on:click={skipToQuestions}
				class="text-blue-400 hover:text-blue-300 font-medium"
			>
				Continue without signing up
			</button>
			
			<div>
				<button 
					on:click={skipToPortfolio}
					class="text-blue-400 hover:text-blue-300 font-medium"
				>
					View sample portfolio dashboard
				</button>
			</div>
		</div>
		
		<div class="mt-8 pt-6 border-t border-slate-700 text-center">
			<p class="text-slate-400">
				Already have an account? <a href="/login" class="text-blue-400 hover:text-blue-300 font-medium">Log in</a>
			</p>
		</div>
	</div>
</div>