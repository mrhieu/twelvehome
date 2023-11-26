import type { GatsbyConfig } from 'gatsby';

const isProd = process.env.NODE_ENV === 'production';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Twelve O'clock Homepage`,
    description: `The home of the watch accuracy tracking app`,
    siteUrl: isProd ? `https://twelveoclock.app` : 'http://localhost:8000',
    image: `/images/banner.jpg`,
    twitterUsername: `twelveoclockapp`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'G-YHKNDEH3PX', // https://analytics.google.com/analytics/web/#/p416926656/reports/intelligenthome
        ]
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Twelve O'clock Homepage`,
        short_name: `Twelve`,
        start_url: `/`,
        background_color: `#f8f8f8`,
        theme_color: `#111`,
        display: `standalone`,
        icon: 'static/images/icon.png', // This path is relative to the root of the site.
      },
    },
  ]
};

export default config;
