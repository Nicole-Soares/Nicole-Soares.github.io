import React from "react";
import "./Header.css";
import logo from "../imagenes/logo.svg";

export default function Header({isDark, setIsDark}) {

const click=()=>{
  setIsDark(!isDark)
}

  return (
    <div className="contenedor-header">
      <div className="contenedor-logo-boton">
        <img className="logo" src={logo} alt="icono-gifos" width="10%" height="50px"/>
        <button onClick={click} className="boton-modo-nocturno">{`Modo ${isDark ? "Ligth" : "Dark"}`}</button>
      </div>
    </div>
  );
}
