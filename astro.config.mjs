// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
// Set site to your production URL for canonical URLs, sitemap, and Open Graph.
export default defineConfig({
  site: "https://harshfr.me",
  integrations: [sitemap()],
});
