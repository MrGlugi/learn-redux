import React, { Component } from 'react';
import Photo from './Photo';
// import { Link } from 'react-router-dom';
import '../styles/App.css';

class PhotoGrid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={'photo-grid'}>
        {this.props.posts.map((post, i) => (
          <Photo {...this.props} key={i} i={i} post={post} />
        ))}
      </div>
    );
  }
}

export default PhotoGrid;
