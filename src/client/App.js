import React, { Component } from 'react';

import usersFixture from '../users.json';

import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import UserList from './components/users/user-list';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <AppHeader />
        <main className='app__main'>
          <UserList users={usersFixture} />
        </main>
        <AppFooter />
      </div>
    );
  }
}

export default App;
