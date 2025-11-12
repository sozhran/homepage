<script lang="ts">
	import LeftPanel from '$lib/components/LeftPanel.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import CV from '$lib/components/CV.svelte';

	import { page } from '$lib/stores/page';
</script>

<svelte:head>
	<title>Artem Rasskazimov: Personal page</title>
</svelte:head>

<section>
	<LeftPanel />

	<span class="separator"></span>

	<div class="content">
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
		width: 100%;
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		width: 100%;
		padding: 20px;
		background-color: var(--bg-dark-transparent);
	}

	.separator {
		height: 410px;
		width: 0px;
		border: 1px solid grey;
		margin-top: 45px;
		margin-bottom: 45px;
	}
</style>
