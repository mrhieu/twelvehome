import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Twelve O'clock Homepage`,
    siteUrl: `https://twelveoclock.app`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", {
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      trackingIds: [
        'G-YHKNDEH3PX', // https://analytics.google.com/analytics/web/#/p416926656/reports/intelligenthome
      ]
    },
  }]
};

export default config;
