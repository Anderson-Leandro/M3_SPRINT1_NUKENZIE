import "../../styles/global.css";
import "./style.css";

export const Form = ({ listTransations, setListTransations }) => {
  function addNewTransaction(event) {
    event.preventDefault();

    const transaction = [...event.target];
    transaction.splice(-1);

    const obj = {};

    transaction.forEach((element) => {
      return (obj[element.name] = element.value);
    });

    transaction[0].value = "";
    transaction[1].value = "";

    obj.type === "entrada"
      ? (obj.value = obj.value * 1)
      : (obj.value = obj.value * -1);

    return setListTransations([...listTransations, obj]);
  }

  return (
    <div className="form-container">
      <form onSubmit={addNewTransaction}>
        <label className="text-label" htmlFor="description">
          Descrição
        </label>
        <input
          required
          id="description"
          className="input-default"
          name="description"
          type="text"
          placeholder="Digite aqui sua descrição"
        />
        <small className="text-helper">Ex: Compra de roupas.</small>

        <div className="value-inputs">
          <div className="value-inputs__input">
            <label className="text-label" htmlFor="value">
              Valor
            </label>
            <input
              required
              className="input-default"
              name="value"
              id="value"
              type="number"
            />
            <span className="text-headline">R$</span>
          </div>

          <div>
            <label className="text-label" htmlFor="type">
              Tipo de valor
            </label>
            <select required className="select-default" name="type" id="type">
              <option value="entrada">Entrada</option>
              <option value="saída">Saída</option>
            </select>
          </div>
        </div>

        <button className="button-primary" type="submit">
          Inserir valor
        </button>
      </form>
    </div>
  );
};
