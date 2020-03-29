/* eslint @typescript-eslint/no-var-requires: 0 */

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  // Query for markdown files
  const result = await graphql(`
    {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          id
          frontmatter {
            url
            date
          }
          fileAbsolutePath
        }
      }
    }
  `);

  // Panic on error
  if (result.errors) {
    throw result.errors;
  }

  // Component used to render each page
  const PageComponent = path.resolve('./src/templates/page.tsx');


  const blogPosts = result.data.allMarkdownRemark.nodes || [];
  blogPosts.forEach((blogPost) => {
    // Call Gatsby's helper action `createPage` to register each page in gatsby's pipeline
    actions.createPage({
      path: `${blogPost.frontmatter.date}-${blogPost.frontmatter.url}`,
      component: PageComponent,

      // context is passed into the pageQuery as params
      context: {
        fileAbsolutePath: blogPost.fileAbsolutePath,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  // Add `@app` alias for imports
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@app': path.resolve(__dirname, 'src/'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  });
};
