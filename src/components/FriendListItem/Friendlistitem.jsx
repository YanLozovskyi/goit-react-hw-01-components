import PropTypes from 'prop-types';

export default function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className={`status ${isOnline ? 'is-online' : ''}`}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
