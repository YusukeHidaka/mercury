'use strict';

import React, {Component} from 'react';
import {Header, Footer} from '../components';

export default class App extends Component {
  render() {
    return (
      <div id='wrapper'>
        <div id='page-wrapper' className='gray-bg'>
          <Header />
          <div className='row wrapper wrapper-content ecommerce'>
            <div className='container'>
              {this.props.children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
