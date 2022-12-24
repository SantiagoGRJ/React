import React from "react";
import '../css/clear.css';

const BotonClear = (props) => (
    <button className="boton-clear"
    onClick={props.manejarClear}>
        {props.children}
    </button>
);

export default BotonClear;