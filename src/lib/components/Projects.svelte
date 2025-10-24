<script lang="ts">
	import { projects } from '$lib/data/pagedata.svelte';
	import ProjectCard from './ProjectCard.svelte';
</script>

<div class="projects">
	{#each projects as x}
		<ProjectCard
			title={x.title}
			text={x.text}
			image_url={x.image_url}
			livedemo_url={x.livedemo_url}
			github_url={x.github_url}
		/>
	{/each}
</div>

<style>
	.projects {
		display: grid;
		grid-template-columns: auto auto;
		padding: 20px;
	}
</style>
