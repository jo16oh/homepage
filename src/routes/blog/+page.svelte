<script lang="ts">
	import type { BlogPost } from '$lib/MarkdownRetriever';

	let { data }: { data: { blogs: BlogPost[] } } = $props();
</script>

<h1 class="h-14 p-2 font-heading text-3xl font-bold text-white">blog</h1>

<a
	href={'/blog/tag'}
	class="ml-2 flex h-full w-fit p-2 font-heading text-lg leading-5 text-white transition hover:bg-gray-500/40"
	>→ tags</a
>

{#each data.blogs as blog}
	<div class="flex flex-col self-stretch border-b-2 py-4 pt-8">
		<div class="h-full py-1 font-heading text-sm text-white">
			{new Intl.DateTimeFormat('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })
				.format(blog.created_at)
				.replace(/\//g, '-')}
		</div>
		<a
			href={'/blog/' + blog.fileName}
			class="w-fit px-2 font-main text-2xl text-white transition hover:bg-gray-500/40"
			>{blog.title}</a
		>
		<div class="flex flex-row flex-wrap items-start justify-end">
			{#each blog.tags as tag}
				<a
					href={'/blog/tag/' + tag}
					class="mr-3 mt-4 inline rounded-md bg-gray-500/40 px-2 font-heading-light text-sm text-white transition hover:bg-gray-100/40"
					>{tag}</a
				>
			{/each}
		</div>
	</div>
{/each}
