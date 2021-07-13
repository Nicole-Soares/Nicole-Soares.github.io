import React from "react";
import "./Busqueda.css"
import ilustra from"../imagenes/ilustra.svg"
import search from "../imagenes/search.svg"

export default function Busqueda () {
  
  return (
   <div className="contenedor-busqueda"> 
    <div className="contenedor-titulo">
      <p>¡Inspirate y busca los mejores Gifos!</p>
    </div>
    <div className="contenedor-icono-barra-busqueda">
      <div className="contenedor-imagen">
      <img className="imagen" src={ilustra} alt="icono"/> 
      </div>
      <div class="field" id="searchform">
     <input type="text" id="barra" placeholder="Busca gifs" />
     <button type="button" id="boton"><img width="22%"src={search} alt="busqueda" /></button>
</div>
   <div className="contenedor-resultados"> 
   <p>Resultados de la busqueda</p>
   </div>
      </div>
   
   </div>
  )
}