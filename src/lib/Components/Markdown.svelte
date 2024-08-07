<script lang="ts">
  import Markdown from '@magidoc/plugin-svelte-marked';
  import Image from '$lib/Components/marked/Image.svelte';
  import Paragraph from './marked/Paragraph.svelte';
  import Heading from './marked/Heading.svelte';

  let { source }: { source: string } = $props()
</script>

<Markdown
  { source }
  renderers={{
    image: Image,
    paragraph: Paragraph,
    heading: Heading
  }}
/>
