import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "about",
    "slides",
  ],
  // "/snippets/": [
  //   {
  //     text: "CSS",
  //     icon: "fa-brands fa-css3-alt",
  //     prefix: "css/",
  //     collapsible: true,
  //     children: "structure",
  //   },
  //   {
  //     text: "JS",
  //     icon: "fa-brands fa-square-js",
  //     prefix: "js/",
  //     collapsible: true,
  //     children: "structure",
  //   },
  // ],
  "/snippets/": "structure",
});
