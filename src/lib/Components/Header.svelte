<script lang="ts">
	import { page } from '$app/stores';

	const back = $derived.by(() => {
		const url = $page.url.pathname;
		if (url === '/') return '';
		const path = url.split('/');
		path.pop();
		if (path.length === 1) return '/';
		return path.join('/');
	});
</script>

{#if back}
	<div
		class="fixed left-0 top-0 flex h-10 w-full flex-row justify-between opacity-60 max-[720px]:bg-[url('/bg-dark.jpg')]"
	></div>
	<a href={back} class="fixed left-0 top-0 hover:bg-gray-500/40">
		<img src="/back.svg" alt="back" /></a
	>
	<button class="fixed right-0 top-0 hover:bg-gray-500/40">
		<img src="/search.svg" alt="search" /></button
	>
{/if}
