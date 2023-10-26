import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Yuchen's Blog",
      description: "Yuchen's Blog",
    },
    "/": {
      lang: "zh-CN",
      title: "雨辰的博客",
      description: "雨辰的博客",
    },
  },

  markdown: {
    headers: {
      level: [2, 3, 4],
    },
  },

  theme,

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/Theme/BlogHero.vue"
    ),
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});
