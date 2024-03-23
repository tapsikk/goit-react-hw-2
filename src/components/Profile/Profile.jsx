import style from '../Profile/Profile.module.scss';
const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={style.profile}>
      <div className={style['profile-content']}>
        <img src={image} alt="User avatar" />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers </span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views </span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes </span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
