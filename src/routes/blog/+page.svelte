<script lang="ts">
  import BlogLinkCard from '$lib/Components/BlogLinkCard.svelte';
  import Fade from '$lib/Components/Fade.svelte';
  import type { BlogPost } from '$lib/MarkdownRetriever';

  let { data }: { data: { blogs: BlogPost[] } } = $props();
</script>

<svelte:head>
  <title>blog | jo16oh.dev</title>
</svelte:head>

<Fade>
  <h1 class="h-14 p-2 font-heading-bold text-3xl font-bold text-red-50">blog</h1>

  <a
    href={'/blog/tag'}
    class="ml-2 flex h-full w-fit p-2 font-heading-bold text-lg leading-5 text-red-50 transition hover:bg-gray-500/40"
    >→ all tags</a
  >
</Fade>

{#each data.blogs as blog, i}
  <Fade params={{ delay: 50 * (i + 1) }}>
    <BlogLinkCard {blog} />
  </Fade>
{/each}
