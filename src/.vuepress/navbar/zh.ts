import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "代码",
    icon: "fa-solid fa-code",
    prefix: "/snippets",
    children: [
      {
        text: "CSS",
        icon: "fa-brands fa-css3-alt",
        link: "/css",
      },
      {
        text: "JS",
        icon: "fa-brands fa-square-js",
        link: "/js",
      },
    ],
  },
  {
    text: "分类",
    icon: "fa-solid fa-folder-open",
    link: "/category",
  },
  {
    text: "标签",
    icon: "fa-solid fa-tags",
    link: "/tag",
  },
  {
    text: "归档",
    icon: "fa-solid fa-box-archive",
    link: "/timeline",
  },
  "/demo/",
]);
