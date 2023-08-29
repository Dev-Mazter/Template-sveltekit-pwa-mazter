<script>
	import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Title</title>
	<meta name="description" content="template-sveltekit-pwa" />
</svelte:head>

<section class="container__animation" in:fly={{ duration: 2000 }} out:fade><h1 class="text-3xl font-bold underline">Hello world!</h1></section>
