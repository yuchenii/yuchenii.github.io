import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";

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

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/Theme/BlogHero.vue"
    ),
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});
