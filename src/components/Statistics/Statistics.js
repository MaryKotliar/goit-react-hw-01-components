import PropTypes from 'prop-types';
import {
  StatsContainer,
  Title,
  StatList,
  StatItem,
  StatLabel,
  StatQuantity,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsContainer>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <StatLabel>{label}</StatLabel>
            <StatQuantity>{percentage}%</StatQuantity>
          </StatItem>
        ))}
      </StatList>
    </StatsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
