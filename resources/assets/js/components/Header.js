import React,  { PropTypes,  Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div>icon</div>
        <div className='btn btn-default'>Logout</div>
      </header>
    );
  }
}

Header.propTypes = {
};

export default Header;
