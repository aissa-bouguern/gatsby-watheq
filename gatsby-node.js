const fs = require('fs');
const kebabCase = require('lodash/kebabCase');

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'content';

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

// query for events and create pages
exports.createPages = async ({ actions, graphql, reporter }) => {
  const categoryTemplate = require.resolve('./src/templates/category.js');
  const tagTemplate = require.resolve('./src/templates/tag.js');

  const result = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { template: { eq: "post" } } }
      ) {
        edges {
          node {
            frontmatter {
              categories
              tags
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panic('error loading posts', result.errors);
    return;
  }

  const posts = result.data.allMarkdownRemark.edges;

  const categoriesSet = new Set();
  const tagsSet = new Set();

  posts.forEach((post) => {
    const { categories, tags } = post.node.frontmatter;

    if (categories) {
      categories.forEach((category) => {
        categoriesSet.add(category);
      });

      const categoriesList = Array.from(categoriesSet);
      categoriesList.forEach((category) => {
        actions.createPage({
          path: `/categories/${kebabCase(category)}/`,
          component: categoryTemplate,
          context: {
            category,
          },
        });
      });
    }

    if (tags) {
      tags.forEach((tag) => {
        tagsSet.add(tag);
      });

      const tagsList = Array.from(tagsSet);
      tagsList.forEach((tag) => {
        actions.createPage({
          path: `/tags/${kebabCase(tag)}/`,
          component: tagTemplate,
          context: {
            tag,
          },
        });
      });
    }
  });
};
