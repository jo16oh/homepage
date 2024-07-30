<script>
	const paths = ['blog', 'journal', 'photography', 'about'];
	const style =
		'text-xl text-white font-heading font-bold hover:bg-gray-500/40 inline-block w-auto m-0';
</script>

<h1 class="h-[58px] p-[8px] font-heading text-2xl text-white font-bold">jo16oh.dev</h1>
<div class="h-[50px]"></div>
<div class="grid grid-cols-1 pl-[40px] gap-[20px]">
	{#each paths as path}
		<a href={'/' + path} class={style}>{path}</a>
	{/each}
</div>
