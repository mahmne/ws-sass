import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserCard extends Component {
  render() {
    const { user } = this.props;

    return (
      
        <div className='user-card'>
          <div className='user-card__container'>
            <div className='user-card__container__photo-wrapper'>
              <img className='user-card__container__photo' src={ user.avatarUrl }/>
            </div>
            <div className='user-card__container__info'>
              <h1>{ user.name }</h1><br/>
              <p>@{ user.username }</p>
            </div>
          </div>
          <div className='user-card__btn'>
            <button  className='user-card__btn__follow'>+Follow</button>
          </div>
      </div>
    );
  }
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserCard;
