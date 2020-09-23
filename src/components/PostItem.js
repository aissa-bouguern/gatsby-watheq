import React from 'react';
import kebabCase from 'lodash/kebabCase';

import { Link } from 'gatsby';

const PostItem = ({ post }) => {
  const {
    slug,
    title,
    categories,
    date,
    about,
    updated_at,
  } = post.node.frontmatter;

  const formatter = new Intl.DateTimeFormat('en-GB');

  return (
    <div key={slug} className="post-container mb-3 main-border">
      <Link to={`/${slug}`}>
        <h2 className="title padding-1 no-margin in-block">{title}</h2>
      </Link>
      <div className="details no-margin padding-1">
        <Link
          to={`/categories/${kebabCase(categories[0])}/`}
          className="cat-name in-block"
        >
          {categories[0]}
        </Link>
        <div className="post-metas in-block">
          <span>تاريخ النشر:</span>
          <span className="date">{formatter.format(new Date(date))}</span>
          <span>تاريخ التعديل:</span>
          <span className="date">{formatter.format(new Date(updated_at))}</span>
        </div>
      </div>
      <p className="post-text no-margin">
        <Link to={slug} className="padding-1 in-block text-medium">
          {about}
        </Link>
      </p>
    </div>
  );
};

export default PostItem;
