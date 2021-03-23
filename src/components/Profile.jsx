import Proptypes from "prop-types";

const Profile = ({ user }) => (
  <>
    <div class="profile">
      <div class="description">
        <img src={user.avatar} alt="Аватар пользователя" class="avatar" />
        <p class="name">{user.name}</p>
        <p class="tag">@{user.tag}</p>
        <p class="location">{user.location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{user.stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{user.stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  </>
);

// Profile.propTypes = {
//   avatar: Proptypes.string,
//   name: Proptypes.string.isRequired,
//   tag: Proptypes.string.isRequired,
//   location: Proptypes.string.isRequired,
//   followers: Proptypes.number.isRequired,
//   views: Proptypes.number.isRequired,
//   likes: Proptypes.number.isRequired,
// };

export default Profile;
