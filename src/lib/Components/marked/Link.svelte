<script lang="ts">
import type { Tokens } from 'marked'

let { token }: { token: Tokens.Link } = $props();
</script>

<a href={token.href} class="text-sky-300 hover:underline">{token.text}</a>
