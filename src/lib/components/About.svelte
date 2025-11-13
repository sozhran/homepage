<script lang="ts">
	import Icon from './Icon.svelte';
	import { icons } from '$lib/data/icons';

	const mainStack = [
		{ name: 'Python', badgeColor: '306998', textColor: 'FFE873' },
		{ name: 'Django', badgeColor: '0D3C27', textColor: 'FFFFFF' },
		{ name: 'PostgreSQL', badgeColor: '28537E', textColor: 'FFFFFF' },
		{ name: 'JavaScript', badgeColor: 'F0DB4F', textColor: '000000' },
		{ name: 'TypeScript', badgeColor: '3b0764', textColor: 'FFFFFF' },
		{ name: 'React', badgeColor: '20232A', textColor: '61DAFB' },
		{ name: 'Next.js', badgeColor: '1E40AF', textColor: 'FFFFFF' },
		{ name: 'TailwindCSS', badgeColor: '0e7490', textColor: 'FFFFFF' }
	];

	const otherTools = [
		{ name: 'Svelte', badgeColor: 'F1413D', textColor: 'FFFFFF' },
		{ name: 'Unittest', badgeColor: '4D0099', textColor: 'FFD700' },
		{ name: 'Jest', badgeColor: 'C21325', textColor: 'FFFFFF' },
		{ name: 'Cypress', badgeColor: 'E5E5E5', textColor: '058A5E' },
		{ name: 'Zod', badgeColor: '24524F', textColor: '058A5E' },
		{ name: 'Express', badgeColor: '404D59', textColor: '61DAFB' },
		{ name: 'Prisma', badgeColor: '991B1B', textColor: 'FFFFFF' },
		{ name: 'Vercel', badgeColor: '000000', textColor: 'FFFFFF' }
	];
</script>

<section class="about">
	<div>
		<h1>Hi, I'm Artem!</h1>
		I'm a software developer based in Amsterdam, Netherlands. I've worked as a backend dev with Python/Django
		and did projects with TypeScript (Next.js/React and Svelte).

		<h3>My main stack</h3>
		<div class="stack-list">
			{#each mainStack as tech}
				<img
					alt=""
					src={`https://img.shields.io/badge/${tech.name}-${tech.badgeColor}.svg?style=for-the-badge&logo=${tech.name}&logoColor=${tech.textColor}`}
				/>
			{/each}
		</div>

		<h3>Some tools I've used</h3>
		<div class="stack-list">
			{#each otherTools as tech}
				<img
					alt=""
					src={`https://img.shields.io/badge/${tech.name}-${tech.badgeColor}.svg?style=for-the-badge&logo=${tech.name}&logoColor=${tech.textColor}`}
				/>
			{/each}
		</div>
	</div>
	<div>
		<img class="portrait" alt="me" src="/portrait.jpg" width="350" height="350" />
		<div class="flex flex-row gap-6 justify-center">
			{#each icons as icon}
				<Icon path={icon} size="40px" />{/each}
		</div>
	</div>
</section>

<style>
	.about {
		display: flex;
		flex-direction: row;
		width: 100%;
		gap: 50px;
		padding: 40px;
		background-color: grey;
	}

	.portrait {
		min-width: 350px;
		min-height: 350px;
		border-radius: 50%;
		margin: 50px;
		box-shadow:
			0 0 0 5px var(--bg-color-left-panel),
			0 0 0 7px black;
	}

	.stack-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 10px;
		opacity: 80%;
	}

	.svg-icon {
		color: #01df44;
		transition-duration: 0.2s ease;
	}

	.svg-icon:hover {
		cursor: pointer;
		color: orange;
	}
</style>
