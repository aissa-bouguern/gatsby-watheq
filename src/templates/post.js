import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import Post from '../components/post';
import Seo from '../components/Seo';

import config from '../siteConfig';

export const query = graphql`
  query($post_slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $post_slug } }) {
      frontmatter {
        title
        slug
        categories
        tags
        date
        updated_at
      }
      html
    }
  }
`;

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Helmet>
        <title>{`${post.frontmatter.title} – ${config.siteTitle}`}</title>
      </Helmet>

      <Seo postPath={post.frontmatter.slug} postNode={post} postSEO />

      <Post post={post} />
    </Layout>
  );
};

export default PostTemplate;
