<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import { fade, type FadeParams } from 'svelte/transition';

  type Props = { params?: FadeParams; children: Snippet };

  let { params = { duration: 300, delay: 0 }, children }: Props = $props();

  let loaded = $state(false);

  onMount(() => {
    loaded = true;
  });
</script>

{#if loaded}
  <div transition:fade={params} class="h-fit w-full">
    {@render children()}
  </div>
{/if}
