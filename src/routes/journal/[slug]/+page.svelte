<script lang="ts">
	import { marked } from 'marked';
	import type { MarkdownDocument } from '$lib/MarkdownRetriever';
	let { data }: { data: { doc: MarkdownDocument } } = $props();

	const html = marked.parse(data.doc.content);
</script>

<h1 class="text-white text-2xl font-bold font-heading">
	{data.doc.fileName}
</h1>

<div>{@html html}</div>
