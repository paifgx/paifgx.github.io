// @ts-check
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://garten.ai",
  base: undefined,
  integrations: [vue(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true,
        interval: 1000,
      },
      host: true, // Listen on all addresses (0.0.0.0) for container access
    },
  },
});
