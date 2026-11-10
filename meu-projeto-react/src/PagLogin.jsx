
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

function PagLogin(props) {
  return (
    <div className="tela login">

      <Logo />

      <p className="bemvindo">Bem-Vindo(a)</p>

      <div className="formulario">

        <input
          type="text"
          placeholder="Email, nome de usuário..."
        />

        <input
          type="password"
          placeholder="Digite sua senha..."
        />

        <button>
          Continuar
        </button>

      </div>

      <div className="ou">
        <span></span>
        OU
        <span></span>
      </div>

      <p className="cadastro">
        Não tem uma conta? Crie aqui
      </p>

      <button
        className="voltar"
        onClick={props.aoVoltar}
      >
        Voltar
      </button>

    </div>
  );
}

export default PagLogin;
