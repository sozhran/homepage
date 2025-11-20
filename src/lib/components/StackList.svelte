<script lang="ts">
	import type { Stack } from '$lib/data/stack';

	let { items }: { items: Stack[] } = $props();
</script>

<div class="stack-list">
	{#each items as item}
		<img
			alt=""
			src={`https://img.shields.io/badge/${item.name}-${item.badgeColor}.svg?style=for-the-badge&logo=${item.name}&logoColor=${item.textColor}`}
		/>
	{/each}
</div>

<style>
	.stack-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 10px;
		opacity: 80%;
	}
</style>
