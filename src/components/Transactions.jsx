const Transactions = ({ info }) => {
  return (
    <tr className="transaction-history__tr">
      <td className="transaction-history__cell">{info.type}</td>
      <td className="transaction-history__cell">{info.amount}</td>
      <td className="transaction-history__cell">{info.currency}</td>
    </tr>
  );
};
export default Transactions;
