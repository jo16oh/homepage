<script lang="ts">
  import BlogLinkCard from '$lib/Components/BlogLinkCard.svelte';
  import Fade from '$lib/Components/Fade.svelte';
  import Fly from '$lib/Components/Fly.svelte';
  import type { BlogPost } from '$lib/MarkdownRetriever';

  let { data }: { data: { tagName: string; blogs: BlogPost[] } } = $props();
</script>

<svelte:head>
  <title>{'#' + data.tagName + ' | jo16oh.dev'}</title>
</svelte:head>

<Fade>
  <div class="flex">
    <div class="h-14 p-2 font-main text-3xl font-bold text-red-50">#</div>
    <h1 class="h-14 p-2 font-heading-bold text-3xl text-red-50">{data.tagName}</h1>
  </div>
</Fade>

<div>
  {#each data.blogs as blog, i}
    <Fly params={{ delay: 50 * (i + 1) }}>
      <BlogLinkCard {blog} />
    </Fly>
  {/each}
</div>
