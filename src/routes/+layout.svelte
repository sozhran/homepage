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
		<p>
			© 2025 Artem Rasskazimov <a href="https://github.com/sozhran/homepage"
				><img alt="github icon" src="/github.svg" width="20" height="20" /></a
			>
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		margin: 0;
		gap: var(--standard-gap);
		background-image: url('/wp1.png');
		background-size: 2000px;
		background-position: right top;
	}

	main {
		display: flex;
		flex-direction: column;
		min-height: 0;
		flex: 1;
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 45px;
		background-color: var(--bg-dark-transparent);
	}

	p {
		opacity: 50%;
		vertical-align: bottom;
	}

	img {
		display: inline-block;
	}
</style>
