<script lang="ts">
</script>

<div class="info-panel">
	<img class="portrait" alt="me" src="/portrait.jpg" />
	<div class="flex flex-col">
		<h2>Artem Rasskazimov</h2>
		<h4>Software engineer</h4>
		<ul>
			<li><img class="svg" alt="location icon" src="/location.svg" />Amsterdam, Netherlands</li>
			<li>
				<img class="svg" alt="linkedin icon" src="/linkedin.svg" /><a
					href="http://linkedin.com/in/artemrasskazimov/">artemrasskazimov</a
				>
			</li>
			<li>
				<img class="svg" alt="github icon" src="/github.svg" /><a href="https://github.com/sozhran"
					>sozhran</a
				>
			</li>
			<li>
				<img class="svg" alt="telegram icon" src="/telegram.svg" /><a href="https://t.me/sozhran"
					>sozhran</a
				>
			</li>
		</ul>
	</div>
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
