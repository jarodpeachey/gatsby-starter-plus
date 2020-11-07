module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Plus`,
    description: `Kick off your next Gatsby project with this all-in-one starter. This starter supports is fully optimized for performance, SEO and accessibility, giving you straight 100s out of the box.`,
    author: `@jarodpeachey`,
    siteUrl: "https://gatsby.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/media/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: true,
        develop: false,
        tailwind: false,
        whitelist: [],
      },
    },
    "gatsby-plugin-split-css",
    {
      resolve: "gatsby-plugin-no-javascript",
      options: {},
    },
    {
      resolve: "gatsby-plugin-no-javascript-utils",
      options: {
        noSourcemaps: true,
        removeGeneratorTag: true,
        removeReactHelmetAttrs: true,
        noInlineStyles: false,
        removeGatsbyAnnouncer: true,
        removeFocusWrapper: true,
        removePreloadLinks: false,
      },
    },
  ],
};
