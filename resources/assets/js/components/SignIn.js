'use strict';

import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import {UserAction} from '../actions';

class SignIn extends Component {
  constructor(props) {
    super(props);
    //this.state = {currentUser}
      // UserAction.getUser((user) => {
      //   this.setState({currentUser: user});
      //   console.log(user);
      // });
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  responseFacebook(response) {
    const successCallback = () => {
      // TODO
      console.log('会員登録に成功しました');
      // this.setState({
      //   currentUser.name: response.name,
      //   currentUser.email: response.email,
      //   currentUser.id: response.id
      // });
      this.props.isLoggedIn();
    }
    const failedCallback = () => {
      // TODO
      console.log('すでに登録済みです');
      // this.setState({
      //   currentUser.name: response.name,
      //   currentUser.email: response.email,
      //   currentUser.id: response.id
      // });
      this.props.isLoggedIn();
    }

    console.log(response);
    UserAction.registerUser(response, successCallback, failedCallback);
  };

  render() {
    return (
      <div>
        <FacebookLogin
         appId="1400175353350443"
         autoLoad={false}
         onClick={this.responseFacebook}
         fields="name,email,picture"
         callback={this.responseFacebook}
        />
      </div>
    );
  }
}
//
// const mapStateToProps = state => ({
//   currentUser: state.currentUser
// });

export default SignIn;
