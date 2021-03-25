import PropTypes from "prop-types";

const Transactions = ({ info }) => {
  return (
    <tr key={info.id} className="transaction-history__tr">
      <td className="transaction-history__cell">{info.type}</td>
      <td className="transaction-history__cell">{info.amount}</td>
      <td className="transaction-history__cell">{info.currency}</td>
    </tr>
  );
};

Transactions.propTypes = {
  user: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default Transactions;
