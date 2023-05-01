import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { typedocPlugin } from 'vuepress-plugin-typedoc/next';
import { searchProPlugin } from "vuepress-plugin-search-pro";


export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "DisciJS",
      description: "Discord bots powered by http",
    },
  },

  theme,
  plugins: [
    typedocPlugin({
      // plugin options
      entryPoints: ['../../packages/disci/src/index.ts'],
      tsconfig: '../../packages/disci/tsconfig.json',
      cleanOutputDir: true,
      readme: 'none',
      sidebar: {
        fullNames: true,
        parentCategory: 'API',
      }
    }),
    searchProPlugin({
      // your options
    }),
  ],
  // Enable it with pwa
  shouldPrefetch: false,
});
