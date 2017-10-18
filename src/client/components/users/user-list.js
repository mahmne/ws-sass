import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserCard from './user-card';

class UserList extends Component {
  render() {
    const { users } = this.props;

    return (
      <article className='user-list'>
        <header>
          <h1>User List</h1>
        </header>
        <ul className='user-list__list'>
          <li className='user-list__list-item'>
            { users.map(user => <UserCard user={user} key={`user-card-${user.id}`}/>) }
          </li>
        </ul>
      </article>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
