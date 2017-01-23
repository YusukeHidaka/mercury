import React,  { PropTypes,  Component } from 'react';
import {Link} from 'react-router';

class Header extends Component {
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
              <Link to='#' className='btn'>
                <i className='fa fa-bell-o' aria-hidden='true'></i>
              </Link>
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
