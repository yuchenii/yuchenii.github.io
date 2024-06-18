import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
// import { searchProPlugin } from "vuepress-plugin-search-pro";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

import theme from "./theme.js";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Yuchen's Blog | 烟雨辰",
      description: "Yuchen's Blog",
    },
    "/": {
      lang: "zh-CN",
      title: "雨辰的博客 | 烟雨辰",
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
    docsearchPlugin({
      // 你的选项
      // appId, apiKey 和 indexName 是必填的
      appId: '7EMNMOAKZW',
      apiKey: 'b0fc524652dfa982328001adcd02de22',
      indexName: 'yuchen',

      locales: {
        "/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    }),
    // searchProPlugin({
    //   // 索引全部内容
    //   indexContent: true,
    //   // 为分类和标签添加索引
    //   customFields: [
    //     {
    //       getter: (page) => page.frontmatter.category,
    //       formatter: "分类：$content",
    //     },
    //     {
    //       getter: (page) => page.frontmatter.tag,
    //       formatter: "标签：$content",
    //     },
    //   ],
    // }),
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
