/*
  Because in react router v4 you don't nest <Routes /> they had to be moved here.
  You can check https://stackoverflow.com/a/43311025/9271915 && official docs
  (https://reacttraining.com/react-router/web/guides/philosophy).

  For Routes render was used, becaused otherwise components would be unmounted
  and mounted again on every change in store.
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import PhotoGrid from './PhotoGrid';
import Single from './Single';

const Main = props => (
  <div>
    <h1>
      <Link to={'/'}>Reduxstagram</Link>
    </h1>
    <Route
      exact
      path={props.match.url}
      render={() => <PhotoGrid {...props} />} // props were passed instead of using React.cloneElement()
    />
    <Route
      path={'/view/:postId'}
      render={data => <Single {...props} {...data} />} // props were passed instead of using React.cloneElement()
    />
  </div>
);

export default Main;
