import React from "react";
import Gif from "./Gif";
import notfound from "../imagenes/notfound.jpg";
import "./Listado.css";

let apiKey = "2ZEPY7PWMdCbc4nWcgflY72LcVevldu4";
let url = `https://api.giphy.com/v1/gifs/trending?api_key=2ZEPY7PWMdCbc4nWcgflY72LcVevldu4`;

export default function Listado({ gifs, loading, isDark }) {
  return (
    <div className={`contenedor-listado ${isDark ? "dark" : "light"}`}>
      {loading ? (
        <p>Loading...</p>
      ) : gifs.length > 0 ? (
        gifs.map((item) => {
          return (
            <Gif
              Dark={isDark}
              imagen={item.images.downsized.url}
              key={item.id}
              titulo={item.title}
              url={item.url}
              ancho={item.width}
            />
          );
        })
      ) : (
        <img width="100%" src={notfound} alt="no se encontro nada" />
      )}
    </div>
  );
}
