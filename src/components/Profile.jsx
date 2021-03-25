import Proptypes from "prop-types";

const Profile = ({ user }) => (
  <div className="profile">
    <div className="description">
      <img src={user.avatar} alt="Аватар пользователя" className="avatar" />
      <p className="name">{user.name}</p>
      <p className="tag">@{user.tag}</p>
      <p className="location">{user.location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{user.stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{user.stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);

// Profile.propTypes = {
//   user: {
//     avatar: Proptypes.string,
//     name: Proptypes.string.isRequired,
//     tag: Proptypes.string.isRequired,
//     location: Proptypes.string.isRequired,
//     stats: {
//       followers: Proptypes.number.isRequired,
//       views: Proptypes.number.isRequired,
//       likes: Proptypes.number.isRequired,
//     },
//   },
// };

export default Profile;
