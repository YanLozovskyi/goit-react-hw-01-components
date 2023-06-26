import PropTypes from 'prop-types';
import StatistictsItem from '../Statisticsitem/Statisticsitem';
import css from './Statisticlist.module.css';
import { getRandomHexColor } from 'helpers/getRandomHexColor';

export default function StatisticsList({ stats }) {
  return (
    <ul className={css['stat-list']}>
      {stats.map(({ id, label, percentage }) => (
        <li
          style={{ backgroundColor: getRandomHexColor() }}
          className={css['stat-list-item']}
          key={id}
        >
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
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
