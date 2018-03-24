import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers/index';
import createBrowserHistory from 'history/createBrowserHistory';

import comments from './data/comments';
import posts from './data/posts';
import { connectRouter, routerMiddleware } from 'connected-react-router';

const middleware = routerMiddleware(history);

const defaultState = {
  posts,
  comments
};

export const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(rootReducer),
  defaultState,
  composeEnhancer(applyMiddleware(middleware))
);

export default store;
