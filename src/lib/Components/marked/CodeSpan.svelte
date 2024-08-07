<script lang="ts">
import type { Tokens } from 'marked'

let { token }: { token: Tokens.Codespan } = $props();
</script>

<code class="text-red-50 bg-gray-800/40 rounded-md px-2 py-1 font-mono">${token.text}</code>
