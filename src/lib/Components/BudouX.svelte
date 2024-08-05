<script lang="ts">
  import { loadDefaultJapaneseParser } from 'budoux';

  let { text }: { text: string } = $props();

  const parser = loadDefaultJapaneseParser();
  const parsed = $derived(parser.translateHTMLString(text));
</script>

{@html parsed}
