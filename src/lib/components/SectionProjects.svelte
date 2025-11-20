<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ProjectCard from './ProjectCard.svelte';
</script>

<section class="projects" id="projects">
	<h2>Projects</h2>

	<div class="project-list">
		{#each projects as x}
			<ProjectCard
				title={x.title}
				text={x.text}
				image_url={x.image_url}
				livedemo_url={x.livedemo_url}
				github_url={x.github_url}
				technologies={x.technologies}
			/>
		{/each}
	</div>
</section>

<style>
	.projects {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.project-list {
		display: grid;
		grid-template-columns: auto auto auto;
		padding: 20px;
		margin-bottom: 30px;
		gap: var(--standard-gap);
	}
</style>
