import friends from '../sass/friends.module.scss';

import PropTypes from 'prop-types';

const IsOnlineMarker = ({ isOnline }) =>
  isOnline ? (
    <span className={friends.online}></span>
  ) : (
    <span className={friends.offline}></span>
  );
IsOnlineMarker.propTypes = {
  isOnline: PropTypes.bool.isRequired,
};
export default IsOnlineMarker;
