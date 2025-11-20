<script lang="ts">
	type Props = {
		title: string;
		path: string;
		url: string;
	};
	let { title, path, url }: Props = $props();
</script>

<a {title} href={url}>
	<svg
		class="svgicon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		width="40"
		height="40"
	>
		<path d={path}></path></svg
	>
</a>
