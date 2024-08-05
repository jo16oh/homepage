<script lang="ts">
  let { name, number }: { name: string; number?: number } = $props();
</script>

<a
  href={'/blog/tag/' + name}
  class="mx-2 mt-2 inline rounded-md bg-gray-500/40 px-2 pt-0.5 font-heading-light text-sm text-white"
  >{name}{number ? ` (${number})` : ''}</a
>
