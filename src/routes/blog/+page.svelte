<script lang="ts">
	import Tag from '$lib/Components/Tag.svelte';
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
	<div class="mt-8 flex flex-col self-stretch border-b-2 py-4">
		<div class="h-full py-2 font-heading-light text-sm text-white">
			{new Intl.DateTimeFormat('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })
				.format(blog.created_at)
				.replace(/\//g, '-')}
		</div>
		<a
			href={'/blog/' + blog.fileName}
			class="w-fit px-2 font-heading-light text-2xl tracking-wide text-white transition hover:bg-gray-500/40"
			>{blog.title}</a
		>
		<div class="mt-4 flex flex-row flex-wrap items-start justify-end">
			{#each blog.tags as tag}
				<Tag name={tag} />
			{/each}
		</div>
	</div>
{/each}
