/*
  Because connected-react-router was used (https://www.npmjs.com/package/connected-react-router)
  there are some changes here and other files. See reducers/index.js &
  /index.js and check at least basic examples in the documentation to better
  understand it :)
  connected-react-router was used because it allows time travelling in Redux Dev
  Tools with react router v4.
  Hot reloading is not not necessary, because Create React App provides this
  functionality.
*/

import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

// import the root reducer
import rootReducer from './reducers/index';

import createBrowserHistory from 'history/createBrowserHistory';

import comments from './data/comments';
import posts from './data/posts';

export const history = createBrowserHistory();
const middleware = routerMiddleware(history);

// create an object for the default data
const defaultState = {
  posts,
  comments
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(rootReducer),
  defaultState,
  composeEnhancer(applyMiddleware(middleware))
);

export default store;
