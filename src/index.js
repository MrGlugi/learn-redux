import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import { Provider } from 'react-redux';
import store from './store';

export const history = createBrowserHistory();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path={'/'} component={App} />
        {/* <Route exact path={'/'} component={PhotoGrid} />
        <Route path={'/view/:postId'} component={Single} /> */}
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
