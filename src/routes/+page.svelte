<script>
  import Fade from '$lib/Components/Fade.svelte';
  import Fly from '$lib/Components/Fly.svelte';
  import Search from '$lib/Components/icons/Search.svelte';

  const paths = ['blog', 'journal', 'photography', 'about'];
  const style =
    'text-2xl text-red-50 font-heading-bold hover:bg-gray-500/40 transition inline-block w-full py-1 px-2';
</script>

<svelte:head>
  <title>jo16oh.dev</title>
</svelte:head>

<Fade>
  <h1 class="h-14 p-2 font-heading-bold text-3xl text-red-50">jo16oh.dev</h1>
</Fade>

<div class="h-[70px]"></div>

<div class="ml-8 grid grid-cols-1 gap-6">
  {#each paths as path, i}
    <Fly params={{ delay: 100 * (i + 1) }}>
      <a href={'/' + path} class={style}>{path}</a>
    </Fly>
  {/each}
  <Fly params={{ delay: 100 * (paths.length + 1) }}>
    <button class="h-10 w-10 px-2 py-1 text-red-50 transition hover:bg-gray-500/40"
      ><Search /></button
    >
  </Fly>
</div>
