import React from "react";

export function Boton (props) {
    return(
        <button onClick={props.modo} >
            {props.texto}
        </button>
    );
}