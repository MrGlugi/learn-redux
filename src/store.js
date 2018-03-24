import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

import { routerMiddleware } from 'react-router-redux';

import { history } from './index.js';

const middleware = routerMiddleware(history);

const defaultState = {
  posts,
  comments
};

const store = createStore(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(middleware)
);

export default store;
