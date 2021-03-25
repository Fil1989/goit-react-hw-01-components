// import PropTypes from "prop-types";

const Transactions = ({ info }) => {
  return (
    <tr className="transaction-history__tr">
      <td className="transaction-history__cell">{info.type}</td>
      <td className="transaction-history__cell">{info.amount}</td>
      <td className="transaction-history__cell">{info.currency}</td>
    </tr>
  );
};

// Transactions.propTypes = {
//   info.type: PropTypes.string.isRequired,
//   info.amount: PropTypes.number.isRequired,
//   info.currency:PropTypes.string.isRequired,
// };

export default Transactions;
