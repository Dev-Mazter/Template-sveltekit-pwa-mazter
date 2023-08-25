<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../styles/global.css'
	import { onMount } from 'svelte';
	// @ts-ignore
	import { pwaInfo } from 'virtual:pwa-info';


	/**
	 * @type {typeof import("$lib/config/ReloadPrompt.svelte").default}
	 */
	let ReloadPrompt: any;
	let showBtnPWA = false;
	let msgError = '';

	onMount(async () => {
		if (pwaInfo) {
			// @ts-ignore
			const { registerSW } = await import('virtual:pwa-register');
			registerSW({
				immediate: true,
				onRegistered(r: any) {
					r &&
						setInterval(() => {
							// console.log('Checking for sw update');
							r.update();
						}, 20000);
				}
				// onRegisterError(error: any) {
				// 	// console.log('SW registration error', error);
				// }
			});
		}
	});

	onMount(async () => {
		pwaInfo && (ReloadPrompt = (await import('$lib/config/ReloadPrompt.svelte')).default);
	});

	// Enbale Install PWA
	onMount(() => {
		showInstallPrompt();
	});

	// Enbale Install PWA
	function showInstallPrompt() {
		// Verificar si la aplicación ya se ejecuta en modo "standalone" como PWA independiente
		if (window.matchMedia('(display-mode: standalone)').matches) {
			msgError = 'Ya es una PWA';
			return;
		}

		// El navegador no es compatible con la instalación de PWA.
		if (!window.navigator || !window.navigator.userAgent) {
			msgError = 'El navegador no es compatible';
			showBtnPWA = false;
			return;
		}

		// Si no es compatible con la instalación de PWA, no realizar ninguna acción adicional
		if (valideBrowser()) {
			msgError = 'El navegador no es chome, edge o safary';
			showBtnPWA = false;
			return;
		}

		showBtnPWA = true;
		window.addEventListener('beforeinstallprompt', (event) => {
			event.preventDefault();
			let installPrompt = event;
			const installButton = document.getElementById('install-pwa-button');
			if (installButton) {
				installButton.style.display = 'block';
				installButton.addEventListener('click', () => {
					try {
						// @ts-ignore
						installPrompt.prompt();
						// @ts-ignore
						installPrompt.userChoice.then((choiceResult: any) => {
							if (choiceResult.outcome === 'accepted') {
								console.log('La PWA fue instalada por el usuario.');
							} else {
								console.log('El usuario canceló la instalación de la PWA.');
							}
							installButton.style.display = 'none';
						});
						// @ts-ignore
						installPrompt = null;
					} catch (error) {}
				});
			}
		});

		function valideBrowser() {
			const userAgent = window.navigator.userAgent.toLowerCase();
			const isChrome = /chrome/.test(userAgent);
			const isEdge = /edg/.test(userAgent);
			const isSafari = /safari/.test(userAgent);

			if (!isChrome && !isEdge && !isSafari) {
				showBtnPWA = false;
				return true;
			}
		}
	}

	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : '';
</script>

<svelte:head>
	{@html webManifest}
</svelte:head>

{#if ReloadPrompt}
	<svelte:component this={ReloadPrompt} />
{/if}

<!-- Enbale Install PWA -->
{#if showBtnPWA}
	<button id="install-pwa-button" style="display: block;"> Install </button>
{/if}

<slot />

<br />
<br />
<br />
<br />
{msgError}
