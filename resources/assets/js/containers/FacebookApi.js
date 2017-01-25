'use strict';

import React, {Component} from 'react';
import {FacebookLogin, FacebookLogout, FacebookDownloadPicture, FacebookPicture, FacebookGetInfo} from '../components';
import FacebookActionCreators from '../actions/FacebookActionCreators';
import {UserAction} from '../actions';
import FacebookStore from '../stores/FacebookStore';

export default class FacebookApi extends React.Component {

  constructor(props) {
    super();
    this.state = this.getFacebookState();
  }

  getFacebookState() {
    return {
      status: FacebookStore.status,
      accessToken: FacebookStore.accessToken,
      loggedIn: FacebookStore.loggedIn,
      userId: FacebookStore.userId,
      name: FacebookStore.name,
      email: FacebookStore.email,
      facebookPictureStatus: FacebookStore.facebookPictureStatus,
      facebookPictureUrl: FacebookStore.facebookPictureUrl
    }
  }

  componentDidMount() {
    FacebookActionCreators.initFacebook();
    FacebookStore.addChangeListener(() => this._onFacebookChange());
  }

  componentWillUnmount() {
    FacebookStore.removeChangeListener(this._onFacebookChange);
    setState({currentUser: this.state});
  }

  _onFacebookChange() {
    this.setState(this.getFacebookState());
  }

  registerUser() {
    UserAction.registerUser(this.state);
  }

  render() {
    console.log('-------- Api page の state --------');
    console.log(this.state);
    if(this.state.status==='not_authorized'||this.state.status==='connected'){UserAction.registerUser(this.state)};
    if(this.state.status==='connected'&&!this.state.name){FacebookActionCreators.getFacebookInfo()};

    return (
      <div>
        {!this.state.loggedIn ? <FacebookLogin /> : null}
        {this.state.loggedIn ? <FacebookLogout /> : null}
        <p>Facebook logged in: {this.state.loggedIn ? 'true' : 'false'}</p>
        <p>User ID is: {this.state.userId}</p>
        <FacebookGetInfo />
        <p>User name is: {this.state.name}</p>
        <p>User email is: {this.state.email}</p>
        {this.state.userId ? <FacebookDownloadPicture userId={this.state.userId} /> : null}
        <FacebookPicture
            facebookPictureStatus={this.state.facebookPictureStatus}
            facebookPictureUrl={this.state.facebookPictureUrl} />
      </div>
    );
  }
}
