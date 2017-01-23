'use strict';

import React, {Component} from 'react';
import {Header, Footer} from '../components';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
      return { muiTheme: getMuiTheme(baseTheme) };
  }

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

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
