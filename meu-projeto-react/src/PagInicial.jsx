import React from "react";

function Logo() {
  return (
    <div className="logo">
      <div className="codigo">&lt; / &gt;</div>
      <h1>
        CTRL <span>+ IF</span>
      </h1>
    </div>
  );
}

function PagInicial(props) {
  return (
    <div className="tela inicial">

      <Logo />

      <button
        className="entrar"
        onClick={props.aoEntrar}
      >
        ENTRAR
      </button>

    </div>
  );
}

export default PagInicial;
