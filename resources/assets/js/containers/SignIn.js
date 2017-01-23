'use strict';

import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import {UserAction} from '../actions';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {currentUser: null}
      // UserAction.getUser((user) => {
      //   this.setState({currentUser: user});
      // });
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  responseFacebook(response) {
    console.log(response);
    this.rendercurrentUser(response);
  };

  rendercurrentUser(response) {
    this.setState({currentUser: response});
  }

  render() {
    return (
      <div>
        <FacebookLogin
         appId="1400175353350443"
         autoLoad={true}
         fields="name,email,picture"
         callback={this.responseFacebook}
        />
        <h1>{this.state.currentUser.name}</h1>
        <h1>{this.state.currentUser.email}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default SignIn;
