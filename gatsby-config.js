module.exports = {
  siteMetadata: {
    description: `The personal site of Lee Allen`,
    siteUrl: `http://leeallen.net`,
    title: `Lee Allen — Digital product leader`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-474631-1`,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `http://leeallen.net`,
        sitemap: `http://leeallen.net/sitemap.xml`,
        policy: [
          {
            userAgent: `*`,
            allow: `/`,
            disallow: [
              `/sandbox/`,
              `/style-guide`,
              `/version/`,
              `/work/`
            ],
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `nofollow noopener noreferrer`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It’s important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1370,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
  ],
};
