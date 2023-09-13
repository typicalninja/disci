import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Disci",
  description: "Supercharged by http",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/intro' }
    ],

    sidebar: {
      '/guide/': { base: '/guide/', items: getGuideSidebar() },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/typicalninja/disci' },
      { icon: 'discord', link: 'https://discord.gg/ynwckXS9T2' }
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/typicalninja/disci/blob/main/LICENSE">Apache 2.0 License</a>.',
      copyright: 'Copyright © 2023 <a href="https://typical.gq/">Typicalninja</a>'
    }
  },
  lastUpdated: true
})


/** Generated sidebar for /guide/ */
function getGuideSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      items: [
        { text: 'What is Disci?', link: 'intro' },
        { text: 'Limitations', link: 'limits' },
      ]
    }
  ]
}