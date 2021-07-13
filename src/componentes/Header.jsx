import React from "react";
import "./Header.css";
import logo from "../imagenes/logo.svg";

export default function Header() {
  return (
    <div className="contenedor-header">
      <div className="contenedor-logo-boton">
        <img className="logo" src={logo} alt="icono-gifos" width="10%" height="50px"/>
        <button className="boton-modo-nocturno">Modo Nocturno</button>
      </div>
    </div>
  );
}
