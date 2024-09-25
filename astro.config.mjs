import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site:
    process.env.NODE_ENV === "production"
      ? "https://paifgx.github.io/"
      : undefined,
  base: process.env.NODE_ENV === "production" ? "paifgx.github.io" : undefined,
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  integrations: [tailwind()],
});
