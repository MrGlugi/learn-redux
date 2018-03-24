/*
  Because connected-react-router was used (https://www.npmjs.com/package/connected-react-router)
  there is no need to pass 'routing', for more info see documentation.
  Also see /index.js & /store.js.
*/

import { combineReducers } from 'redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
  posts,
  comments
});

export default rootReducer;
