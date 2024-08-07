<script lang="ts">
  import Markdown from '@magidoc/plugin-svelte-marked';
  import Image from '$lib/Components/marked/Image.svelte';
  import Paragraph from './marked/Paragraph.svelte';
  import Heading from './marked/Heading.svelte';
  import CodeBlock from './marked/CodeBlock.svelte';
  import CodeSpan from './marked/CodeSpan.svelte';
  import Link from './marked/Link.svelte';
  import Blockquote from './marked/Blockquote.svelte';

  let { source }: { source: string } = $props();
</script>

<Markdown
  {source}
  renderers={{
    image: Image,
    paragraph: Paragraph,
    heading: Heading,
    code: CodeBlock,
    codespan: CodeSpan,
    link: Link,
    blockquote: Blockquote
  }}
/>
