<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	
	function skipToPortfolio() {
		goto('/portfolio-dashboard');
	}
</script>

<!--
  This example requires updating your template:

  ```
  <html class="h-full bg-gray-50">
  <body class="h-full">
  ```
-->
<div class="flex min-h-full flex-1 flex-col justify-center py-12 px-6 lg:px-8 bg-slate-900 text-white">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form class="space-y-6" action="/auth/login" method="POST">
			<div>
				<label for="email" class="block text-sm font-medium leading-6 text-slate-300">Email address</label>
				<div class="mt-2">
					<input
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						required
						class="block w-full rounded-md border-0 py-1.5 bg-slate-800 text-white shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<div class="flex items-center justify-between">
					<label for="password" class="block text-sm font-medium leading-6 text-slate-300">Password</label>
					<div class="text-sm">
						<a href="/auth/forgot-password" class="font-semibold text-blue-400 hover:text-blue-300">Forgot password?</a>
					</div>
				</div>
				<div class="mt-2">
					<input
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						class="block w-full rounded-md border-0 py-1.5 bg-slate-800 text-white shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<button
					type="submit"
					class="flex w-full justify-center rounded-md bg-gradient-to-t from-blue-600 to-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:to-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
				>
					Sign in
				</button>
			</div>
		</form>

		<div class="mt-4 text-center">
			<button 
				on:click={skipToPortfolio}
				class="font-semibold text-blue-400 hover:text-blue-300"
			>
				Continue without signing in
			</button>
		</div>

		<p class="mt-6 text-center text-sm text-slate-400">
			Not a member?
			<a href="/signup" class="font-semibold leading-6 text-blue-400 hover:text-blue-300">Start your investment journey</a>
		</p>
	</div>
</div>
