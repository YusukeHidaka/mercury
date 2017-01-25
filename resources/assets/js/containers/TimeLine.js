import React, { Component } from 'react'
import request from 'axios';
import {Link} from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {CommonConstants} from '../constants';
import {PostModal, PlanList} from '../components';

class TimeLine extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isShowPostModal: false,
      plans: []
    }
  }

  componentWillMount() {
    request.get(CommonConstants.API_GET_PLANS_PATH).then((response) => {
      this.setState({plans: response.data})
      // console.log(response.data);
    }).catch((response) => {
      // console.log(response)
    })
  }

  openPostModal() {
    this.setState({isShowPostModal: true});
  }

  closePostModal() {
    this.setState({isShowPostModal: false});
  }

  postPlanData() {
    //TODO post data to google api
    this.closePostModal();
  }

  render(){
    return (
      <div className='time-line'>
        <div>
          <h2>プラン一覧</h2>
          <PlanList plans={this.state.plans}/>
        </div>
        <nav>
          <Link to="#">条件から検索</Link>
          <Link to="/plans/:planId">プラン詳細</Link>
          <Link to="/news">更新情報</Link>
        </nav>
        {this.props.children}

        <div className='post-button btn' onClick={this.openPostModal.bind(this)}>
          <div className='post-sentence'>投稿</div>
          <i className="fa fa-pencil-square-o post-icon" aria-hidden="true"></i>
        </div>
        <PostModal
          isShow={this.state.isShowPostModal}
          okCallback={this.postPlanData.bind(this)}
          cancelCallback={this.closePostModal.bind(this)}
        />
      </div>
    );
  }
}

export default TimeLine;
