import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class PostButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className='post-button btn' onClick={this.props.openPostModal}>
        <div className='post-sentence'>投稿</div>
        <i className="fa fa-pencil-square-o post-icon" aria-hidden="true"></i>
      </div>
     )
  }
}

export default PostButton;
