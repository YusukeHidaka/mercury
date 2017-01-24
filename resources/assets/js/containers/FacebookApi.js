'use strict';

import React, {Component} from 'react';
import {FacebookLogin, FacebookLogout, FacebookDownloadPicture, FacebookPicture} from '../components';
import FacebookActionCreators from '../actions/FacebookActionCreators';
import FacebookStore from '../stores/FacebookStore';

export default class FacebookApi extends React.Component {

  constructor(props) {
        super();
        this.state = this.getFacebookState();
    }

    getFacebookState() {
        return {
            accessToken: FacebookStore.accessToken,
            loggedIn: FacebookStore.loggedIn,
            userId: FacebookStore.userId,
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
      }

    _onFacebookChange() {
        this.setState(this.getFacebookState());
    }

    render() {
        console.log(this.state)
        return (
            <div>
                {!this.state.loggedIn ? <FacebookLogin /> : null}
                {this.state.loggedIn ? <FacebookLogout /> : null}
                <p>Facebook logged in: {this.state.loggedIn ? 'true' : 'false'}</p>
                <p>User ID is: {this.state.userId}</p>
                {this.state.userId ? <FacebookDownloadPicture userId={this.state.userId} /> : null}

                <FacebookPicture
                    facebookPictureStatus={this.state.facebookPictureStatus}
                    facebookPictureUrl={this.state.facebookPictureUrl} />
            </div>

        );
    }
}
