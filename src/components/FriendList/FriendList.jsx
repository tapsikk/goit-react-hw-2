import FriendListItem from '../FriendListItem/FriendListItem';
import style from './FriendList.module.scss';
const FriendList = ({ friends }) => {
  return (
    <ul className={style.friend}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        id={id}
        key={id}
      />
    ))}
  </ul>
);
};

export default FriendList;