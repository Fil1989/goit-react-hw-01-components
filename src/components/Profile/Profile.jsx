import profile from './profile.module.scss';

import propTypes from 'prop-types';

const Profile = ({ user }) => (
  <div className={profile.profile}>
    <div className={profile.description}>
      <img
        src={user.avatar}
        alt="Аватар пользователя"
        className={profile.avatar}
      />
      <p className={profile.name}>{user.name}</p>
      <p className={profile.tag}>@{user.tag}</p>
      <p className={profile.location}>{user.location}</p>
    </div>

    <ul className={profile.stats}>
      <li>
        <span className={profile.label}>Followers</span>
        <span className={profile.quantity}>{user.stats.followers}</span>
      </li>
      <li>
        <span className={profile.label}>Views</span>
        <span className={profile.quantity}>{user.stats.views}</span>
      </li>
      <li>
        <span className={profile.label}>Likes</span>
        <span className={profile.quantity}>{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);
Profile.defaultProps = {
  user: {
    avatar:
      'https://cdn.pixabay.com/photo/2020/05/18/20/50/dog-5188376_960_720.jpg',
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
