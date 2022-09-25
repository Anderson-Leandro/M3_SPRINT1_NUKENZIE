import "../../styles/global.css";
import "./style.css";

import noCard from "../../assets/img/NoCard.svg";

export const Card = ({ transaction, deleteTransaction }) => {
  return (
    <>
      {transaction === null ? (
        <>
          <h2 className="title-4">Você ainda não possui nenhum lançamento</h2>
          <li className="noItem">
            <img src={noCard} alt="" />
          </li>
        </>
      ) : transaction.type === "entrada" ? (
        <li className="listItem entrie">
          <div>
            <p className="title-3">{transaction.description}</p>
            <p className="text-body">Entrada</p>
          </div>

          <div>
            <span className="text-body">R$ {transaction.value}</span>
            <button
              onClick={() => deleteTransaction(transaction)}
              className="button-delete"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </li>
      ) : (
        <li className="listItem expense">
          <div>
            <p className="title-3">{transaction.description}</p>
            <p className="text-body">Despesa</p>
          </div>

          <div>
            <span className="text-body">R$ {transaction.value * -1}</span>
            <button
              onClick={() => deleteTransaction(transaction)}
              className="button-delete"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </li>
      )}
    </>
  );
};
