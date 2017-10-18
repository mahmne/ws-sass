import React, { Component } from 'react';

class AppHeader extends Component {
  render() {
    return (
      <header className='app-header'>
        <nav className='app-header__nav'>
          <a to='/'>Home</a>
          <a to='/about'>About</a>
        </nav>
        <div className='app-header__login'>
          <a to='/login'>Login</a>
        </div>
      </header>
    );
  }
}

export default AppHeader;
