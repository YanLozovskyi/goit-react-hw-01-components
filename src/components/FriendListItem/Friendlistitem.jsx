import PropTypes from 'prop-types';
import css from './Friendlistitem.module.css';

export default function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span
        className={`${css.status} ${isOnline ? css['is-online'] : ''}`}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
