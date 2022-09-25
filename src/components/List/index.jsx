import "../../styles/global.css";
import { Card } from "../Card";
import "./style.css";

export const List = ({
  listTransactions,
  listTransactionsFiltered,
  deleteTransaction,
}) => {
  return (
    <ul className="listTransactions">
      {listTransactionsFiltered.length > 0 ? (
        listTransactionsFiltered.map((transaction, index) => (
          <Card
            transaction={transaction}
            key={index}
            deleteTransaction={deleteTransaction}
          />
        ))
      ) : listTransactions.length === 0 ? (
        <Card transaction={null} />
      ) : (
        listTransactions.map((transaction, index) => (
          <Card
            transaction={transaction}
            key={index}
            deleteTransaction={deleteTransaction}
          />
        ))
      )}
    </ul>
  );
};
