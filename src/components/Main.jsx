import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to={'/'}>Reduxstagram</Link>
        </h1>
      </div>
    );
  }
}

export default Main;
