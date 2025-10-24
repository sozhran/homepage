<script lang="ts">
	import Infopanel from '$lib/components/Infopanel.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import CV from '$lib/components/CV.svelte';

	import { page } from '$lib/stores/page';
</script>

<svelte:head>
	<title>Artem Rasskazimov: Personal page</title>
</svelte:head>

<section>
	<Infopanel />

	<span class="separator"></span>

	<div class="h-full">
		{#if $page === 'projects'}
			<Projects />
		{:else if $page === 'cv'}
			<CV />
		{:else}
			<About />
		{/if}
	</div>
</section>

<style>
	section {
		display: flex;
		color: var(----color-text);
		gap: 50px;
		padding-left: var(--horizontal-padding);
		padding-right: var(--horizontal-padding);
		padding-top: var(--vertical-padding);
		padding-bottom: var(--vertical-padding);
	}

	div {
		background-color: darkgrey;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.separator {
		height: 400px;
		width: 0px;
		border: 0.5px solid red;
	}
</style>
