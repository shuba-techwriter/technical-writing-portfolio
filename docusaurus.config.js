// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Technical Writing Portfolio',
  tagline: 'Senior Technical Writer | Documentation | Content Strategy',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
 // GitHub Pages deployment configuration
url: 'https://shuba-techwriter.github.io',
baseUrl: '/technical-writing-portfolio/',
organizationName: 'shuba-techwriter',
projectName: 'technical-writing-portfolio',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese,
  // you may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },

        // Blog disabled
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'Technical Writing Portfolio',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          // Tools section - Updated
          {
            title: 'Tools',
            items: [
              {
                label: 'Oxygen XML Authoring',
                href: 'https://www.oxygenxml.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/',
              },
              {
                label: 'Git',
                href: 'https://git-scm.com/',
              },
              {
                label: 'Markdown',
                href: 'https://www.markdownguide.org/',
              },
              {
                label: 'VS Code',
                href: 'https://code.visualstudio.com/',
              },
            ],
          },

          // Community section
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/shuba-nandini-aa002711/',
                target: '_blank',
                rel: 'noopener noreferrer',
              },
            ],
          },

          // More section
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/your-github-username',
                target: '_blank',
                rel: 'noopener noreferrer',
              },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} Technical Writing Portfolio. Built with Docusaurus.`,
      },

      // Syntax highlighting
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;