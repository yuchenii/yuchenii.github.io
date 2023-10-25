import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Demo",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Articles",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
  // "/en/snippets/": [
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
  "/en/snippets/": "structure",
});
