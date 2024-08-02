import { MarkdownRetriever } from '$lib/MarkdownRetriever';

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	const entries = Array.from(MarkdownRetriever.tags)
		.map((e) => e[0])
		.map((e) => {
			return {
				slug: e
			};
		});

	return [...entries];
}

export async function load({ params }: { params: { slug: string } }) {
	const entries = MarkdownRetriever.tags.get(params.slug);
	if (!entries) throw new Error('Tag not found!');

	return {
		tagName: params.slug,
		entries: entries
	};
}
