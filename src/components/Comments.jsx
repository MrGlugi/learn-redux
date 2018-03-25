/*
  Check https://reactjs.org/docs/refs-and-the-dom.html to see recommended Ref syntax.
*/

import React, { Component } from 'react';

class Comments extends Component {
  renderComment = (comment, i) => {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className={'remove-comment'}
            onClick={this.props.removeComment.bind(
              null,
              this.props.match.params.postId,
              i
            )}
          >
            &times;
          </button>
        </p>
      </div>
    );
  };
  handleSubmit = e => {
    e.preventDefault();
    const postId = this.props.match.params.postId;
    const author = this.author.value;
    const comment = this.comment.value;
    this.props.addComment(postId, author, comment);
    this.commentForm.reset();
  };
  render() {
    return (
      <div className={'comments'}>
        {this.props.postComments.map(this.renderComment)}
        <form
          className={'comment-form'}
          ref={form => {
            this.commentForm = form;
          }}
          onSubmit={this.handleSubmit}
        >
          <input
            type={'text'}
            ref={input => (this.author = input)}
            placeholder="author"
          />
          <input
            type={'text'}
            ref={input => (this.comment = input)}
            placeholder="comment"
          />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
