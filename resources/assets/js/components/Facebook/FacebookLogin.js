import React from 'react';
import FacebookActionCreators from '../../actions/FacebookActionCreators';

class FacebookLogin extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button ref="loginButton" onClick={this.didClickFacebookLoginButton}>Log Into Facebook</button>
        );
    }

    didClickFacebookLoginButton(e) {
      console.log('---- login buttonを押したよ。');
      FacebookActionCreators.login();
    }
}

export default FacebookLogin;
