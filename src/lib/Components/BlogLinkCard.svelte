<script lang="ts">
  import type { BlogPost } from '$lib/MarkdownRetriever';
  import Tag from './Tag.svelte';

  let { blog }: { blog: BlogPost } = $props();
</script>

<div class="mt-8 flex flex-col self-stretch border-b-2 py-4">
  <div class="my-1 h-full font-heading-light text-sm text-red-50">
    {new Intl.DateTimeFormat('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })
      .format(blog.created_at)
      .replace(/\//g, '-')}
  </div>
  <a
    href={'/blog/' + blog.fileName}
    class="w-fit p-1 font-heading-light text-2xl tracking-wide text-red-50 transition hover:bg-gray-500/40"
    >{blog.title}</a
  >
  <div class="mt-4 flex flex-row flex-wrap items-start justify-end">
    {#each blog.tags as tag}
      <Tag name={tag} />
    {/each}
  </div>
</div>
