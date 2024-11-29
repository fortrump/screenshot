import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { CONFIG, LANGUAGES_CODE } from "./src/lib/config";

export default defineConfig({
  site: CONFIG.website,
  trailingSlash: "ignore",
  compressHTML: false,
  i18n: {
    defaultLocale: "en",
    locales: CONFIG.locals,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    tailwind(),
    react(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: LANGUAGES_CODE,
      },
    }),
  ],
  output: "server",
  adapter: cloudflare(),
});
