<script lang="ts">
  import BlogLinkCard from '$lib/Components/BlogLinkCard.svelte';
  import Fade from '$lib/Components/Fade.svelte';
  import Fly from '$lib/Components/Fly.svelte';
  import type { BlogPost } from '$lib/MarkdownRetriever';

  let { data }: { data: { blogs: BlogPost[] } } = $props();
</script>

<Fade>
  <h1 class="h-14 p-2 font-heading-bold text-3xl font-bold text-white">blog</h1>

  <a
    href={'/blog/tag'}
    class="ml-2 flex h-full w-fit p-2 pt-0.5 font-heading-bold text-lg leading-5 text-white transition hover:bg-gray-500/40"
    >→ tags</a
  >
</Fade>

{#each data.blogs as blog, i}
  <Fly params={{ delay: 50 * (i + 1) }}>
    <BlogLinkCard {blog} />
  </Fly>
{/each}
