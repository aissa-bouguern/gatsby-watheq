import React from 'react';

const Post = ({ post }) => {
  const { title, date, updated_at } = post.frontmatter;

  return (
    <section className="main-section padding-2">
      <div className="post-container margin-3 main-border">
        <h1 className="title padding-1 no-margin in-block">{title}</h1>
        <div className="details no-margin padding-1">
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
      </div>
    </section>
  );
};

export default Post;
