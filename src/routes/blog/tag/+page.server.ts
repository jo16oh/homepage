import { MarkdownRetriever } from '$lib/MarkdownRetriever';

export function load() {
  return {
    tags: MarkdownRetriever.tags
  };
}
