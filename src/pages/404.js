import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Seo from '../components/Seo';

import config from '../siteConfig';

const NotFound = () => {
  return (
    <Layout>
      <Seo />
      <Helmet title={config.siteTitle} />
      <div className="white-box padding-2">
        <div className="results-container main-border margin-3">
          <div className="background-1">
            <>
              <h4 className="no-margin padding-1 results-head">
                عفواً لا توجد لدينا صفحة بهذا العنوان!
              </h4>
              <p className="go-home-link padding-1 no-margin">
                <Link to="/">&lt;&lt; العودة للصفحة الرئيسية</Link>{' '}
              </p>
            </>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
