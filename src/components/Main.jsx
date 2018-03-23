import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Router, Route } from 'react-router-dom';
import '../styles/App.css';
import PhotoGrid from './PhotoGrid';
import Single from './Single';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>
          <Link to={'/'}>Reduxstagram</Link>
        </h1>
        <Route
          exact
          path={this.props.match.url}
          component={() => <PhotoGrid {...this.props} />}
        />
        <Route
          path={'/view/:postId'}
          component={() => <Single {...this.props} />}
        />
      </div>
    );
  }
}

export default Main;
