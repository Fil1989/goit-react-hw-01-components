const IsOnlineMarker = ({ isOnline }) =>
  isOnline ? (
    <span className="online"></span>
  ) : (
    <span className="offline"></span>
  );

export default IsOnlineMarker;
