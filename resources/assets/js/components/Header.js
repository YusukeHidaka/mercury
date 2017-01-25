import React,  { PropTypes,  Component } from 'react';
import {Link} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {SignIn} from '.';
import {FacebookLogin, FacebookLogout, FacebookDownloadPicture, FacebookPicture, FacebookGetInfo} from '.';
import FacebookActionCreators from '../actions/FacebookActionCreators';
import {UserAction} from '../actions';
import FacebookStore from '../stores/FacebookStore';

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = this.getFacebookState();
    injectTapEventPlugin();
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
    const successCallback = (res) => {
      // TODO
      console.log('会員登録に成功しました');
      console.log(res);
    }
    const failedCallback = () => {
      // TODO
      console.log('すでに登録済みです');
    }
    UserAction.registerUser(this.state, successCallback, failedCallback);
  }

  renderRightHeader() {
    if (this.state.loggedIn) {
      return this.renderUserHeader();
    } else {
      return this.renderGuestHeader();
    }
  }

  renderUserHeader() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/user/profile' className='btn'>
              <i className='fa fa-user-o' aria-hidden='true'></i>
            </Link>
          </li>
          <li>
            <Link to='/user/messages' className='btn'>
              <i className='fa fa-commenting-o' aria-hidden='true'></i>
            </Link>
          </li>
          <li>
            <IconMenu
              iconButtonElement={<i className='fa fa-bell-o' aria-hidden='true'></i>}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="通知１" />
              <MenuItem primaryText="通知２" />
              <MenuItem primaryText="通知３" />
              <MenuItem primaryText="通知４" />
              <MenuItem primaryText="通知５" />
            </IconMenu>
          </li>
        </ul>
        <FacebookLogout />
      </div>
    );
  }

  renderGuestHeader() {
    return (
      <div><FacebookLogin /></div>
    );
  }

  render() {
    console.log(this.state);
    //facebook連携。
    if(this.state.status==='connected'&&!this.state.name){FacebookActionCreators.getFacebookInfo()};
    if(this.state.status==='not_authorized'||this.state.status==='connected'){this.registerUser()};
    return (
      <div className='header'>
        <Link to='#' className='col-md-2'>icon</Link>
        <div className='col-md-10'>
          {this.renderRightHeader()}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
};

export default Header;
