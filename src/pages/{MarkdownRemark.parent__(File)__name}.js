import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import Page from '../components/page';
import Post from '../components/post';
import Seo from '../components/Seo';

import config from '../siteConfig';

export default ({ data, uri }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Helmet>
        <title>{`${post.frontmatter.title} – ${config.siteTitle}`}</title>
      </Helmet>

      <Seo postPath={uri} postNode={post} postSEO />

      {post.frontmatter.template === 'page' ? (
        <Page post={post} />
      ) : (
        <Post post={post} />
      )}
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        categories
        tags
        template
        date(formatString: "DD-MM-YYYY")
        updated_at(formatString: "DD-MM-YYYY")
      }
      html
    }
  }
`;
