import React from 'react';

const Post = ({ post }) => {
  const { title, date, updated_at } = post.frontmatter;

  const formatter = new Intl.DateTimeFormat('en-GB');

  return (
    <section class="main-section padding-2">
      <div class="post-container margin-3 main-border">
        <h1 class="title padding-1 no-margin in-block">{title}</h1>
        <div class="details no-margin padding-1">
          <div className="post-metas in-block">
            <span>تاريخ النشر:</span>
            <span class="date">{formatter.format(new Date(date))}</span>
            <span>تاريخ التعديل:</span>
            <span class="date">{formatter.format(new Date(updated_at))}</span>
          </div>
        </div>
        <div
          class="post-text-article padding-1 no-margin post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </section>
  );
};

export default Post;
