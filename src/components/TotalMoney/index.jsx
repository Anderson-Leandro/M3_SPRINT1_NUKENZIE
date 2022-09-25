import "../../styles/global.css";
import "./style.css";

export const TotalMoney = ({ listTransactions }) => {
  const total = listTransactions.reduce((acc, value) => {
    return acc + value.value;
  }, 0);

  return (
    <>
      {total !== 0 && (
        <div className="form-container totalMoney">
          <p>
            <span className="title-3">Valor Total:</span>{" "}
            <span className="title-3 color-primary">$ {total}</span>
          </p>
          <p className="text-body">O valor se refere ao saldo</p>
        </div>
      )}
    </>
  );
};
