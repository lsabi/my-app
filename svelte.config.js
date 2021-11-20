import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
            out: "build"
        }),
		prerender:
		{
			// Inverting the order of these two, will result
			// in triggering an error due to the different order
			entries: [
				"/api/post/1",
				"/api/post"
			]
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
