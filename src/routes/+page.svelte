<script lang="ts">
	import About from '$lib/components/SectionAbout.svelte';
	import Projects from '$lib/components/SectionProjects.svelte';
</script>

<svelte:head>
	<title>Artem Rasskazimov | Software Developer</title>
</svelte:head>

<About />

<Projects />

<style>
	.content {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		width: 100%;
		padding: 20px;
	}

	.projects {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 20px;
		gap: var(--standard-gap);
	}
</style>
