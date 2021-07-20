import React from "react"
import "./Gif.css";

export default function Gif(props) {

  return(
    <div className={`contenedor-gifs ${props.Dark ? "dark" : "light"}`}>
      <a href={props.url} target="_blank" rel="noreferrer">
    <img src={props.imagen} alt={props.titulo} width={props.ancho}></img>
    </a>
    </div>


  )
}