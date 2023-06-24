export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","btn-anim.js","favicon.ico","mask-icon.svg","pwa-192x192.png","pwa-512x512.png"]),
	mimeTypes: {".png":"image/png",".js":"application/javascript",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-a27074d2.js","imports":["_app/immutable/start-a27074d2.js","_app/immutable/chunks/index-cfd5f71f.js","_app/immutable/chunks/singletons-99924f00.js","_app/immutable/chunks/index-a1ab8557.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
