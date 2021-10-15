import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import PostList from '../components/post-list';
import Seo from '../components/Seo';

import config from '../siteConfig';

const TagTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const posts = data.allMarkdownRemark.edges.filter(
    (post) => post.node.frontmatter.template === 'post'
  );

  return (
    <Layout>
      <Seo />
      <Helmet title={`منشورات في الوسم "${tag}" – ${config.siteTitle}`} />
      <div className="white-box padding-2">
        <PostList posts={posts} />
      </div>
    </Layout>
  );
};

export default TagTemplate;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
