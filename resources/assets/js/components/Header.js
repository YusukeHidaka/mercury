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
    console.log('①getFacebookState');
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
    console.log('②componentDidMount');
    FacebookActionCreators.initFacebook();
    FacebookStore.addChangeListener(() => this._onFacebookChange());
  }

  componentWillUnmount() {
    console.log('③componentWillUnmount');
    FacebookStore.removeChangeListener(this._onFacebookChange);
    setState({currentUser: this.state});
  }

  _onFacebookChange() {
    console.log('④_onFacebookChange');
    this.setState(this.getFacebookState());
  }

  registerUser() {
    console.log('⑤registerUser');
    const successCallback = (res) => {
      // TODO
      // console.log('会員登録に成功しました');
      // console.log(res);
      this.loginUser();
    }
    const failedCallback = () => {
      // TODO
      // console.log('すでに登録済みです');
    }
    UserAction.registerUser(this.state, successCallback, failedCallback);
  }

  loginUser(){
    console.log('⑥loginUser');
    const successCallback = (res) => {
      // TODO
      console.log('ログインに成功しました');
      console.log('cookieにしよう。');

      const searchAccessToken = new RegExp('XSRF-TOKEN=(.*?)(?:;|$)');
      if (document.cookie.match(searchAccessToken)) {
        console.log(RegExp.$1);
      }

      //TODO これをstateにいれる。
    }
    const failedCallback = (res) => {
      // TODO
      // console.log('ログインに失敗しました');
      // console.log(res);
    }
    UserAction.loginUser(this.state, successCallback, failedCallback);
  }

  //タイミングで呼び出したい。
  getUser() {
    console.log('⑦getUser');
    const callback = (res) => {
      console.log('get しました');
      console.log(res);
    }
    UserAction.getUser(callback);
  }

  renderRightHeader() {
    console.log('⑧renderRightHeader');
    if (this.state.loggedIn) {
      return this.renderUserHeader();
    } else {
      return this.renderGuestHeader();
    }
  }

  renderUserHeader() {
    console.log('⑨renderUserHeader');
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
        <button onClick={this.getUser.bind(this)}>getUser</button>
      </div>
    );
  }

  renderGuestHeader() {
    console.log('⑩renderGuestHeader');
    return (
      <div><FacebookLogin /></div>
    );
  }

  render() {
    console.log('①①render');
    console.log('header のrenderです')
    console.log(this.state);
    //facebook連携。
    if(this.state.status==='connected'&&!this.state.name){FacebookActionCreators.getFacebookInfo()};
    if(!this.state.LoggedIn&&(this.state.status==='not_authorized'||this.state.status==='connected')){this.registerUser()};
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
