import React, { Component } from 'react';
import Helmet from 'react-helmet';
import urljoin from 'url-join';

import config from '../siteConfig';

const removeTrailingSlash = (path) =>
  path === '/' ? path : path.replace(/\/$/, '');

class Seo extends Component {
  render() {
    const { postNode, postPath, postSEO } = this.props;
    let title;
    let description;
    let postURL;

    if (postSEO) {
      const postMeta = postNode.frontmatter;
      title = postMeta.title;
      description = postMeta.description
        ? postMeta.description
        : postNode.excerpt;
      if (postMeta.thumbnail) {
      }
      postURL = urljoin(config.siteUrl, removeTrailingSlash(postPath));
    } else {
      title = config.siteTitle;
      description = config.siteDescription;
    }

    const blogURL = urljoin(config.siteUrl, config.pathPrefix);

    // Default meta content image
    const image = urljoin(config.siteUrl, config.siteLogo);

    return (
      <Helmet>
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        <meta property="og:url" content={postSEO ? postURL : blogURL} />
        {postSEO && <meta property="og:type" content="article" />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={config.userTwitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    );
  }
}

export default Seo;
