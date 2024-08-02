<script lang="ts">
	import type { Tags } from '$lib/MarkdownRetriever';

	let { data }: { data: { tags: Tags } } = $props();

	const tags = Array.from(data.tags)
		.sort()
		.sort((a, b) => b[1].length - a[1].length);
</script>

<h1 class="h-14 p-2 font-heading text-3xl font-bold text-white">tags</h1>

<div class="w-fill ml-4 mt-6 flex px-2">
	<div class="inline-flex flex-row flex-wrap items-start justify-start">
		{#each tags as tag}
			<a
				href={'/blog/tag/' + tag[0]}
				class="mr-3 mt-1 inline rounded-md bg-gray-500/40 px-2 font-heading-light text-sm text-white"
				>{tag[0]} ({tag[1].length})</a
			>
		{/each}
	</div>
</div>
