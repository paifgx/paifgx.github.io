// @ts-check
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site:
    process.env.NODE_ENV === "production"
      ? "https://paifgx.github.io/"
      : undefined,
  base: undefined,
  integrations: [vue(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
