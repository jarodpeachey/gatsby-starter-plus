module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Plus',
    description:
      'Get a head start on your next website with this Gatsby starter. It supports dynamic social images, custom theming, sitemaps, and other cool stuff.',
    defaultTitle: 'Gatsby Starter Plus',
    defaultDescription:
      'Get a head start on your next website with this Gatsby starter. It supports dynamic social images, custom theming, sitemaps, and other cool stuff.',
    baseUrl: 'https://jarodpeachey.netlify.app',
    siteUrl: 'https://jarodpeachey.netlify.app',
    author: '@jarodpeachey',
    socials: {
      twitter: `https://twitter.com/jarodpeachey`,
      github: `https://github.com/jarodpeachey`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-plus`,
        short_name: `starter-plus`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
