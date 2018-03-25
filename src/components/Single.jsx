import React from 'react';

import Comments from './Comments';
import Photo from './Photo';

const Single = props => {
  const postId = props.match.params.postId;
  const i = props.posts.findIndex(post => post.code === postId);
  const post = props.posts[i];
  const postComments = props.comments[postId] || [];
  return (
    <div className={'single-photo'}>
      <Photo i={i} post={post} {...props} />
      <Comments postComments={postComments} {...props} />
    </div>
  );
};

export default Single;
