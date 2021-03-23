const Statistics = ({ label, percentage }) => {
  return (
    <>
      <ul className="uploads__stats">
        <li>
          <p className="uploads__stats--label">{label}</p>
          <p className="uploads__stats--percentage">{percentage}%</p>
        </li>
      </ul>
    </>
  );
};
export default Statistics;
