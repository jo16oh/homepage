<script lang="ts">
  import type { Tokens } from 'marked';

  let { token }: { token: Tokens.Codespan } = $props();
  const text = token.raw.slice(1, -1);
</script>

<code class="font-mono rounded-md bg-gray-800/40 px-2 py-1 text-red-50">{text}</code>
