<script lang="ts">
  import type { Snippet } from 'svelte';
  type Props = { params?: { duration?: number; delay?: number }; children: Snippet };

  let { params = { duration: 300, delay: 0 }, children }: Props = $props();
</script>

<div
  class="h-fit w-full animate-fadeIn"
  style={`opacity: 0; animation-duration: ${params.duration}ms; animation-delay: ${params.delay}ms;`}
>
  {@render children()}
</div>
