// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves this repo at https://murtzdhulz.github.io/bay_area_kings_cricket_website/.
// If we move to a custom domain, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://murtzdhulz.github.io',
  base: '/bay_area_kings_cricket_website',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
