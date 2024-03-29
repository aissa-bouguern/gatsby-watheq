import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import PostList from '../components/post-list';
import Seo from '../components/Seo';

import config from '../siteConfig';

export default function CategoryTemplate({ pageContext, data }) {
  const { category } = pageContext;

  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Seo />
      <Helmet
        title={`منشورات في التصنيف "${category}" – ${config.siteTitle}`}
      />
      <div className="white-box padding-2">
        <PostList posts={posts} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: {
          categories: { in: [$category] }
          template: { eq: "post" }
        }
      }
      limit: 100
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            template
            categories
            about
            date(formatString: "DD-MM-YYYY")
            updated_at(formatString: "DD-MM-YYYY")
          }
        }
      }
    }
  }
`;
