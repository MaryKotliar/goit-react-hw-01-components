import PropTypes from 'prop-types';

import {
  ProfileCard,
  AvatarBox,
  Description,
  Text,
  StatsList,
  StatsItem,
  TextName,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <AvatarBox>
          <img src={avatar} alt="User avatar" class="avatar" width="100px" />
        </AvatarBox>
        <TextName>{username}</TextName>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <StatsList>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
