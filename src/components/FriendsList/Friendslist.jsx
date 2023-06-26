import PropTypes from 'prop-types';
import FriendsListItem from '../FriendListItem/Friendlistitem';
import css from './Friendlist.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li
          className={`${css['friend-list-item']} ${
            isOnline ? css['is-online'] : ''
          }`}
          key={id}
        >
          <FriendsListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
