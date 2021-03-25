import PropTypes from "prop-types";

const IsOnlineMarker = ({ isOnline }) =>
  isOnline ? (
    <span className="online"></span>
  ) : (
    <span className="offline"></span>
  );
IsOnlineMarker.propTypes = {
  isOnline: PropTypes.bool.isRequired,
};
export default IsOnlineMarker;
