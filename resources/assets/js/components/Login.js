import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {userInfo: 'sample'};
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  responseFacebook(response) {
    console.log(response);
    this.inputUserInfo(response);
  };

  inputUserInfo(response) {
    this.setState({userInfo: response});
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
        <h1>{this.state.userInfo.name}</h1>
        <h1>{this.state.userInfo.email}</h1>
      </div>
    );
  }
}
export default Login;
