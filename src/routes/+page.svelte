<script>
	import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Title</title>
	<meta name="description" content="template-sveltekit-pwa" />
</svelte:head>

<section class="container__animation" in:fly={{ duration: 2000 }} out:fade>
	<h1 class="text-3xl font-bold underline">Hello world!</h1>

	<div class="w-[20%]">
		<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" colspan="2" class="px-6 py-3"> Dependences</th>
					</tr>
				</thead>
				<tbody>
					<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
						<td class="px-6 py-4"> Tailwind </td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
						<td class="px-6 py-4"> Skeleton </td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
						<td class="px-6 py-4"> PWA </td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
						<td class="px-6 py-4"> Icons: https://akveo.github.io/eva-icons </td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</section>
