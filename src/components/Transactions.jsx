import transactions from '../sass/transactions.module.scss';
import PropTypes from 'prop-types';

const Transactions = ({ info }) => {
  return (
    <tr key={info.id} className={transactions.transaction_history__tr}>
      <td className={transactions.transaction_history__cell}>{info.type}</td>
      <td className={transactions.transaction_history__cell}>{info.amount}</td>
      <td className={transactions.transaction_history__cell}>
        {info.currency}
      </td>
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
