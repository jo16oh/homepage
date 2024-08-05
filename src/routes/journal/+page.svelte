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

<h1 class="font-heading-bold h-14 p-2 text-3xl font-bold text-white">journal</h1>

<div class="h-32"></div>

{#each data.journals as month}
	<h2 class="font-heading-bold mb-8 pl-10 text-2xl font-bold text-white">
		<div class="inline-block h-full w-6">
			<img src="/circle.svg" alt="circle" class="inline align-middle" />
		</div>
		{month.month}
	</h2>
	{#each month.docs as journal}
		<div class="ml-[50px] h-full w-full border-l-2 border-l-white">
			<a
				href={'journal/' + journal.title}
				class="font-heading-bold ml-12 flex h-full w-fit p-2 text-lg leading-5 text-white transition hover:bg-gray-500/40"
			>
				<div class="h-ful inline-block w-8 pl-[9px] pr-[12px]">
					<img src="/white-cube.svg" alt="next article" class="inline align-middle" />
				</div>
				{journal.title}</a
			>
		</div>
	{/each}
	<div class="h-32"></div>
{/each}
