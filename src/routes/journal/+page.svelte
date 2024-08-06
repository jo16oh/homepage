<script lang="ts">
  import Fade from '$lib/Components/Fade.svelte';
  import Fly from '$lib/Components/Fly.svelte';
  import Circle from '$lib/Components/icons/Circle.svelte';
  import Cube from '$lib/Components/icons/Cube.svelte';
  import type { MarkdownDocument } from '$lib/MarkdownRetriever';

  let {
    data
  }: {
    data: {
      journals: {
        month: string;
        docs: MarkdownDocument[];
      }[];
    };
  } = $props();
</script>

<Fade>
  <h1 class="h-14 p-2 font-heading-bold text-3xl font-bold text-red-50">journal</h1>
</Fade>

<div class="h-32"></div>

{#each data.journals as month, i}
  <Fly params={{ delay: 150 * (i + 1) }}>
    <div class="mb-8 h-fit w-full pl-10">
      <h2 class="font-heading-bold text-2xl font-bold text-red-50">
        <div class="mx-2 inline-block h-2 w-2"><Circle /></div>
        {month.month}
      </h2>
    </div>
    {#each month.docs as journal, i2}
      <Fly params={{ delay: 150 * (i + 1) + 4 * (i2 + 1) }}>
        <div class="ml-[50px] h-full w-full border-l-2 border-l-white">
          <a
            href={'journal/' + journal.title}
            class="ml-12 flex h-full w-fit p-2 font-heading-bold text-lg leading-5 text-red-50 transition hover:bg-gray-500/40"
          >
            <div class="ml-2 mr-5 inline-block h-1.5 w-1.5 align-middle">
              <Cube />
            </div>
            {journal.title}</a
          >
        </div>
      </Fly>
    {/each}
    <div class="h-32"></div>
  </Fly>
{/each}
