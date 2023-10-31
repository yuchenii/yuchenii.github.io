// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss"; // 主页特性闪光效果
import "vuepress-theme-hope/presets/bounce-icon.scss"; // 图标鼠标悬浮跳动效果

import { onMounted } from "vue";

export default defineClientConfig({
  setup() {
    onMounted(() => {
      console.log(
        String.raw`
██╗   ██╗██╗   ██╗     ██████╗██╗  ██╗███████╗███╗   ██╗
╚██╗ ██╔╝██║   ██║    ██╔════╝██║  ██║██╔════╝████╗  ██║
 ╚████╔╝ ██║   ██║    ██║     ███████║█████╗  ██╔██╗ ██║
  ╚██╔╝  ██║   ██║    ██║     ██╔══██║██╔══╝  ██║╚██╗██║
   ██║   ╚██████╔╝    ╚██████╗██║  ██║███████╗██║ ╚████║
   ╚═╝    ╚═════╝      ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝

%c                   Wlecome to my blog!                                            
        `,
        "color:green;"
      );
    });
    // 运行时间
    setupRunningTimeFooter(
      new Date("2021-03-09"),
      {
        "/en/":
          "Running time: :day days :hour hours :minute minutes :second seconds",
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true
    );
  },
});
