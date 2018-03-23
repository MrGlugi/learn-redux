import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

const history = createBrowserHistory();

const router = (
  <Router history={history}>
    <div>
      <Route path={'/'} component={Main} />
      <Route exact path={'/'} component={PhotoGrid} />
      <Route path={'/view/:postId'} component={Single} />
    </div>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
