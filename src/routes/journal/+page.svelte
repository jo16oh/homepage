<script lang="ts">
	import type { MarkdownDocument } from '$lib/MarkdownRetriever';

	let {
		data
	}: {
		data: {
			journals: {
				month: string;
				docs: MarkdownDocument[];
			}[];
		};
	} = $props();
</script>

<h1 class="h-14 p-2 font-heading text-3xl font-bold text-white">journal</h1>

<div class="h-32"></div>

{#each data.journals as month}
	<h2 class="mb-8 pl-10 font-heading text-2xl font-bold text-white">
		<img src="/circle.svg" alt="circle" class="inline align-middle" />
		{month.month}
	</h2>
	{#each month.docs as journal}
		<div class="ml-[50px] h-full w-full border-l-2 border-l-white">
			<a
				href={'journal/' + journal.title}
				class="ml-12 flex h-full w-fit p-2 font-heading text-lg leading-5 text-white transition hover:bg-gray-500/40"
			>
				<img
					src="/white-cube.svg"
					alt="next article"
					class="inline pl-[9px] pr-[12px] align-middle"
				/>
				{journal.title}</a
			>
		</div>
	{/each}
	<div class="h-32"></div>
{/each}
