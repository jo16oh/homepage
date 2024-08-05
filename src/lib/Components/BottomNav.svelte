<script lang="ts">
	type Props = {
		prev?: {
			path: string;
			title: string;
		};
		next?: {
			path: string;
			title: string;
		};
	};

	let { prev, next }: Props = $props();
</script>

<div class="flex w-full flex-row flex-wrap">
	<div class="flex-[1 0 0] mr-auto flex min-w-[225px] justify-start gap-[9px]">
		{#if prev}
			<a
				href={prev.path}
				class="flex h-full p-2 font-heading font-heading-light text-sm leading-5 text-white transition hover:bg-gray-500/40"
			>
				<div class="inline-block h-full w-6 pl-[9px] pr-[12px]">
					<img src="/white-cube.svg" alt="next article" class="inline align-middle" />
				</div>
				{prev.title}</a
			>
		{/if}
	</div>

	<div class="flex-[1 0 0] ml-auto flex min-w-[225px] justify-end gap-[9px]">
		{#if next}
			<a
				href={next.path}
				class="items-right flex h-full p-2 font-heading font-heading-light text-sm leading-5 text-white transition hover:bg-gray-500/40"
			>
				{next.title}
				<div class="inline-block h-full w-6 pl-[12px] pr-[9px]">
					<img src="/white-cube.svg" alt="next article" class="inline align-middle" />
				</div>
			</a>
		{/if}
	</div>
</div>
