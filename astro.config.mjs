// @ts-check
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
      },
    },
  },
});
