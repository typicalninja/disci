// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const path = require('path')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Disci JS',
  tagline: 'A Simple module to create discord bots',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://disci.typical.gq/',
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
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/typicalninja493/disci',
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
        title: 'DisciJS',
        items: [
          {
            to: 'docs/home/intro',
            label: 'Guide',
            position: 'left',
          },
          {
            to: 'api',
            label: 'API',
            position: 'left',
          },
          {
            href: 'https://github.com/typicalninja493/disci',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Typicalninja.`,
      },
      prism: {
        theme: darkCodeTheme,
      },
    }),
    plugins: [
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
      [
        'docusaurus-plugin-typedoc-api',
        {
          projectRoot: path.join(__dirname, '../..'),
          tsconfigName: 'tsconfig.json',
          // Monorepo
          packages: ['./packages/disci/'],
        },
      ],
    ]
};

module.exports = config;
