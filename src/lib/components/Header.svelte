<script lang="ts">
	import { page, changePage } from '$lib/stores/page';
</script>

<header class="bg-gray-900">
	<div class="w-[300px] h-50px">Artem Rasskazimov</div>
	<ul class="navigation">
		<li>
			<button class="border-b-4 border-b-amber-600" on:click={() => changePage('about')}
				>About me</button
			>
		</li>
		<li>
			<button class="border-b-amber-500" on:click={() => changePage('projects')}>Projects</button>
		</li>
		<li>
			<button class="border-b-amber-400" on:click={() => changePage('cv')}>CV</button>
		</li>
	</ul>

	<div class="min-w-[300px]"></div>
</header>

<style>
	header {
		display: grid;
		grid-template-columns: 300px auto 300px;
		width: 100%;
		background-image: url('$lib/images/foggy.png');
		background-size: cover;
		background-position: bottom;
		opacity: 90%;
		align-items: center;
		font-size: xx-large;
		height: 100px;
		padding-left: var(--horizontal-padding);
		padding-right: var(--horizontal-padding);
		color: var(--color-text);
	}

	header * {
		color: inherit;
	}

	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--background);
		background-size: contain;
		gap: 30px;
	}

	li {
		display: flex;
		flex-direction: column;
		width: 120px;
		text-align: center;
		vertical-align: middle;
		/*background-color: darkgrey;*/
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 30px;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	button:hover {
		color: var(--color-theme-1);
	}
</style>
