/* eslint @typescript-eslint/no-var-requires: 0 */

module.exports = {
  siteMetadata: {
    title: 'Archived Chaos',
    siteUrl: `https://archivedchaos.com`,
  },
  plugins: [
    // Plugin to add a layout (parent) component to every page (not unloaded when transitioning between routes)
    'gatsby-plugin-layout',
    // Plugin to enable compilation of SASS through `node-sass`
    'gatsby-plugin-sass',
    // Plugin to generate sitemap (creates sitemap.xml in the root folder for prod. builds)
    'gatsby-plugin-sitemap',
    // Plugin to embed CSS styles in the compiled HTML (instead of loading them through JavaScript)
    {
      resolve: `gatsby-plugin-global-styles`,
      options: {
        pathToConfigModule: `src/style/load-styles.js`,
        props: {},
      },
    },
    // Plugin to allow compilation of TypeScript
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    // Plugin to add proper SSR support for react helmet
    'gatsby-plugin-react-helmet',
    // Plugin to read files from the file system
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content-posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    // Plugin to expose image processing functions
    {
      resolve: `gatsby-plugin-sharp`,
    },
    // Plugin to convert markdown files into queryable objects
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // From https://github.com/remarkjs/remark/tree/master/packages/remark-parse#optionspedantic
        // Advised not to use Pedantic mode
        pedantic: false,
        // Remark plugins
        plugins: [
          // Remark plugin to process images
          {
            resolve: `gatsby-remark-images`,
            options: {
              // Max width of image container (in pixels)
              // @TODO
              maxWidth: 768,
              tracedSVG: true,
            },
          },
        ],
      },
    },
  ],
};
