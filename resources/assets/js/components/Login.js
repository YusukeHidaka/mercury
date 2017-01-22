import React, { Component } from 'react';
import FacebookLogin from '../src/facebook';

const responseFacebook = (response) => {
  console.log(response);
};

class Login extends Component {
  render() {
    return (
      <div>
        <FacebookLogin
          appId="1400175353350443"
          autoLoad
          buttonStyle={ { fontSize: 40 } }
          callback={responseFacebook}
          icon="fa-facebook"
        />
      </div>
    );
  }
}
export default Login;
