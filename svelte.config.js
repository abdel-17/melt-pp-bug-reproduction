import { preprocessMeltUI } from "@melt-ui/pp";
import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import sequence from "svelte-sequential-preprocessor";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// 																		JS	TS
	// preprocess: preprocessMeltUI(),									// BAD	BAD
	// preprocess: vitePreprocess(),									// GOOD GOOD
	// preprocess: sequence([preprocessMeltUI()]),						// GOOD GOOD
	// preprocess: sequence([vitePreprocess()]),						// GOOD BAD
	// preprocess: sequence([vitePreprocess(), preprocessMeltUI()]), 	// GOOD BAD
	// preprocess: sequence([preprocessMeltUI(), vitePreprocess()]),	// GOOD BAD
	// preprocess: [vitePreprocess(), preprocessMeltUI()],				// BAD	BAD
	// preprocess: [preprocessMeltUI(), vitePreprocess()],				// BAD	BAD
	kit: {
		adapter: adapter(),
	},
};
export default config;
