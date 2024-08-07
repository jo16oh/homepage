import { MarkdownRetriever } from '$lib/MarkdownRetriever';
import { parse } from '$lib/parseMarkdown';
/** @type {import('./$types').EntryGenerator} */
export function entries() {
  const entries = Array.from(MarkdownRetriever.blog)
    .map((e) => e[0])
    .map((e) => {
      return {
        slug: e
      };
    });

  return [...entries];
}

export async function load({ params }: { params: { slug: string } }) {
  const doc = MarkdownRetriever.blog.get(params.slug);
  if (!doc) throw new Error(params.slug + ' not found!');

  return {
    doc: {
      ...doc
    },
    html: parse(doc.content)
  };
}
