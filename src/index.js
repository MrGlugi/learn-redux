import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import createBrowserHistory from 'history/createBrowserHistory';

import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';

import { Provider } from 'react-redux';
import store from './store';

import { Route } from 'react-router-dom';

export const history = createBrowserHistory();

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path={'/'} component={App} />
      </div>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
