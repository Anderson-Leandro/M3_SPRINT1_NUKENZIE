import "./styles/global.css";
import "./App.css";
import { Home } from "./components/Home";
import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TotalMoney } from "./components/TotalMoney";
import { List } from "./components/List";

function App() {
  const [login, setLogin] = useState(false);

  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  console.log(listTransactions);

  function inOut() {
    setLogin(!login);
  }

  const body = document.querySelector("body");

  const [listTransactionsFiltered, setListTransactionsFiltered] = useState([]);

  function entries() {
    const entries = listTransactions.filter(
      (transaction) => transaction.type === "entrada"
    );

    entries.length === 0
      ? setListTransactionsFiltered([null])
      : setListTransactionsFiltered(entries);
  }

  function expenses() {
    const expenses = listTransactions.filter(
      (transaction) => transaction.type === "saída"
    );

    expenses.length === 0
      ? setListTransactionsFiltered([null])
      : setListTransactionsFiltered(expenses);
  }

  function allTransactions() {
    setListTransactionsFiltered([]);
  }

  function deleteTransaction(transaction) {
    const newTransactions = listTransactions.filter(
      (element) => element !== transaction
    );

    const newFilteredTransactions = listTransactionsFiltered.filter(
      (element) => element !== transaction
    );

    setListTransactionsFiltered(newFilteredTransactions);
    setListTransactions(newTransactions);
  }

  function changeButtons(event) {
    const buttons = document.querySelectorAll(".filterBtn");

    const arrButtons = [...buttons];

    arrButtons.forEach((btn) => (btn.classList = "filterBtn button-disable"));

    event.target.classList = "filterBtn button-disable btn-color-primary";
  }

  return (
    <>
      {body.classList.add("background-dark")}
      {!login ? (
        <Home login={inOut} />
      ) : (
        <>
          {body.classList.remove("background-dark")}

          <Header logout={inOut} />

          <main>
            <div className="form-Container">
              <Form
                listTransations={listTransactions}
                setListTransations={setListTransactions}
              />

              <TotalMoney listTransactions={listTransactions} />
            </div>

            <div className="listContainer">
              <div className="listContainer_menu">
                <h2 className="title-3">Resumo Financeiro</h2>

                <div className="transactions-buttons">
                  <button
                    className=" filterBtn button-disable btn-color-primary"
                    onClick={(event) => {
                      allTransactions();
                      changeButtons(event);
                    }}
                  >
                    Todos
                  </button>
                  <button
                    className="filterBtn button-disable"
                    onClick={(event) => {
                      entries();
                      changeButtons(event);
                    }}
                  >
                    Entradas
                  </button>
                  <button
                    className="filterBtn button-disable"
                    onClick={(event) => {
                      expenses();
                      changeButtons(event);
                    }}
                  >
                    Despesas
                  </button>
                </div>
              </div>

              <List
                listTransactions={listTransactions}
                listTransactionsFiltered={listTransactionsFiltered}
                deleteTransaction={deleteTransaction}
              />
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default App;
