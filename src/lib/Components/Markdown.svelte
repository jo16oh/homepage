<script lang="ts">
  import Markdown from '@magidoc/plugin-svelte-marked';
  import Paragraph from './marked/Paragraph.svelte';
  import Heading from './marked/Heading.svelte';

  let { source }: { source: string } = $props()
</script>

<Markdown
  { source }
  renderers={{
    paragraph: Paragraph,
    heading: Heading
  }}
/>
