'use strict';

import React,  {Component,  PropTypes} from 'react';
import {Modal} from 'react-bootstrap';

class PostModal extends Component {
  constructor(props) {
    super(props);
  }

  ok() {
    //this.props.okCallback(this.state.shippingAddress);
    //TODO
    let sample = {give:'あげる', take:'もらう', place:'地球上' , image_url:'hogehoge'}
    this.props.okCallback(sample);
  }

  cancel() {
    //this.setState({shippingAddress: this.props.shippingAddress});
    this.props.cancelCallback();
  }

  render() {
    return (
      <Modal show={this.props.isShow} onHide={this.cancel.bind(this)} >
        <Modal.Header>
          <Modal.Title>プランの作成</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div>
              <div className='col-sm-3'>投稿者名</div>
              <div className='col-sm-1'>:</div>
              <div className='col-sm-8'>useId</div>
            </div>
            <div>
              <div className='col-sm-3'>提供する内容</div>
              <div className='col-sm-1'>:</div>
              <div className='col-sm-8'><textarea rows='1' /></div>
            </div>
            <div>
              <div className='col-sm-3'>受け取る内容</div>
              <div className='col-sm-1'>:</div>
              <div className='col-sm-8'><textarea rows='1' /></div>
            </div>
            <div>
              <div className='col-sm-3'>希望場所</div>
              <div className='col-sm-1'>:</div>
              <div className='col-sm-8'>地球上</div>
            </div>
            <div>
              <div className='col-sm-3'>画像選択</div>
              <div className='col-sm-1'>:</div>
              <div className='col-sm-8'><textarea rows='1' /></div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='row'>
            <div className='col-sm-3 col-sm-offset-3'>
              <button className='btn btn-default btn-block'
                onClick={this.cancel.bind(this)}>
                  cancel
              </button>
            </div>
            <div className='col-sm-3'>
              <button className='btn btn-primary btn-block'
                onClick={this.ok.bind(this)}>
                ok
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
}

PostModal.propTypes = {
  okCallback: PropTypes.func.isRequired,
  cancelCallback: PropTypes.func.isRequired,
  isShow: PropTypes.bool.isRequired
}

export default PostModal;
