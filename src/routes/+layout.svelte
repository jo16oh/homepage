<script>
	import '../app.css';
</script>

<div class="flex w-full flex-col items-center justify-center">
	<div class="h-[146px] w-full"></div>
	<div class="mx-auto flex w-full max-w-[660px] flex-col items-start justify-start px-[5px]">
		<slot></slot>
	</div>
	<div class="h-[146px] w-full"></div>
</div>
