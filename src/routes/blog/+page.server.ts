import { blogList } from '$lib/MarkdownRetriever';

export function load() {
  return {
    blogs: blogList
  };
}
