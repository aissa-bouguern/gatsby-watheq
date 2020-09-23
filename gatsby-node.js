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
exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || '/';

  const postTemplate = require.resolve('./src/templates/post.js');
  const pageTemplate = require.resolve('./src/templates/page.js');
  const postsTemplate = require.resolve('./src/templates/posts.js');
  const categoryTemplate = require.resolve('./src/templates/category.js');
  const tagTemplate = require.resolve('./src/templates/tag.js');

  actions.createPage({
    path: basePath,
    component: postsTemplate,
  });

  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
              title
              template
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
    const { slug, template, categories, tags } = post.node.frontmatter;

    const component = template === 'post' ? postTemplate : pageTemplate;

    actions.createPage({
      path: slug,
      component, // Ex: postTemplate
      context: {
        post_slug: slug,
      },
    });

    if (categories) {
      categories.forEach((category) => {
        categoriesSet.add(category);
      });
    }

    if (tags) {
      tags.forEach((tag) => {
        tagsSet.add(tag);
      });
    }
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
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  // Only update the `/search` page.
  if (page.path.match(/^\/search/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = '/search/*';
    // Update the page.
    createPage(page);
  }
};
