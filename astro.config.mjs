// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site:
    process.env.NODE_ENV === "production"
      ? "https://paifgx.github.io/"
      : undefined,
  base: process.env.NODE_ENV === "production" ? "paifgx.github.io" : undefined,
  integrations: [tailwind(), vue(), sitemap()],
});
