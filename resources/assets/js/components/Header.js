import React,  { PropTypes,  Component } from 'react';
import {Link} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
  }

  render() {
    return (
      <div className='header'>
        <Link to='#' className='col-md-2'>icon</Link>
        <div className='col-md-10'>
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
        </div>
      </div>
    );
  }
}

Header.propTypes = {
};

export default Header;
