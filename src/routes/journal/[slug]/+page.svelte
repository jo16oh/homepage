<script lang="ts">
  import type { MarkdownDocument } from '$lib/MarkdownRetriever';
  import BottomNav from '$lib/Components/BottomNav.svelte';
  import Fade from '$lib/Components/Fade.svelte';
  import Markdown from '$lib/Components/Markdown.svelte';

  let { data }: { data: { doc: MarkdownDocument; html: string } } = $props();
</script>

<svelte:head>
  <title>{data.doc.title + ' | jo16oh.dev'}</title>
</svelte:head>

<Fade params={{ duration: 100 }}>
  <h1 class="font-heading-bold text-3xl font-bold text-red-50">
    {data.doc.fileName}
  </h1>
</Fade>

<Fade params={{ duration: 150 }}>
  <div class="mt-3 w-full px-2">
    <ul>
      {#each Object.entries(data.doc.frontmatter) as obj}
        <li class="font-heading-light text-xs leading-5 text-red-50">
          {obj[0]} ： {obj[1]}
        </li>
      {/each}
    </ul>
  </div>

  <div class="h-16 w-full"></div>

  <div class="w-full px-1 sm:px-3">
    <Markdown source={data.doc.content} />
  </div>

  <div class="h-32 w-full"></div>

  <BottomNav prev={data.doc.prev} next={data.doc.next} />
</Fade>
