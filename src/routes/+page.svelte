<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	onMount(async () => {
		// @ts-ignore
		(await import('../webkit/btn-anim.js')).default;
		// Check Online or offline page
		if (navigator.onLine === true) {
			// alert('online')
			// document.body.setAttribute('data-sveltekit-preload-data', 'off');
		}else{
			alert('offline...')
		}
	});
</script>

<svelte:head>
	<title>Title</title>
	<meta name="description" content="template-sveltekit-pwa" />
</svelte:head>
<h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

<section class="container__animation" in:fly={{ duration: 2000 }} out:fade>Hello world!!</section>
