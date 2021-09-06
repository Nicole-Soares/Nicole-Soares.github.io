import React from "react";
import "./Gif.css";

export default function Gif(props) {
  return (
    <div className="contenedor-gifs">
      <a href={props.url} target="_blank" rel="noreferrer">
        <img
          className={`gif ${props.Dark ? "dark" : "light"}`}
          src={props.imagen}
          alt={props.titulo}
          width="100%"
          height="300px"
        ></img>
      </a>
    </div>
  );
}
