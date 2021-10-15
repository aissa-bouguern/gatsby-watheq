import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import PostList from '../components/post-list';
import Seo from '../components/Seo';

import config from '../siteConfig';

const Home = () => {
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
              date(formatString: "DD-MM-YYYY")
              updated_at(formatString: "DD-MM-YYYY")
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
      <Helmet>
        <title>{config.siteTitle}</title>
      </Helmet>
      <div className="white-box padding-2">
        <PostList posts={posts} />
      </div>
    </Layout>
  );
};

export default Home;
