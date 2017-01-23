'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className='footer'>
        <div className='link clearfix'>
          <ul className='menu'>
            <li><Link to='/privacy_policy'>プライバシーポリシー</Link></li>
            <li><Link to='/terms_of_use'>利用規約</Link></li>
            <li><Link to='/contact'>お問い合わせ</Link></li>
            <li><Link to='/q_and_a'>よくある質問</Link></li>
            <li><Link to='#'>ログアウト</Link></li>
          </ul>
          <ul className='sms'>
            <li><a href='#'><img src='/assets/ukokkei_frontend/btn-twitter.png' alt='twitter'/></a></li>
            <li><a href='#'><img src='/assets/ukokkei_frontend/btn-facebook.png' alt='facebook'/></a></li>
            <li><a href='#'><img src='/assets/ukokkei_frontend/btn-line.png' alt='line'/></a></li>
            <li><a href='#'><img src='/assets/ukokkei_frontend/btn-mail.png' alt='mail'/></a></li>
          </ul>
        </div>
        <p className='copyright'><small>©️ StarDust Inc. All Rights Reserved</small></p>
      </footer>
    );
  }
}

export default Footer;
