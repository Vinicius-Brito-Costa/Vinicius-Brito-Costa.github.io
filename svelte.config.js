import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
            runtime: 'nodejs18.x',
            fallback: undefined,
          })
	}
};

export default config;
