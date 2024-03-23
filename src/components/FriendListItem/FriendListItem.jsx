import style from "./FriendListItem.module.scss";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.friend}>
      <img src={avatar} alt="avatar" width={48} />
      <p>{name}</p>
      <p style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
