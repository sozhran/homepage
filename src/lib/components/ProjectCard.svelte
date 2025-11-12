<script lang="ts">
	import type { ProjectProps } from '$lib/data/pagedata.svelte';

	let { title, text, image_url, livedemo_url, github_url }: ProjectProps = $props();
</script>

<div class="project">
	<span class="thumb"><img src={image_url} /></span>
	<h2>{title}</h2>
	<p>{@html text}</p>
</div>

<style>
	.project {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 400px;
		min-width: 300px;
		max-width: 390px;
		gap: 10px;
		color: var(--text-color);
		background-color: rgb(51, 48, 48);
		border: 2px solid rgb(63, 62, 60);
	}

	.thumb {
		/*height: 160px;*/
		width: 100%;
		background-color: teal;
		border: 2px solid rgb(63, 62, 60);
	}

	h2 {
		font-weight: 700;
		color: orange;
	}
</style>
