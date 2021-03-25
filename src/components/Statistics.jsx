import PropTypes from "prop-types";

const Statistics = ({ id, label, percentage }) => (
    <>
    <ul key={id} className="uploads__stats">
      <li>
        <p className="uploads__stats--label">{label}</p>
        <p className="uploads__stats--percentage">{percentage}%</p>
      </li>
    </ul>
    </>
  );

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
