<script lang="ts">
  import Fade from '$lib/Components/Fade.svelte';
  import Fly from '$lib/Components/Fly.svelte';
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
    <h2 class="mb-8 pl-10 font-heading-bold text-2xl font-bold text-red-50">
      <div class="inline-block h-full w-6">
        <img src="/circle.svg" alt="circle" class="inline align-middle" />
      </div>
      {month.month}
    </h2>
    {#each month.docs as journal, i2}
      <Fly params={{ delay: 150 * (i + 1) + 4 * (i2 + 1) }}>
        <div class="ml-[50px] h-full w-full border-l-2 border-l-white">
          <a
            href={'journal/' + journal.title}
            class="ml-12 flex h-full w-fit p-2 font-heading-bold text-lg leading-5 text-red-50 transition hover:bg-gray-500/40"
          >
            <div class="h-ful inline-block w-8 pl-[9px] pr-[12px]">
              <img src="/white-cube.svg" alt="next article" class="inline align-middle" />
            </div>
            {journal.title}</a
          >
        </div>
      </Fly>
    {/each}
    <div class="h-32"></div>
  </Fly>
{/each}
