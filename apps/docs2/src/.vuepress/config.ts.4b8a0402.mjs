// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar/en.ts
import { navbar } from "vuepress-theme-hope";
var enNavbar = navbar([
  "/",
  {
    text: "Guide",
    icon: "creative",
    link: "/guide"
  },
  {
    text: "API",
    icon: "proposal",
    link: "/api"
  }
]);

// src/.vuepress/sidebar/en.ts
import { sidebar } from "vuepress-theme-hope";
var enSidebar = sidebar({
  "/": [
    {
      text: "Get Started",
      icon: "bulb",
      prefix: "get-started/",
      children: "structure"
    },
    {
      text: "Docs",
      icon: "note",
      prefix: "guide/",
      children: "structure"
    }
  ],
  "/api": [
    {
      text: "API",
      icon: "proposal",
      children: "structure"
    }
  ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
  author: {
    name: "Typicalninja",
    url: "https://typical.gq"
  },
  iconAssets: "iconfont",
  logo: "/logo.png",
  repo: "typicalninja493/disci",
  docsDir: "apps/docs",
  locales: {
    "/": {
      // navbar
      navbar: enNavbar,
      // sidebar
      sidebar: enSidebar,
      footer: "DisciJS",
      displayFooter: true,
      metaLocales: {
        editLink: "Edit this page on GitHub"
      }
    }
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
        presets: ["ts"]
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"]
      },
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: false
    },
    // uncomment these if you want a pwa
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black"
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff"
      },
      manifest: {
        icons: [],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: []
          },
          {
            name: "API",
            short_name: "Api",
            url: "/api/",
            icons: []
          }
        ]
      }
    }
  }
});

// src/.vuepress/config.ts
import { typedocPlugin } from "vuepress-plugin-typedoc/next";
var config_default = defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "DisciJS",
      description: "Discord bots powered by http"
    }
  },
  theme: theme_default,
  plugins: [
    typedocPlugin({
      // plugin options
      entryPoints: ["../../packages/disci/src/index.ts"],
      tsconfig: "../../packages/disci/tsconfig.json",
      cleanOutputDir: true,
      sidebar: {
        fullNames: true,
        parentCategory: "API"
      }
    })
  ],
  // Enable it with pwa
  shouldPrefetch: false
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci9lbi50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIvZW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9jb2RpbmcvbnBtLXBrZ3MvZGlzY2kvYXBwcy9kb2NzMi9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RpbmdcXFxcbnBtLXBrZ3NcXFxcZGlzY2lcXFxcYXBwc1xcXFxkb2NzMlxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovY29kaW5nL25wbS1wa2dzL2Rpc2NpL2FwcHMvZG9jczIvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcbmltcG9ydCB7IHR5cGVkb2NQbHVnaW4gfSBmcm9tICd2dWVwcmVzcy1wbHVnaW4tdHlwZWRvYy9uZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIGJhc2U6IFwiL1wiLFxuXG4gIGxvY2FsZXM6IHtcbiAgICBcIi9cIjoge1xuICAgICAgbGFuZzogXCJlbi1VU1wiLFxuICAgICAgdGl0bGU6IFwiRGlzY2lKU1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiRGlzY29yZCBib3RzIHBvd2VyZWQgYnkgaHR0cFwiLFxuICAgIH0sXG4gIH0sXG5cbiAgdGhlbWUsXG4gIHBsdWdpbnM6IFtcbiAgICB0eXBlZG9jUGx1Z2luKHtcbiAgICAgIC8vIHBsdWdpbiBvcHRpb25zXG4gICAgICBlbnRyeVBvaW50czogWycuLi8uLi9wYWNrYWdlcy9kaXNjaS9zcmMvaW5kZXgudHMnXSxcbiAgICAgIHRzY29uZmlnOiAnLi4vLi4vcGFja2FnZXMvZGlzY2kvdHNjb25maWcuanNvbicsXG4gICAgICBjbGVhbk91dHB1dERpcjogdHJ1ZSxcblxuICAgICAgc2lkZWJhcjoge1xuICAgICAgICBmdWxsTmFtZXM6IHRydWUsXG4gICAgICAgIHBhcmVudENhdGVnb3J5OiAnQVBJJyxcbiAgICAgIH1cbiAgICB9KSxcbiAgXSxcbiAgLy8gRW5hYmxlIGl0IHdpdGggcHdhXG4gIHNob3VsZFByZWZldGNoOiBmYWxzZSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9jb2RpbmcvbnBtLXBrZ3MvZGlzY2kvYXBwcy9kb2NzMi9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RpbmdcXFxcbnBtLXBrZ3NcXFxcZGlzY2lcXFxcYXBwc1xcXFxkb2NzMlxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHRoZW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RpbmcvbnBtLXBrZ3MvZGlzY2kvYXBwcy9kb2NzMi9zcmMvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7aW1wb3J0IHsgaG9wZVRoZW1lIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcbmltcG9ydCB7IGVuTmF2YmFyIH0gZnJvbSBcIi4vbmF2YmFyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBlblNpZGViYXIgfSBmcm9tIFwiLi9zaWRlYmFyL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGhvcGVUaGVtZSh7XG4gIGhvc3RuYW1lOiBcImh0dHBzOi8vdnVlcHJlc3MtdGhlbWUtaG9wZS1kb2NzLWRlbW8ubmV0bGlmeS5hcHBcIixcblxuICBhdXRob3I6IHtcbiAgICBuYW1lOiBcIlR5cGljYWxuaW5qYVwiLFxuICAgIHVybDogXCJodHRwczovL3R5cGljYWwuZ3FcIixcbiAgfSxcblxuICBpY29uQXNzZXRzOiBcImljb25mb250XCIsXG5cbiAgbG9nbzogXCIvbG9nby5wbmdcIixcblxuICByZXBvOiBcInR5cGljYWxuaW5qYTQ5My9kaXNjaVwiLFxuXG4gIGRvY3NEaXI6IFwiYXBwcy9kb2NzXCIsXG5cbiAgbG9jYWxlczoge1xuICAgIFwiL1wiOiB7XG4gICAgICAvLyBuYXZiYXJcbiAgICAgIG5hdmJhcjogZW5OYXZiYXIsXG5cbiAgICAgIC8vIHNpZGViYXJcbiAgICAgIHNpZGViYXI6IGVuU2lkZWJhcixcblxuICAgICAgZm9vdGVyOiBcIkRpc2NpSlNcIixcblxuICAgICAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcblxuICAgICAgbWV0YUxvY2FsZXM6IHtcbiAgICAgICAgZWRpdExpbms6IFwiRWRpdCB0aGlzIHBhZ2Ugb24gR2l0SHViXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgcGx1Z2luczoge1xuICAgIC8vIGFsbCBmZWF0dXJlcyBhcmUgZW5hYmxlZCBmb3IgZGVtbywgb25seSBwcmVzZXJ2ZSBmZWF0dXJlcyB5b3UgbmVlZCBoZXJlXG4gICAgbWRFbmhhbmNlOiB7XG4gICAgICBhbGlnbjogdHJ1ZSxcbiAgICAgIGF0dHJzOiB0cnVlLFxuICAgICAgY2hhcnQ6IHRydWUsXG4gICAgICBjb2RldGFiczogdHJ1ZSxcbiAgICAgIGRlbW86IHRydWUsXG4gICAgICBlY2hhcnRzOiB0cnVlLFxuICAgICAgZmlndXJlOiB0cnVlLFxuICAgICAgZmxvd2NoYXJ0OiB0cnVlLFxuICAgICAgZ2ZtOiB0cnVlLFxuICAgICAgaW1nTGF6eWxvYWQ6IHRydWUsXG4gICAgICBpbWdTaXplOiB0cnVlLFxuICAgICAgaW5jbHVkZTogdHJ1ZSxcbiAgICAgIGthdGV4OiB0cnVlLFxuICAgICAgbWFyazogdHJ1ZSxcbiAgICAgIG1lcm1haWQ6IHRydWUsXG4gICAgICBwbGF5Z3JvdW5kOiB7XG4gICAgICAgIHByZXNldHM6IFtcInRzXCJdLFxuICAgICAgfSxcbiAgICAgIHByZXNlbnRhdGlvbjoge1xuICAgICAgICBwbHVnaW5zOiBbXCJoaWdobGlnaHRcIiwgXCJtYXRoXCIsIFwic2VhcmNoXCIsIFwibm90ZXNcIiwgXCJ6b29tXCJdLFxuICAgICAgfSxcbiAgICAgIHN1YjogdHJ1ZSxcbiAgICAgIHN1cDogdHJ1ZSxcbiAgICAgIHRhYnM6IHRydWUsXG4gICAgICB2UHJlOiB0cnVlLFxuICAgICAgdnVlUGxheWdyb3VuZDogZmFsc2UsXG4gICAgfSxcblxuICAgIC8vIHVuY29tbWVudCB0aGVzZSBpZiB5b3Ugd2FudCBhIHB3YVxuICAgIHB3YToge1xuICAgICAgZmF2aWNvbjogXCIvZmF2aWNvbi5pY29cIixcbiAgICAgIGNhY2hlSFRNTDogdHJ1ZSxcbiAgICAgIGNhY2hlUGljOiB0cnVlLFxuICAgICAgYXBwZW5kQmFzZTogdHJ1ZSxcbiAgICAgIGFwcGxlOiB7XG4gICAgICAgIGljb246IFwiL2Fzc2V0cy9pY29uL2FwcGxlLWljb24tMTUyLnBuZ1wiLFxuICAgICAgICBzdGF0dXNCYXJDb2xvcjogXCJibGFja1wiLFxuICAgICAgfSxcbiAgICAgIG1zVGlsZToge1xuICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ljb24vbXMtaWNvbi0xNDQucG5nXCIsXG4gICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgIH0sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBpY29uczogW1xuICAgICAgICAgXG4gICAgICAgIF0sXG4gICAgICAgIHNob3J0Y3V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiR3VpZGVcIixcbiAgICAgICAgICAgIHNob3J0X25hbWU6IFwiR3VpZGVcIixcbiAgICAgICAgICAgIHVybDogXCIvZ3VpZGUvXCIsXG4gICAgICAgICAgICBpY29uczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkFQSVwiLFxuICAgICAgICAgICAgc2hvcnRfbmFtZTogXCJBcGlcIixcbiAgICAgICAgICAgIHVybDogXCIvYXBpL1wiLFxuICAgICAgICAgICAgaWNvbnM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovY29kaW5nL25wbS1wa2dzL2Rpc2NpL2FwcHMvZG9jczIvc3JjLy52dWVwcmVzcy9uYXZiYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGNvZGluZ1xcXFxucG0tcGtnc1xcXFxkaXNjaVxcXFxhcHBzXFxcXGRvY3MyXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcbmF2YmFyXFxcXGVuLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RpbmcvbnBtLXBrZ3MvZGlzY2kvYXBwcy9kb2NzMi9zcmMvLnZ1ZXByZXNzL25hdmJhci9lbi50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBjb25zdCBlbk5hdmJhciA9IG5hdmJhcihbXG4gIFwiL1wiLFxuICB7XG4gICAgdGV4dDogXCJHdWlkZVwiLFxuICAgIGljb246IFwiY3JlYXRpdmVcIixcbiAgICBsaW5rOiAnL2d1aWRlJ1xuICB9LFxuICB7XG4gICAgdGV4dDogXCJBUElcIixcbiAgICBpY29uOiBcInByb3Bvc2FsXCIsXG4gICAgbGluazogJy9hcGknXG4gIH0sXG5dKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovY29kaW5nL25wbS1wa2dzL2Rpc2NpL2FwcHMvZG9jczIvc3JjLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RpbmdcXFxcbnBtLXBrZ3NcXFxcZGlzY2lcXFxcYXBwc1xcXFxkb2NzMlxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXJcXFxcZW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGluZy9ucG0tcGtncy9kaXNjaS9hcHBzL2RvY3MyL3NyYy8udnVlcHJlc3Mvc2lkZWJhci9lbi50c1wiO2ltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5leHBvcnQgY29uc3QgZW5TaWRlYmFyID0gc2lkZWJhcih7XG4gIFwiL1wiOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0dldCBTdGFydGVkJyxcbiAgICAgIGljb246ICdidWxiJyxcbiAgICAgIHByZWZpeDogXCJnZXQtc3RhcnRlZC9cIixcbiAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJEb2NzXCIsXG4gICAgICBpY29uOiBcIm5vdGVcIixcbiAgICAgIHByZWZpeDogXCJndWlkZS9cIixcbiAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuICAgIH0sXG4gIF0sXG4gICcvYXBpJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdBUEknLFxuICAgICAgaWNvbjogJ3Byb3Bvc2FsJyxcbiAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuICAgIH0sXG4gIF1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVSxTQUFTLHdCQUF3Qjs7O0FDQW5DLFNBQVMsaUJBQWlCOzs7QUNBVixTQUFTLGNBQWM7QUFFbFcsSUFBTSxXQUFXLE9BQU87QUFBQSxFQUM3QjtBQUFBLEVBQ0E7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
