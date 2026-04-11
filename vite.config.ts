import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import {
  buildSiteMetaHead,
  buildSiteNoscript,
  siteMeta,
} from "./src/site/meta.ts";

function siteMetaHtmlPlugin(): Plugin {
  return {
    name: "site-meta-html",
    transformIndexHtml(html) {
      return html
        .replace("__HTML_LANG__", siteMeta.htmlLang)
        .replace("__SITE_META_HEAD__", buildSiteMetaHead())
        .replace("__SITE_NOSCRIPT__", buildSiteNoscript());
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), siteMetaHtmlPlugin()],
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
