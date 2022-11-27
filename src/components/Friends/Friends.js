import { FriendList } from './Friends.styled';
import { FriendListItem } from 'components/FriendItem/FriendItem';
import PropTypes from 'prop-types';
export const Friends = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem friend={friend}></FriendListItem>
        </li>
      ))}
    </FriendList>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
