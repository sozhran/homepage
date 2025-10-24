<script lang="ts">
	import type { ProjectProps } from '$lib/data/pagedata.svelte';

	let { title, text }: ProjectProps = $props();
</script>

<div class="project">
	<span class="thumb"></span>
	<h2>{title}</h2>
	<p>{@html text}</p>
</div>

<style>
	.project {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		background-color: darkslategray;
		height: 500px;
		width: 300px;
		border: 2px solid orange;
	}

	.thumb {
		height: 160px;
		width: 100%;
		background-color: teal;
		border: 2px solid black;
	}

	h2 {
		font-weight: 700;
		color: black;
	}
</style>
