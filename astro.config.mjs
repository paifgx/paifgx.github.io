// @ts-check
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
// Primary domain: garten.ai
// Also serves: garten.dev (via redirect or same build)
export default defineConfig({
  site: process.env.SITE_URL || "https://garten.ai",
  base: undefined,
  integrations: [vue(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
