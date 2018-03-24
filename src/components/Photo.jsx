/*
  https://reactjs.org/docs/animation.html
*/
import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/App.css';
import Transition from 'react-transition-group/Transition';

const Photo = props => {
  const { post, i, comments } = props;
  return (
    <figure className={'grid-figure'}>
      <div className={'grid-photo-wrap'}>
        <Link to={`/view/${post.code}`}>
          <img
            src={`${post.display_src}`}
            alt={`${post.caption}`}
            className={'grid-photo'}
          />
        </Link>
        <Transition
          name="like"
          timeout={{
            enter: 300,
            exit: 500
          }}
        >
          <span key={post.likes} className={'likes-heart'} />
        </Transition>
      </div>
      <figcaption>
        <p>{post.caption}</p>
        <div className={'control-buttons'}>
          <button onClick={() => props.increment(i)} className={'likes'}>
            &hearts; {post.likes}
          </button>
          <Link className={'button'} to={`/view/${post.code}`}>
            <span className={'comment-count'}>
              <span className={'speech-bouble'} />
              {comments[post.code] ? comments[post.code].length : 0}
            </span>
          </Link>
        </div>
      </figcaption>
    </figure>
  );
};

export default Photo;
