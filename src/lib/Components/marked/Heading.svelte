<script lang="ts">
  import type { Tokens } from 'marked';
  let { token }: { token: Tokens.Heading } = $props();

  const level = token.depth;
  const style = 'text-red-50 font-main font-bold py-1 mt-8 border-b-2 my-6 w-fit';

</script>

{#if level === 1}
  <h1 class={ "text-3xl " + style}><slot /></h1>
{:else if level === 2}
  <h2 class={ "text-2xl " + style}><slot /></h2>
{:else if level === 3}
  <h3 class={ "text-xl " + style}><slot /></h3>
{:else if level === 4}
  <h4 class={ "text-lg " + style}><slot /></h4>
{:else if level === 5}
  <h5 class={ "text-base " + style}><slot /></h5>
{:else if level === 6}
  <h6 class={ "text-sm " + style}><slot /></h6>
{/if}
