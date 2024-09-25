import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://paifgx.github.io/",
  base: "paifgx.github.io",
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  integrations: [tailwind()],
});
