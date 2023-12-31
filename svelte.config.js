// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// preprocess: preprocess(),
	kit: {
		adapter: adapter()
	},
	preprocess: [vitePreprocess({})]
};

export default config;
