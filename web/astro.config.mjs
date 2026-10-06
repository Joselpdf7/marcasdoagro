// @ts-check
import { defineConfig } from "astro/config";

// GitHub Pages review build sets SITE_URL / SITE_BASE; local and final domain use the defaults.
export default defineConfig({
  site: process.env.SITE_URL ?? "https://marcasdoagro.com.br",
  base: process.env.SITE_BASE ?? "/",
  trailingSlash: "ignore",
  build: { format: "directory" },
  // allow temporary review links (Cloudflare quick tunnel)
  server: { allowedHosts: [".trycloudflare.com"] },
});
