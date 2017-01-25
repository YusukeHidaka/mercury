import React, { Component } from 'react'
import request from 'axios';
import {Link} from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {CommonConstants} from '../constants';
import {PostModal, PlanList, PostButton} from '../components';
import {PlanAction} from '../actions'

class TimeLine extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isShowPostModal: false,
      plans: []
    }
  }

  componentWillMount() {
    this.displayPlans();
  }

  displayPlans() {
    const callback = (response) => {
      this.setState({plans: response})
    }
    PlanAction.getPlan(callback);
  }

  openPostModal() {
    this.setState({isShowPostModal: true});
  }

  closePostModal() {
    this.setState({isShowPostModal: false});
  }

  postPlanData(planData) {
    //TODO post data to google api
    const successCallback = () => {
        // TODO
        console.log('post成功しました');
      }
      const failedCallback = () => {
        // TODO
      }

    PlanAction.postPlan(planData, successCallback, failedCallback);
    this.closePostModal();
  }
  //TODO loggedInをもとに、投稿ボタンをいじりたい。
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

        <PostButton />
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
