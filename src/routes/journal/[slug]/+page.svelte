<script lang="ts">
	import type { MarkdownDocument } from '$lib/MarkdownRetriever';
	import BottomNav from '$lib/Components/BottomNav.svelte';

	let { data }: { data: { doc: MarkdownDocument; html: string } } = $props();
</script>

<svelte:head>
	<title>{data.doc.title}</title>
</svelte:head>

<h1 class="font-heading text-3xl font-bold text-white">
	{data.doc.fileName}
</h1>

<div class="mt-3 w-auto px-2">
	<ul>
		{#each Object.entries(data.doc.frontmatter) as obj}
			<li class="font-heading-light text-xs leading-5 text-white">
				{obj[0]} ： {obj[1]}
			</li>
		{/each}
	</ul>
</div>

<div class="h-16 w-auto"></div>

<div class="w-auto px-1 sm:px-3">
	{@html data.html}
</div>

<div class="h-32 w-full"></div>

<BottomNav prev={data.doc.prev} next={data.doc.next} />
