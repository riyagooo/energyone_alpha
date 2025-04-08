<script>
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
	const productRecommendations = {
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

	let recommendedProduct = null;

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
</script>

<div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
	<h1 class="text-2xl font-bold text-gray-900 mb-6">Investment Risk Profile Assessment</h1>

	<!-- Progress Bar -->
	<div class="mb-8">
		<h4 class="sr-only">Progress</h4>
		<p class="text-sm font-medium text-gray-900">
			{#if currentStep <= totalSteps}
				Step {currentStep} of {totalSteps}
				: {currentStep === 1 ? 'Risk Tolerance' : currentStep === 2 ? 'Investment Horizon' : 'Financial Goals'}
			{:else}
				Assessment Complete
			{/if}
		</p>
		<div class="mt-4" aria-hidden="true">
			<div class="overflow-hidden rounded-full bg-gray-200">
				<div class="h-2 rounded-full bg-emerald-600"
						 style="width: {currentStep === 4 ? 100 : progressPercentage}%"></div>
			</div>
			<div class="mt-4 grid grid-cols-3 text-sm font-medium text-gray-600">
				<div class={currentStep >= 1 ? "text-emerald-600" : ""}>Risk Tolerance</div>
				<div class={`text-center ${currentStep >= 2 ? "text-emerald-600" : ""}`}>Investment Horizon</div>
				<div class={`text-right ${currentStep >= 3 ? "text-emerald-600" : ""}`}>Financial Goals</div>
			</div>
		</div>
	</div>

	<!-- Form Steps -->
	<div class="mt-8">
		<!-- Step 1: Risk Tolerance -->
		{#if currentStep === 1}
			<div class="space-y-6">
				<h2 class="text-xl font-semibold text-gray-800">What is your risk tolerance?</h2>
				<p class="text-gray-600">How comfortable are you with the possibility of losing money in exchange for
					potentially higher returns?</p>

				<div class="space-y-3">
					<label
						class="flex items-center p-3 border rounded-lg {formData.riskTolerance === 'low' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300'}">
						<input type="radio" name="riskTolerance" value="low" bind:group={formData.riskTolerance}
									 class="h-4 w-4 text-emerald-600 focus:ring-emerald-500">
						<span class="ml-3">
              <span class="block text-sm font-medium text-gray-900">Low Risk</span>
              <span class="block text-sm text-gray-500">I prefer stability and am uncomfortable with significant fluctuations.</span>
            </span>
					</label>

					<label
						class="flex items-center p-3 border rounded-lg {formData.riskTolerance === 'medium' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300'}">
						<input type="radio" name="riskTolerance" value="medium" bind:group={formData.riskTolerance}
									 class="h-4 w-4 text-emerald-600 focus:ring-emerald-500">
						<span class="ml-3">
              <span class="block text-sm font-medium text-gray-900">Medium Risk</span>
              <span class="block text-sm text-gray-500">I can tolerate some fluctuations for better returns.</span>
            </span>
					</label>

					<label
						class="flex items-center p-3 border rounded-lg {formData.riskTolerance === 'high' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300'}">
						<input type="radio" name="riskTolerance" value="high" bind:group={formData.riskTolerance}
									 class="h-4 w-4 text-emerald-600 focus:ring-emerald-500">
						<span class="ml-3">
              <span class="block text-sm font-medium text-gray-900">High Risk</span>
              <span class="block text-sm text-gray-500">I'm comfortable with significant fluctuations for potentially higher returns.</span>
            </span>
					</label>
				</div>
			</div>

			<!-- Step 2: Investment Horizon -->
		{:else if currentStep === 2}
			<div class="space-y-6">
				<h2 class="text-xl font-semibold text-gray-800">What is your investment time horizon?</h2>
				<p class="text-gray-600">How long do you plan to keep your money invested before you need it?</p>

				<div class="space-y-3">
					<label
						class="flex items-center p-3 border rounded-lg {formData.investmentHorizon === 'short' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300'}">
						<input type="radio" name="investmentHorizon" value="short" bind:group={formData.investmentHorizon}
									 class="h-4 w-4 text-emerald-600 focus:ring-emerald-500">
						<span class="ml-3">
              <span class="block text-sm font-medium text-gray-900">Short Term (1-3 years)</span>
              <span
								class="block text-sm text-gray-500">I'll need access to these funds within the next few years.</span>
            </span>
					</label>

					<label
						class="flex items-center p-3 border rounded-lg {formData.investmentHorizon === 'medium' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300'}">
						<input type="radio" name="investmentHorizon" value="medium" bind:group={formData.investmentHorizon}
									 class="h-4 w-4 text-emerald-600 focus:ring-emerald-500">
						<span class="ml-3">
              <span class="block text-sm font-medium text-gray-900">Medium Term (4-7 years)</span>
              <span class="block text-sm text-gray-500">I'm investing for goals several years away.</span>
            </span>
					</label>

					<label
						class="flex items-center p-3 border rounded-lg {formData.investmentHorizon === 'long' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300'}">
						<input type="radio" name="investmentHorizon" value="long" bind:group={formData.investmentHorizon}
									 class="h-4 w-4 text-emerald-600 focus:ring-emerald-500">
						<span class="ml-3">
              <span class="block text-sm font-medium text-gray-900">Long Term (8+ years)</span>
              <span class="block text-sm text-gray-500">I'm investing for long-term goals like retirement.</span>
            </span>
					</label>
				</div>
			</div>

			<!-- Step 3: Financial Goals -->
		{:else if currentStep === 3}
			<div class="space-y-6">
				<h2 class="text-xl font-semibold text-gray-800">What are your primary financial goals?</h2>
				<p class="text-gray-600">What do you hope to achieve with your investments?</p>

				<div class="space-y-3">
					<label
						class="flex items-center p-3 border rounded-lg {formData.financialGoals === 'preservation' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300'}">
						<input type="radio" name="financialGoals" value="preservation" bind:group={formData.financialGoals}
									 class="h-4 w-4 text-emerald-600 focus:ring-emerald-500">
						<span class="ml-3">
              <span class="block text-sm font-medium text-gray-900">Capital Preservation</span>
              <span
								class="block text-sm text-gray-500">I want to protect my principal investment with minimal risk.</span>
            </span>
					</label>

					<label
						class="flex items-center p-3 border rounded-lg {formData.financialGoals === 'income' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300'}">
						<input type="radio" name="financialGoals" value="income" bind:group={formData.financialGoals}
									 class="h-4 w-4 text-emerald-600 focus:ring-emerald-500">
						<span class="ml-3">
              <span class="block text-sm font-medium text-gray-900">Income Generation</span>
              <span class="block text-sm text-gray-500">I want regular income from my investments.</span>
            </span>
					</label>

					<label
						class="flex items-center p-3 border rounded-lg {formData.financialGoals === 'growth' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300'}">
						<input type="radio" name="financialGoals" value="growth" bind:group={formData.financialGoals}
									 class="h-4 w-4 text-emerald-600 focus:ring-emerald-500">
						<span class="ml-3">
              <span class="block text-sm font-medium text-gray-900">Long-term Growth</span>
              <span class="block text-sm text-gray-500">I want to maximize growth over time and am willing to accept volatility.</span>
            </span>
					</label>
				</div>
			</div>

			<!-- Results -->
		{:else if currentStep === 4 && recommendedProduct}
			<div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
				<div class="text-center mb-6">
					<div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24"
								 stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<h2 class="text-2xl font-bold text-gray-900">Your Recommended Investment</h2>
					<p class="text-gray-600 mt-1">Based on your risk profile assessment</p>
				</div>

				<div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
					<h3 class="text-xl font-semibold text-gray-900 mb-2">{recommendedProduct.name}</h3>
					<p class="text-gray-700">{recommendedProduct.description}</p>

					<div class="mt-6 pt-6 border-t border-gray-200">
						<h4 class="font-medium text-gray-900 mb-2">Your Profile Summary:</h4>
						<ul class="space-y-1 text-sm text-gray-600">
							<li>Risk Tolerance: <span
								class="font-medium">{formData.riskTolerance === 'low' ? 'Conservative' : formData.riskTolerance === 'medium' ? 'Moderate' : 'Aggressive'}</span>
							</li>
							<li>Investment Horizon: <span
								class="font-medium">{formData.investmentHorizon === 'short' ? 'Short Term (1-3 years)' : formData.investmentHorizon === 'medium' ? 'Medium Term (4-7 years)' : 'Long Term (8+ years)'}</span>
							</li>
							<li>Financial Goals: <span
								class="font-medium">{formData.financialGoals === 'preservation' ? 'Capital Preservation' : formData.financialGoals === 'income' ? 'Income Generation' : 'Long-term Growth'}</span>
							</li>
						</ul>
					</div>
				</div>

				<div class="text-center">
					<button
						on:click={resetForm}
						class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
					>
						Reset Form
					</button>
					<a href="/dashboard"
						 class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">Get
						Started</a>
				</div>
			</div>
		{/if}

		<!-- Navigation Buttons -->
		{#if currentStep <= totalSteps}
			<div class="mt-8 flex justify-between">
				<button
					on:click={prevStep}
					class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
					disabled={currentStep === 1}
					class:opacity-50={currentStep === 1}
				>
					Back
				</button>

				<button
					on:click={nextStep}
					class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
					disabled={
            (currentStep === 1 && !formData.riskTolerance) ||
            (currentStep === 2 && !formData.investmentHorizon) ||
            (currentStep === 3 && !formData.financialGoals)
          }
					class:opacity-50={
            (currentStep === 1 && !formData.riskTolerance) ||
            (currentStep === 2 && !formData.investmentHorizon) ||
            (currentStep === 3 && !formData.financialGoals)
          }
				>
					{currentStep === totalSteps ? 'Submit' : 'Next'}
				</button>
			</div>
		{/if}
	</div>
</div>