import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar  from "./sidebar";

export default hopeTheme({
  hostname: "https://disci.typical.gq",
  author: {
    name: "Typicalninja",
    url: "https://typical.gq",
  },
  iconAssets: "iconfont",
  logo: "/logo.png",
  repo: "typicalninja493/disci",
  docsDir: "apps/docs",
  locales: {
    "/": {
      // navbar
      navbar: navbar,

      // sidebar
      sidebar: sidebar,

      footer: "DisciJS",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  themeColor: {
    blue: "#5865F2",
    red: "#ED4245",
    green: "#57F287",
    orange: "#fb9b5f",
  },
  plugins: {
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: false,
    },
    // uncomment these if you want a pwa
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
         
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [],
          },
          {
            name: "API",
            short_name: "Api",
            url: "/api/",
            icons: [],
          },
        ],
      },
    },
  },
});
