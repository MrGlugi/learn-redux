/*
  Check connected-react-router documentation and basic examples to better understand it.
  Also see /store.js & reducers/index.js.
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// Import component. Please see components/Main.jsx to see why routing was changed.
import App from './components/App';

import store, { history } from './store';

// Import CSS
import './styles/style.css';

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
