<script lang="ts">
	let { data }: { data: { tagName: string; entries: string[] } } = $props();
</script>

<div class="flex">
	<div class="h-14 p-2 font-main text-3xl font-bold text-white">#</div>
	<h1 class="font-heading-bold h-14 p-2 text-3xl text-white">{data.tagName}</h1>
</div>

<div class="ml-8">
	{#each data.entries as entry}
		<div>
			<a
				href={'/blog/' + entry}
				class="ml-6 flex h-full w-fit p-2 font-heading-light text-lg leading-5 text-white transition hover:bg-gray-500/40"
			>
				<img
					src="/white-cube.svg"
					alt="next article"
					class="inline pl-[9px] pr-[12px] align-middle"
				/>
				{entry}</a
			>
		</div>
	{/each}
</div>
