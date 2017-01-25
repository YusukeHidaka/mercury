import React from 'react';
import FacebookActionCreators from '../../actions/FacebookActionCreators';

class FacebookGetInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button  onClick={this.didClickFacebookGetInfoButton}>Get Use Info Of Facebook</button>
        );
    }

    didClickFacebookGetInfoButton(e) {
        FacebookActionCreators.getFacebookInfo();
    }
}

export default FacebookGetInfo;
