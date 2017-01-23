import React from 'react';
import {Link} from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class TimeLine extends React.Component{
  render(){
    return (
      <div className='time-line'>
        <nav>
          <Link to="#">条件から検索</Link>
          <Link to="/plans/:planId">プラン詳細</Link>
          <Link to="/news">更新情報</Link>
        </nav>
        {this.props.children}

        <div className='post-button btn'>
          <div className='post-sentence'>投稿</div>
          <i className="fa fa-pencil-square-o post-icon" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default TimeLine;
