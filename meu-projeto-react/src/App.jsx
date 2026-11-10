
import React, { useState } from "react";
import "./App.css";

import Entrada from "./Entrada";
import PagInicial from "./PagInicial";
import PagLogin from "./PagLogin";

function App() {
  const [tela, setTela] = useState("entrada");

  return (
    <div className="container">

      {tela === "entrada" && (
        <div className="transicao" key="entrada">
          <Entrada
            aoTocar={() => setTela("inicial")}
          />
        </div>
      )}

      {tela === "inicial" && (
        <div className="transicao" key="inicial">
          <PagInicial
            aoEntrar={() => setTela("login")}
          />
        </div>
      )}

      {tela === "login" && (
        <div className="transicao" key="login">
          <PagLogin
            aoVoltar={() => setTela("inicial")}
          />
        </div>
      )}

    </div>
  );
}

export default App;
