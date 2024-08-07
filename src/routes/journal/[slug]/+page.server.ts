import { MarkdownRetriever } from '$lib/MarkdownRetriever';
/** @type {import('./$types').EntryGenerator} */
export function entries() {
  const entries = Array.from(MarkdownRetriever.journal)
    .map((e) => e[0])
    .map((e) => {
      return {
        slug: e
      };
    });

  return [...entries];
}

export async function load({ params }: { params: { slug: string } }) {
  const doc = MarkdownRetriever.journal.get(params.slug);
  if (!doc) throw new Error('Markdown file not found!');

  return {
    doc: {
      ...doc
    }
  };
}
