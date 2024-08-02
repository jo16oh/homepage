<script lang="ts">
	import type { BlogPost } from '$lib/MarkdownRetriever';

	let { data }: { data: { doc: BlogPost; html: string } } = $props();
</script>

<svelte:head>
	<title>{data.doc.title}</title>
</svelte:head>

<div class="font-heading-light text-sm text-white">
	{new Intl.DateTimeFormat('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })
		.format(data.doc.created_at)
		.replace(/\//g, '-')}
</div>

<h1 class="font-sans text-3xl text-white">
	{data.doc.title}
</h1>

<div class="w-fill ml-4 mt-6 flex px-2">
	<div class="h-fill min-w-16 font-heading-light text-sm leading-5 text-white">tags :</div>
	<div class="inline-flex flex-row flex-wrap items-start justify-start">
		{#each data.doc.tags as tag}
			<a
				href={'/blog/tag/' + tag}
				class="mr-3 mt-1 inline-block rounded-md bg-gray-500/40 px-2 font-heading-light text-sm text-white"
			>
				{tag}
			</a>
		{/each}
	</div>
</div>

<div class="m-2 ml-4 w-auto px-2">
	<ul>
		{#each Object.entries(data.doc.frontmatter) as obj}
			<li class="py-2 font-heading-light text-xs leading-5 text-white">
				{obj[0]} : {obj[1]}
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
				href={'/blog/' + data.doc.prev}
				class="flex h-full p-2 font-heading text-sm leading-5 text-white transition hover:bg-gray-500/40"
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
				href={'/blog/' + data.doc.next}
				class="items-right flex h-full p-2 font-heading text-sm leading-5 text-white transition hover:bg-gray-500/40"
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
