<script lang="ts">
  import BlogLinkCard from '$lib/Components/BlogLinkCard.svelte';
  import type { BlogPost } from '$lib/MarkdownRetriever';

  let { data }: { data: { tagName: string; blogs: BlogPost[] } } = $props();
</script>

<div class="flex">
  <div class="h-14 p-2 font-main text-3xl font-bold text-white">#</div>
  <h1 class="h-14 p-2 font-heading-bold text-3xl text-white">{data.tagName}</h1>
</div>

<div class="ml-8">
  {#each data.blogs as blog}
    <BlogLinkCard {blog} />
  {/each}
</div>
