<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
	import { onNavigate } from '$app/navigation';

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
</script>

{@render children()}

<style>
    @keyframes fade-in {
        from {
            opacity: 0;
        }
    }

    @keyframes fade-out {
        to {
            opacity: 0;
        }
    }

    @keyframes slide-from-right {
        from {
            transform: translateX(30px);
        }
    }

    @keyframes slide-to-left {
        to {
            transform: translateX(-30px);
        }
    }

    :root::view-transition-old(root) {
        animation:
                90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
                300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
    }

    :root::view-transition-new(root) {
        animation:
                210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
                300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
    }
</style>
