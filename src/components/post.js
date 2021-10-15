import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { DiscussionEmbed } from 'disqus-react';

import config from '../siteConfig';

const Post = ({ post }) => {
  const { title, slug, categories, tags, date, updated_at } = post.frontmatter;

  const disqusConfig = {
    shortname: config.gatsby_disqus_name,
    config: { identifier: slug },
  };

  return (
    <>
      <div className="white-box padding-2" style={{ marginBottom: '2rem' }}>
        <div className="post-container main-border">
          <h1 className="title padding-1 no-margin in-block">{title}</h1>
          <div className="details no-margin padding-1">
            <Link
              to={`/categories/${kebabCase(categories[0])}/`}
              className="cat-name in-block"
            >
              {categories[0]}
            </Link>
            <div className="post-metas in-block">
              <span>تاريخ النشر:</span>
              <span className="date">{String(date)}</span>
              <span>تاريخ التعديل:</span>
              <span className="date">{String(updated_at)}</span>
            </div>
          </div>
          <div
            className="post-text-article padding-1 no-margin post-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="post-tags padding-1 no-margin">
            <h3 className="pa-ra text-base ml-2">وسوم</h3>
            {tags.map((tag) => (
              <Link to={`/tags/${kebabCase(tag)}/`} className="tag" key={tag}>
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="white-box padding-2">
        <DiscussionEmbed {...disqusConfig} />
      </div>
    </>
  );
};

export default Post;
