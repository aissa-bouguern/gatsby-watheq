import React from 'react';
import PostItem from '../components/PostItem';

const PostList = ({ posts }) =>
  posts.map((post, index) => <PostItem post={post} key={index} />);

export default PostList;
