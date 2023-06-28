<script>
	/**
	 * @type {boolean}
	 */
	export let show;
	function handleClick() {
		show = false;
	}
</script>

<!-- {#if show} -->
show:{show}
<br />
<div class="fixed top-0 bg-black bg-opacity-50 h-screen w-full backdrop-blur transition-all {show ? 'opacity-1' : 'opacity-0 invisible '}">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div id="no_modal" class="absolute w-full h-screen" on:click={handleClick} />
	<div class=" dialog absolute w-[90%] p-5 rounded-2xl max-w-[500px] min-h-[200px]  max-h-[500px] overflow-auto h-fit-content right-0 mx-auto bottom-0 top-0 left-0 bg-white">
		<h2 class="text-2xl font-bold text-gray-700">
			<slot name="title" />
		</h2>
		<hr class="mt-2 mb-2" />
	</div>
	<!-- <div class="absolute bottom-0">
            buttons
            <slot name="buttons" />
        </div> -->
</div>

<!-- {/if} -->
<style>
	.h-fit-content {
		height: fit-content;
		margin: auto;
	}
</style>
