
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

function Entrada(props) {
  return (
    <div
      className="tela entrada"
      onClick={props.aoTocar}
    >
      <h2>QUER APRENDER?</h2>

      <p className="da">── DA ──</p>

      <Logo />
    </div>
  );
}

export default Entrada;
