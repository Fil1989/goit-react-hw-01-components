import statistics from './statistics.module.scss';

import PropTypes from 'prop-types';

const Statistics = ({ id, label, percentage }) => (
  <ul key={id} className={statistics.uploads__stats}>
    <li>
      <p className={statistics.uploads__stats_label}>{label}</p>
      <p className={statistics.uploads__stats_percentage}>{percentage}%</p>
    </li>
  </ul>
);

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
