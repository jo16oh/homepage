<script lang="ts">
import type { Tokens } from 'marked'

let { token }: { token: Tokens.Code } = $props();
</script>

<pre class='text-red-50 bg-gray-800/40 rounded-lg p-4 font-mono'><code class={`lang-${token.lang}`}>{token.text}</code></pre>
