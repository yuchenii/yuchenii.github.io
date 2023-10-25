import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en",
  {
    text: "Code",
    icon: "fa-solid fa-code",
    prefix: "/en/snippets",
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
    text: "Category",
    icon: "fa-solid fa-folder-open",
    link: "/en/category",
  },
  {
    text: "Tag",
    icon: "fa-solid fa-tags",
    link: "/en/tag",
  },
  {
    text: "Archive",
    icon: "fa-solid fa-box-archive",
    link: "/en/timeline",
  },
  "/en/demo/",
]);
