<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import { fly, type FlyParams } from 'svelte/transition';

  type Props = { params?: FlyParams; children: Snippet };

  let { params = { y: 15, duration: 300, delay: 0 }, children }: Props = $props();

  let loaded = $state(false);

  onMount(() => {
    loaded = true;
  });
</script>

{#if loaded}
  <div in:fly={params} class="h-fit w-full">
    {@render children()}
  </div>
{/if}
