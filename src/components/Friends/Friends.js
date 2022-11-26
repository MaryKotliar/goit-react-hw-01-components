import {
  FriendList,
  FriendItem,
  Status,
  Name,
  StatusOnline,
} from './Friends.styled';
import PropTypes from 'prop-types';
export const Friends = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id}>
          {isOnline ? <StatusOnline></StatusOnline> : <Status></Status>}

          <img src={avatar} alt="User avatar" width="48" />
          <Name>{name}</Name>
        </FriendItem>
      ))}
    </FriendList>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
