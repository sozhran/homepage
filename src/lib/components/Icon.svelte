<script lang="ts">
	let { path, size }: { path: string; size: string } = $props();
</script>

<svg
	class="svgicon"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 512 512"
	width={size}
	height={size}
>
	<path d={path}></path></svg
>
