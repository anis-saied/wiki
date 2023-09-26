// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Anis SAIED",
  tagline: "Full Stack Software Engineer",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://anis-saied.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/wiki/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "anis-saied", // Usually your GitHub org/user name.
  projectName: "anis-saied.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "https://avatars1.githubusercontent.com/u/69865343?s=460&v=4",
      navbar: {
        title: "Anis SAIED",
        logo: {
          alt: "Anis SAIED Logo",
          src: "https://avatars1.githubusercontent.com/u/69865343?s=460&v=4",
        },
        items: [
           { to: "/projects", label: "Projects", position: "left" },
          { to: "/cv", label: "CV", position: "left" },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Wiki",
          },
          /* { to: "/blog", label: "Blog", position: "left" }, */
          {
            href: "https://github.com/anis-saied",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          {
            title: "Last projects",
            items: [
              {
                label: "Ipein notes",
                to: "https://anis-saied.github.io/ipein",
              },
              {
                label: "E-commerce Vue JS app",
                to: "/projects/e-commerce-vue-js",
              },
              {
                label: "Show more...",
                to: "/projects",
              },
            ],
          },
          {
            title: "Profils",
            items: [
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/anis-saied",
              },
              /*               {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              }, */
              {
                label: "GitHub",
                href: "https://github.com/anis-saied",
              },
            ],
          },
          /*           {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Turotials",
                to: "/docs/intro",
              },
            ],
          }, */
        ],
        copyright: `Copyright © ${new Date().getFullYear()} This website was created
          by Anis SAIED with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
