<script lang="ts">
	import BlogLinkCard from '$lib/Components/BlogLinkCard.svelte';
	import type { BlogPost } from '$lib/MarkdownRetriever';

	let { data }: { data: { blogs: BlogPost[] } } = $props();
</script>

<h1 class="font-heading-bold h-14 p-2 text-3xl font-bold text-white">blog</h1>

<a
	href={'/blog/tag'}
	class="font-heading-bold pt-0.5text-lg ml-2 flex h-full w-fit p-2 leading-5 text-white transition hover:bg-gray-500/40"
	>→ tags</a
>

{#each data.blogs as blog}
	<BlogLinkCard {blog} />
{/each}
