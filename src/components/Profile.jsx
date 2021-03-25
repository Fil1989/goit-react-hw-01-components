import propTypes from "prop-types";

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
Profile.defaultProps = {
  user: {
    avatar:
      "https://cdn.pixabay.com/photo/2020/05/18/20/50/dog-5188376_960_720.jpg",
  },
};

Profile.propTypes = {
  user: propTypes.shape({
    avatar: propTypes.string,
    name: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    stats: propTypes.shape({
      followers: propTypes.number.isRequired,
      views: propTypes.number.isRequired,
      likes: propTypes.number.isRequired,
    }),
  }),
};

export default Profile;
