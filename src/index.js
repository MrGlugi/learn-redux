import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import { ConnectedRouter } from 'connected-react-router';

import App from './components/App';

import { Provider } from 'react-redux';
import store from './store';

import { Route } from 'react-router-dom';

import { history } from './store.js';
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
