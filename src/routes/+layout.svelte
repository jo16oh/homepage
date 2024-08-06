<script>
  import HeadNav from '$lib/Components/HeadNav.svelte';
  import '../app.css';
</script>

<HeadNav />

<div class="flex w-full flex-col items-center justify-center py-36">
  <div class="mx-auto flex w-full max-w-[660px] flex-col items-start justify-start px-1">
    <slot></slot>
  </div>
</div>
