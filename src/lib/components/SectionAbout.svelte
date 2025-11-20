<script lang="ts">
	import Icon from './Icon.svelte';
	import StackList from './StackList.svelte';
	import { icons } from '$lib/data/icons';
	import { stack } from '$lib/data/stack';

	const mainStack = stack.filter((elm) => elm.type === 'main');
	const otherTools = stack.filter((elm) => elm.type === 'secondary');
</script>

<section class="about" id="about">
	<div class="left-side">
		<span
			><h1>Hi, I'm Artem!</h1>
			<p>
				I'm a software developer based in Amsterdam, Netherlands. I've worked as a backend dev with
				Python/Django and did projects with TypeScript (Next.js/React and Svelte).
			</p>
		</span>

		<h3>My main stack</h3>
		<StackList items={mainStack} />

		<h3>Some other tools I've used</h3>
		<StackList items={otherTools} />
	</div>
	<div>
		<img class="portrait" alt="me" src="/portrait.jpg" width="350" height="350" />
		<div class="flex flex-row gap-6 justify-center">
			{#each icons as icon}
				<Icon title={icon.title} path={icon.path} url={icon.url} />{/each}
		</div>
	</div>
</section>

<style>
	.about {
		display: flex;
		flex-direction: row;
		width: 100%;
		min-width: 50rem;
		gap: 4rem;
		padding: 2.5rem;
		background-image: url('/wp1.png');
		background-position: center;
		background-color: grey;
		background-blend-mode: multiply;
	}

	.left-side {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.portrait {
		min-width: 20rem;
		min-height: 20rem;
		border-radius: 50%;
		margin: 3rem;
		box-shadow:
			0 0 0 5px var(--bg-color-body),
			0 0 0 7px black;
	}
</style>
