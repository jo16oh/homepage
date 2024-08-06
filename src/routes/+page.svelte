<script>
  import Fade from '$lib/Components/Fade.svelte';
  import Fly from '$lib/Components/Fly.svelte';

  const paths = ['blog', 'journal', 'photography', 'about'];
  const style =
    'text-2xl text-white font-heading-bold hover:bg-gray-500/40 transition inline-block w-full m-0';
</script>

<Fade>
  <h1 class="h-14 p-2 font-heading-bold text-3xl text-white">jo16oh.dev</h1>
</Fade>
<div class="h-[70px]"></div>

<div class="grid grid-cols-1 gap-[30px] pl-[40px]">
  {#each paths as path, i}
    <Fly params={{ delay: 100 * (i + 1) }}>
      <a href={'/' + path} class={style}>{path}</a>
    </Fly>
  {/each}
  <Fly params={{ delay: 100 * (paths.length + 1) }}>
    <button class="transition hover:bg-gray-500/40"> <img src="/search.svg" alt="search" /></button>
  </Fly>
</div>
