<script lang="ts">
	function handleAnchorClick(e: MouseEvent) {
		e.preventDefault();
		const link = e.currentTarget as HTMLAnchorElement;
		const anchorId = link.hash.replace('#', '');
		const anchor = document.getElementById(anchorId);

		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<header>
	<div class="w-[300px] h-50px">artem rasskazimov</div>
	<nav>
		<a href="#about" on:click={handleAnchorClick}>About me</a>
		<a href="#projects" on:click={handleAnchorClick}>Projects</a>
		<a href="/cv.pdf" data-sveltekit-preload-data="hover" target="_blank" rel="noopener">CV</a>
	</nav>
</header>

<style>
	header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: xx-large;
		height: 3.75rem;
		color: var(--color-text);
	}

	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--background);
		background-size: contain;
		gap: 2rem;
	}

	a {
		display: flex;
		flex-direction: column;
		width: 7.5rem;
		text-align: center;
		color: inherit;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--nav-link-hover-color);
	}
</style>
