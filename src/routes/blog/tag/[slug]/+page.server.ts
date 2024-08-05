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
  const blogPaths = MarkdownRetriever.tags.get(params.slug);
  if (!blogPaths) throw new Error('Tag not found!');

  const blogs = blogPaths
    .map((path) => MarkdownRetriever.blog.get(path))
    .filter((post) => post !== undefined);

  return {
    tagName: params.slug,
    blogs: blogs
  };
}
