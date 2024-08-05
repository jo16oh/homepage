<script>
  const paths = ['blog', 'journal', 'photography', 'about'];
  const style =
    'text-2xl text-white font-heading-bold hover:bg-gray-500/40 transition inline-block w-auto m-0';
</script>

<h1 class="h-14 p-2 font-heading-bold text-3xl text-white">jo16oh.dev</h1>
<div class="h-[70px]"></div>
<div class="grid grid-cols-1 gap-[30px] pl-[40px]">
  {#each paths as path}
    <a href={'/' + path} class={style}>{path}</a>
  {/each}
  <button class="transition hover:bg-gray-500/40"> <img src="/search.svg" alt="search" /></button>
</div>
