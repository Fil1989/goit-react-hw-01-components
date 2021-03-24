import React from "react";
import IsOnlineMarker from "./IsOnlineMarker";
const Friends = ({ avatar, name, isOnline }) => {
  return (
    <>
      <li class="item">
        <IsOnlineMarker isOnline={isOnline} />
        <img class="friend-avatar" src={avatar} alt="" width="48" />
        <p class="name">{name}</p>
      </li>
    </>
  );
};
export default Friends;
