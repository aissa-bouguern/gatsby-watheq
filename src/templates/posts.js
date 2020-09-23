import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import PostList from '../components/post-list';
import Seo from '../components/Seo';

import config from '../siteConfig';

const PostsTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { template: { eq: "post" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
              template
              categories
              about
              date
              updated_at
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Seo />
      <Helmet title={config.siteTitle} />
      <div className="white-box padding-2">
        <PostList posts={posts} />
      </div>
    </Layout>
  );
};

export default PostsTemplate;
