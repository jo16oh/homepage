<script lang="ts">
  import BudouX from './BudouX.svelte';
  import Cube from './icons/Cube.svelte';

  type Props = {
    prev?: {
      path: string;
      title: string;
    };
    next?: {
      path: string;
      title: string;
    };
  };

  let { prev, next }: Props = $props();
</script>

<div class="flex w-full flex-row flex-wrap">
  <div class="flex-[1 0 0] mr-auto flex min-w-[225px] justify-start gap-[9px]">
    {#if prev}
      <a
        href={prev.path}
        class="font-heading flex h-full p-2 font-heading-light text-sm leading-5 text-red-50 transition hover:bg-gray-500/40"
      >
        <div class="ml-[12px] mr-[9px] inline-block h-1 w-1 align-middle">
          <Cube />
        </div>
        <BudouX text={prev.title} /></a
      >
    {/if}
  </div>

  <div class="flex-[1 0 0] ml-auto flex min-w-[225px] justify-end gap-[9px]">
    {#if next}
      <a
        href={next.path}
        class="items-right font-heading flex h-full p-2 font-heading-light text-sm leading-5 text-red-50 transition hover:bg-gray-500/40"
      >
        <BudouX text={next.title} />
        <div class="ml-[12px] mr-[9px] inline-block h-1 w-1 align-middle">
          <Cube />
        </div>
      </a>
    {/if}
  </div>
</div>
