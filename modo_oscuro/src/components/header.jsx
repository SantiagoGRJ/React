import React from "react";

export function Header (props) {
    return(
       <div className="2xl:container dark:bg-black dark:text-yellow-400 h-14 bg-blue-900 text-white flex justify-center gap-20 px-4 py-4
       flex-wrap font-semibold 
       ">
        <div className="hover:cursor-pointer">Inicio</div>
        <div className="hover:cursor-pointer">Inicio</div>
        <button onClick={props.Funcion} className=" dark:text-black dark:bg-yellow-400 dark:font-semibold rounded-md bg-blue-500 border-l-rose-50 h-7 w-32">{props.text}</button>
       </div>
    );
}