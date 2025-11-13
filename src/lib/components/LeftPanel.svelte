<script lang="ts">
</script>

<div class="info-panel">
	<div class="flex flex-col"></div>
</div>

<style>
	.info-panel {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		height: 500px;
		min-width: 250px;
		background-color: var(--bg-dark-transparent);
		border: 2px solid grey;
	}

	h2 {
		font-weight: 700;
	}

	ul {
		margin-top: 12px;
	}

	li {
		display: flex;
		align-items: baseline;
		gap: 10px;
	}

	.portrait {
		border-radius: 50%;
		height: 180px;
		width: 180px;
		margin: 20px;
		box-shadow:
			0 0 0 5px var(--bg-color-left-panel),
			0 0 0 7px black;
	}

	.svg {
		height: 12px;
		width: auto;
	}
</style>
