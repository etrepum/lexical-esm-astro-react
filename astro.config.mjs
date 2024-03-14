import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    ignored: ["vendored_node_modules/**/*"],
		build: { target: 'esnext' },
		optimizeDeps: {
			esbuildOptions: {
				target: 'esnext',
			},
			exclude: [
				"lexical",
			],
		},
    ssr: {
  		noExternal: [/^(lexical|@lexical\/.*)$/]
	  }
  }
});