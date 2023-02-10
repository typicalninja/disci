// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Disci.js',
  tagline: 'Imagine a bot... without a gateway',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://disci.typical.gq/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'typicalninja493', // Usually your GitHub org/user name.
  projectName: 'disci', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      announcementBar: {
        id: 'announcementBar-1',
        content: `🚧 Disci is still in ALPHA stage`,
      },
      // Replace with your project's social card
      image: 'img/disci.png',
      navbar: {
        hideOnScroll: true,
        title: 'Disci',
        logo: {
          alt: '',
          src: 'img/disci.png',
          width: 40,
          height: 32,
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guide',
          },
          {
            type: 'doc',
            docId: 'disci/index',
            position: 'left',
            label: 'Disci API Docs',
          },
          {
            type: 'doc',
            docId: 'disci_utils/index',
            position: 'left',
            label: '@Discijs/utils API Docs',
          },
        ],
      },
      footer: {
       // style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} typicalninja. Built with Docusaurus.`,
      },
      prism: {
         theme: darkCodeTheme,
       // darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      [
        'docusaurus-plugin-typedoc',
        {
          id: 'disci',
          entryPoints: ['../../packages/disci/index.ts'],
          tsconfig: '../../packages/disci/tsconfig.json',
          out: 'disci',
          sidebar: {
            categoryLabel: 'Disci.js Api',
            position: 2,
            fullNames: true,
          },
        },
      ],
      [
        'docusaurus-plugin-typedoc',
        {
          id: 'disci-utils',
          entryPoints: ['../../packages/utils/index.ts'],
          tsconfig: '../../packages/utils/tsconfig.json',
          out: 'disci_utils',
          sidebar: {
            categoryLabel: '@Discijs/utils API',
            position: 3,
            fullNames: true,
          },
        },

      ],
      async function tailwind() {
        return {
          name: 'docusaurus-tailwindcss',
          configurePostCss(postcssOptions) {
            postcssOptions.plugins.push(require('tailwindcss'));
            postcssOptions.plugins.push(require('autoprefixer'));
            return postcssOptions;
          },
        };
      },
      require.resolve('docusaurus-lunr-search')
    ]
};

module.exports = config;
