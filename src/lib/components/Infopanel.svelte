<script lang="ts">
	import portrait from '$lib/images/portrait.jpg';
</script>

<div class="info-panel">
	<img class="portrait" alt="me" src={portrait} />
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
		</ul>
		<p>Lorem ipsum etc</p>
	</div>
</div>

<style>
	.info-panel {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		background-color: var(--bg-color-left-panel);
		height: 500px;
		width: 250px;
		border: 2px solid orange;
	}

	h2,
	h3 {
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
