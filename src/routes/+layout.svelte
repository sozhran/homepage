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

	<footer>
		<p>footah</p>
	</footer>
</div>

<style>
	:global(html, body, #svelte) {
		height: 100%;
		margin: 0;
	}
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		margin: 0;
		background-color: var(--bg-color-body);
	}

	main {
		display: flex;
		flex-direction: column;
		min-height: 0;
		flex: 1;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		filter: brightness(1);
	}

	footer::after {
		display: block;
		content: '';
		width: 100%;
		height: 100%;
		opacity: 0.9;
		background-color: #000000;
	}
</style>
