import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		
	},
	server: {
		fs: {
			allow: ["./static",]
		}
	}
};

export default config;
