<script lang="ts">
  import Tag from '$lib/Components/Tag.svelte';

  let { data }: { data: { tags: Map<string, string[]> } } = $props();

  const tags = Array.from(data.tags)
    .sort()
    .sort((a, b) => b[1].length - a[1].length);
</script>

<h1 class="h-14 p-2 font-heading-bold text-3xl text-white">tags</h1>

<div class="w-fill flex px-2">
  <div class="inline-flex flex-row flex-wrap items-start justify-start">
    {#each tags as tag}
      <Tag name={tag[0]} number={tag[1].length} />
    {/each}
  </div>
</div>
