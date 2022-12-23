import React from "react";
import "../css/btn.css";
function Boton({Texto, Boton,Manejar}){
  return (
    <button
    className={ Boton ? "boton-click" : "boton-reiniciar" }
    onClick={Manejar}>
      {Texto}
    </button>
  );
}

export default Boton;