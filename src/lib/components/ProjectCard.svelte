<script lang="ts">
	import type { ProjectProps } from '$lib/data/projects';
	import { stack, type Stack } from '$lib/data/stack';

	let { title, text, image_url, livedemo_url, github_url, technologies }: ProjectProps = $props();

	let stackUsed: Stack[] = [];

	technologies.forEach((elm) => {
		const x = stack.find((item) => item.name === elm);

		if (x) {
			stackUsed.push(x);
		}
	});
</script>

{#snippet tag(tech: Stack)}
	<span style={`background-color: #${tech.badgeColor}`} class="techtag">{tech.name}</span>
{/snippet}

<div class="project">
	<span class="thumb">
		<img alt={title} src={image_url} />
	</span>

	<span class="text">
		<span class="flex flex-col items-start gap-1.5">
			<h3>{title}</h3>
			<p>{@html text}</p>
		</span>
		<div class="flex flex-row w-full flex-wrap gap-2">
			{#each stackUsed as technology}
				{@render tag(technology)}
			{/each}
		</div>
	</span>
</div>

<style>
	.project {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 400px;
		min-width: 300px;
		max-width: 350px;
		/*gap: 10px;*/
		color: var(--text-color);
		background-color: rgb(51, 48, 48);
		border: 2px solid rgb(63, 62, 60);
	}

	.thumb {
		width: 100%;
		border: 2px solid rgb(63, 62, 60);
	}

	.text {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
		padding: 1rem;
		gap: 1rem;
	}

	h3 {
		font-size: x-large;
		font-weight: 600;
		/*color: orange;*/
	}

	.techtag {
		font-size: 0.9rem;
		border: 1px solid grey;
		padding: 6px;
		border-color: var(--border-tag);
		border-radius: 0.5rem;
		padding: 0.35rem;
	}
</style>
