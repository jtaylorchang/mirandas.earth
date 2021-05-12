module.exports = {
  title: "Miranda's Earth",
  tagline: "My portfolio and work site",
  url: "https://mirandas.earth",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "mirandas.earth",
  projectName: "docs",
  themeConfig: {
    navbar: {
      title: "Miranda's Earth",
      logo: {
        alt: "Logo",
        src: "img/logo512.png",
      },
      items: [
        {
          to: "docs/school/",
          activeBasePath: "docs/school",
          label: "School",
          position: "left",
        },
        {
          to: "docs/work/",
          activeBasePath: "docs/work",
          label: "Work",
          position: "left",
        },
        {
          to: "blog",
          label: "Blog",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/jtaylorchang/mirandas.earth",
            },
          ],
        },
        {
          title: "Creators",
          items: [
            {
              label: "Miranda Johnson",
              href: "https://mirandas.earth/",
            },
          ],
        },
        {
          title: "Open Source Tools Used",
          items: [
            {
              label: "Docusaurus",
              href: "https://v2.docusaurus.io/",
            },
            {
              label: "React.js",
              href: "https://www.reactjs.org/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Miranda Johnson.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/jtaylorchang/mirandas.earth/edit/master",
        },
        blog: {
          blogSidebarCount: "ALL",
          showReadingTime: true,
          editUrl: "https://github.com/jtaylorchang/mirandas.earth/edit/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [],
};
