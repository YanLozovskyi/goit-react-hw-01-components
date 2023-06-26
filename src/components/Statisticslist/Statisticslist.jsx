import PropTypes from 'prop-types';
import StatistictsItem from '../Statisticsitem/Statisticsitem';

export default function StatisticsList({ stats }) {
  return (
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li className="stat-list-item" key={id}>
          <StatistictsItem percentage={percentage} label={label} />
        </li>
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
