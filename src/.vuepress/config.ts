import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "vuepress-theme-hope 的博客演示",
    },
  },

  theme,

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/Theme/BlogHero.vue",
    ),
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});
