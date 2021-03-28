import friends from './friends.module.scss';
import PropTypes from 'prop-types';
import React from 'react';
import IsOnlineMarker from './IsOnlineMarker';
const Friends = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className={friends.item}>
      <IsOnlineMarker isOnline={isOnline} />
      <img className={friends.friend__avatar} src={avatar} alt="" width="48" />
      <p className={friends.name}>{name}</p>
    </li>
  );
};

Friends.defaultProps = {
  avatar:
    'https://cdn.pixabay.com/photo/2020/05/18/20/50/dog-5188376_960_720.jpg',
};
Friends.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Friends;
