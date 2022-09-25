import logo from "../../assets/img/illustration.svg";
import "../../styles/global.css";
import "./style.css";

export const Home = ({ login }) => {
  return (
    <div className="container">
      <div className="info">
        <p className="title-1">
          <span className="color-primary">Nu</span>{" "}
          <span className="color-white">Kenzie</span>
        </p>

        <h1 className="title-1 color-white">
          Centralize o controle das suas finanças
        </h1>

        <span className="text-headline color-white">
          de forma rápida e segura
        </span>

        <button className="button-primary" onClick={login}>
          Iniciar
        </button>
      </div>

      <figure className="logo">
        <img src={logo} alt="logo" />
      </figure>
    </div>
  );
};
