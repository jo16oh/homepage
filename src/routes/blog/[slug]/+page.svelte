<script lang="ts">
  import BottomNav from '$lib/Components/BottomNav.svelte';
  import BudouX from '$lib/Components/BudouX.svelte';
  import Fade from '$lib/Components/Fade.svelte';
  import Markdown from '$lib/Components/Markdown.svelte';
  import Tag from '$lib/Components/Tag.svelte';
  import type { BlogPost } from '$lib/MarkdownRetriever';

  let { data }: { data: { doc: BlogPost; html: string } } = $props();
</script>

<svelte:head>
  <title>{data.doc.title + ' | jo16oh.dev'}</title>
</svelte:head>

<Fade params={{ duration: 100 }}>
  <div class="pb-2 font-heading-light text-sm text-red-50">
    {new Intl.DateTimeFormat('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })
      .format(data.doc.created_at)
      .replace(/\//g, '-')}
  </div>

  <h1 class="font-heading-light text-3xl font-normal tracking-wide text-red-50">
    <BudouX text={data.doc.title} />
  </h1>
</Fade>

<Fade params={{ duration: 150 }}>
  <div class="w-fill ml-4 mt-6 flex px-2">
    <div class="my-auto mt-2 h-full min-w-16 font-heading-light text-sm leading-5 text-red-50">
      tags :
    </div>
    <div class="inline-flex flex-row flex-wrap items-start justify-start">
      {#each data.doc.tags as tag}
        <Tag name={tag} />
      {/each}
    </div>
  </div>

  <div class="m-2 ml-4 w-auto px-2">
    <ul>
      {#each Object.entries(data.doc.frontmatter) as obj}
        <li class="py-2 font-heading-light text-xs leading-5 text-red-50">
          {obj[0]} : {obj[1]}
        </li>
      {/each}
    </ul>
  </div>

  <div class="h-16 w-auto"></div>

  <Markdown source={data.doc.content} />

  <div class="h-32 w-full"></div>

  <BottomNav prev={data.doc.prev} next={data.doc.next} />
</Fade>
