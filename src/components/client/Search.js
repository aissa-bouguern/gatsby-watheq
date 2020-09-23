import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../layout';
import Seo from '../Seo';
import PostList from '../post-list';

import config from '../../siteConfig';

const Search = ({ searchTerm }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: ASC }
        filter: { frontmatter: { template: { eq: "post" } } }
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
              date
              updated_at
            }
          }
        }
      }
    }
  `);

  // Filtering
  const posts = searchTerm
    ? data.allMarkdownRemark.edges.filter((post) =>
        post.node.frontmatter.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <Layout>
      <Seo />
      <Helmet title={config.siteTitle} />
      <div className="white-box padding-2">
        <div className="results-container main-border margin-3">
          <div className="background-1">
            {posts.length ? (
              <h4 className="no-margin padding-1 results-head">نتائج البحث</h4>
            ) : (
              <>
                <h4 className="no-margin padding-1 results-head">
                  عفواً لا توجد نتائج مطابقة، حاول البحث باستخدام كلمات أخرى
                </h4>
                <p className="go-home-link padding-1 no-margin">
                  <Link to="/">&lt;&lt; العودة للصفحة الرئيسية</Link>{' '}
                </p>
              </>
            )}
          </div>
        </div>

        <PostList posts={posts} />
      </div>
    </Layout>
  );
};

export default Search;
