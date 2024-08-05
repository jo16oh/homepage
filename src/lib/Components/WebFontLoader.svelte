<script lang="ts">
  import { onMount } from 'svelte';

  let loaded = $state(false);

  onMount(() => {
    import('webfontloader').then((WebFontLoader) => {
      WebFontLoader.load({
        custom: {
          families: ['Courier Prime'],
          urls: ['/CourierPrime.woff2', '/CourierPrime-SemiBold.woff2']
        },
        active: () => {
          loaded = true;
        },
        inactive: () => {
          loaded = true;
        }
      });
    });
  });
</script>

{#if loaded}
  <slot />
{/if}
