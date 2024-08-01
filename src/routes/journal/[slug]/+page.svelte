<script lang="ts">
	import type { MarkdownDocument } from '$lib/MarkdownRetriever';

	let { data }: { data: { doc: MarkdownDocument; html: string } } = $props();
</script>


<div
	class="fixed left-0 top-0 flex h-10 w-full flex-row justify-between opacity-60 max-[720px]:bg-[url('/bg-dark.jpg')]"
></div>
<a href="/journal" class="fixed left-0 top-0 hover:bg-gray-500/40">
	<img src="/back.svg" alt="back" /></a
>
<a href="/" class="fixed right-0 top-0 hover:bg-gray-500/40">
	<img src="/search.svg" alt="search" /></a
>

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

<div class="flex w-full flex-row flex-wrap">
	<div class="flex-[1 0 0] mr-auto flex min-w-[225px] justify-start gap-[9px]">
		{#if data.doc.prev}
			<a
				href={'/journal/' + data.doc.prev}
				class="flex h-full p-2 font-heading text-sm leading-5 text-white hover:bg-gray-500/40"
			>
				<img
					src="/white-cube.svg"
					alt="next article"
					class="inline pl-[9px] pr-[12px] align-middle"
				/>
				{data.doc.prev}</a
			>
		{/if}
	</div>

	<div class="flex-[1 0 0] ml-auto flex min-w-[225px] justify-end gap-[9px]">
		{#if data.doc.next}
			<a
				href={'/journal/' + data.doc.next}
				class="items-right flex h-full p-2 font-heading text-sm leading-5 text-white hover:bg-gray-500/40"
			>
				{data.doc.next}
				<img
					src="/white-cube.svg"
					alt="next article"
					class="inline pl-[12px] pr-[9px] align-middle"
				/>
			</a>
		{/if}
	</div>
</div>
