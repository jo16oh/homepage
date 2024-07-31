<script lang="ts">
	let { heading, main }: { heading: string; main: string } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href={'https://fonts.googleapis.com/css2?family=Courier+Prime&family=Sawarabi+Gothic&display=swap' +
			heading}
		rel="stylesheet"
	/>
	<link
		href={'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap' + main}
		rel="stylesheet"
	/>
</svelte:head>
