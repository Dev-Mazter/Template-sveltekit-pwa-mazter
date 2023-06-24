import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';

declare let self: ServiceWorkerGlobalScope;

self.addEventListener('message', (event: { data: { type: string } }) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

precacheAndRoute(self.__WB_MANIFEST || []);

cleanupOutdatedCaches();

const allowlist: RegExp[] | undefined = import.meta.env.DEV ? [/^\/$/] : undefined;

registerRoute(
  new NavigationRoute(createHandlerBoundToURL('/xx'), {
    allowlist,
  })
);
