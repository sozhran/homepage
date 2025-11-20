<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>© 2025 Artem Rasskazimov</footer>
</div>

<style>
	.app {
		min-height: 100vh;
		min-width: 800px;
		gap: var(--standard-gap);
		padding-left: var(--horizontal-padding);
		padding-right: var(--horizontal-padding);
	}

	main {
		display: flex;
		flex-direction: column;
		min-height: 0;
		flex: 1;
		background-color: var(--new-black);
		gap: 1.25rem;
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 5rem;
		opacity: 30%;
	}
</style>
