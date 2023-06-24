import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.ico","mask-icon.svg","pwa-192x192.png","pwa-512x512.png"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-34cad590.js","imports":["_app/immutable/start-34cad590.js","_app/immutable/chunks/index-d5d686e6.js","_app/immutable/chunks/singletons-1401866a.js","_app/immutable/chunks/index-792efa8b.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
