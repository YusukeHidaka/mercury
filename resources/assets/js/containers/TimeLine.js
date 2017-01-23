import React from 'react';
import {Link} from 'react-router';

export default class TimeLine extends React.Component{
  render(){
    return (
      <div>
        <nav>
          <Link to="#">条件から検索</Link>
          <Link to="/plans/:planId">プラン詳細</Link>
          <Link to="/news">更新情報</Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
