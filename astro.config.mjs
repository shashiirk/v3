import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	server: {
		port: 3000
	},
	site: 'https://shashikanth.dev',
	integrations: [tailwind(), react(), sitemap()]
});
