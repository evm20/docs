// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Frogge.finance Documentation',
  tagline: 'Frogge.finance on EOS EVM, Telos EVM and WAX EVM',
  url: 'https://docs.frogge.finance',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'evm20', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

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
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //  editUrl:
        //     'https://www.trustswap.finance',
        // },
        // blog: {
        //  showReadingTime: true,
        //  // Please change this to your repo.
        //  // Remove this to remove the "edit this page" links.
        //  editUrl:
        //    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          //{
          //  type: 'doc',
          //  docId: 'intro',
          //  position: 'left',
          //  label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/evm20/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //  items: [
          //     {
          //       label: 'Tutorial',
          //      to: '/docs/intro',
          //    },
          //  ],
          // },
          {
            title: 'Community',
            items: [
              
              {
                label: 'Twitter',
                href: 'https://twitter.com/froggefinance',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Frogge.finance`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
