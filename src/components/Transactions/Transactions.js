import PropTypes from 'prop-types';
import { TransactionCont, RowName, RowItem, Row } from './Transations.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionCont>
      <thead>
        <tr>
          <RowName>Type</RowName>
          <RowName>Amount</RowName>
          <RowName>Currency</RowName>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <Row key={id}>
            <RowItem>{type}</RowItem>
            <RowItem>{amount}</RowItem>
            <RowItem>{currency}</RowItem>
          </Row>
        ))}
      </tbody>
    </TransactionCont>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
