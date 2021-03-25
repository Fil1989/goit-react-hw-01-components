import PropTypes from "prop-types";
import React from "react";
import IsOnlineMarker from "./IsOnlineMarker";
const Friends = ({ avatar, name, isOnline }) => {
  return (
    <>
      <li className="item">
        <IsOnlineMarker isOnline={isOnline} />
        <img className="friend-avatar" src={avatar} alt="" width="48" />
        <p className="name">{name}</p>
      </li>
    </>
  );
};

Friends.defaultProps = {
  avatar:
    "https://cdn.pixabay.com/photo/2020/05/18/20/50/dog-5188376_960_720.jpg",
};
Friends.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friends;
