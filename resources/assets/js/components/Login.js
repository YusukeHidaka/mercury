import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
};

class Login extends Component {
  render() {
    return (
      <div>
        <FacebookLogin
         appId="1400175353350443"
         autoLoad={true}
         fields="name,email,picture"
         callback={responseFacebook}
        />
      </div>
    );
  }
}
export default Login;
