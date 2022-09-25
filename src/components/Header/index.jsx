import "../../styles/global.css";
import "./style.css";

export const Header = ({ logout }) => {
  return (
    <header>
      <p className="title-1">
        <span className="color-primary">Nu</span>{" "}
        <span className="color-grey-4">Kenzie</span>
      </p>

      <button className="button-disable" onClick={logout}>
        Inicio
      </button>
    </header>
  );
};
