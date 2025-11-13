<script lang="ts">
	import About from '$lib/components/About.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import { projects } from '$lib/data/projects';
</script>

<svelte:head>
	<title>Artem Rasskazimov | Software Developer</title>
</svelte:head>

<About />

<section id="projects">
	<h2>Projects</h2>
	{#each projects as x}
		<ProjectCard
			title={x.title}
			text={x.text}
			image_url={x.image_url}
			livedemo_url={x.livedemo_url}
			github_url={x.github_url}
		/>
	{/each}
</section>

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
