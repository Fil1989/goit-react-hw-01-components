const IsOnlineMarker = ({ isOnline }) => {
  let isOnlineForRender;
  return (isOnlineForRender = isOnline ? (
    <span class="online"></span>
  ) : (
    <span class="offline"></span>
  ));
};
export default IsOnlineMarker;
