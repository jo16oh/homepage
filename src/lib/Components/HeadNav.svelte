<script lang="ts">
  import { page } from '$app/stores';
  import Back from './icons/Back.svelte';
  import Search from './icons/Search.svelte';

  const back = $derived.by(() => {
    const url = $page.url.pathname;
    if (url === '/') return '';
    const path = url.split('/');
    path.pop();
    if (path.length === 1) return '/';
    return path.join('/');
  });
</script>

{#if back}
  <div
    class="fixed left-0 top-0 flex h-10 w-full flex-row justify-between opacity-60 max-[720px]:bg-[url('/bg-dark.webp')]"
  ></div>

  <a
    href={back}
    aria-label="back"
    class="fixed left-0 top-0 h-10 w-10 p-2.5 text-red-50 transition hover:bg-gray-500/40"
  >
    <Back />
  </a>

  <button
    aria-label="search"
    class="fixed right-0 top-0 h-10 w-10 p-2.5 text-red-50 transition hover:bg-gray-500/40"
  >
    <Search />
  </button>
{/if}
