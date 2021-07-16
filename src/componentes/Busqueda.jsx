import React, { useState, useEffect } from "react";
import "./Busqueda.css";
import ilustra from "../imagenes/ilustra.svg";
import search from "../imagenes/search.svg";

export default function Busqueda({ isDark, gifs, setGifs }) {
  const [userSearch, setUserSearch] = useState("");
  const [url, setUrl] = useState("https://api.giphy.com/v1/gifs/trending?api_key=2ZEPY7PWMdCbc4nWcgflY72LcVevldu4&limit=5");

  const traerGifs = () => {
    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        return setGifs(data.data);
      })
      .catch((error) => {
        return console.log(error);
      });
  };

  useEffect(() => {
    setUrl(
      `https://api.giphy.com/v1/gifs/search?api_key=2ZEPY7PWMdCbc4nWcgflY72LcVevldu4&q=${userSearch}&limit=12`
    );
  }, [userSearch]);

  useEffect(() => {
    traerGifs();
  }, []);

  return (
    <div className="contenedor-busqueda">
      <div className="contenedor-titulo">
        <p className={`oracion-inspirate ${isDark ? "dark" : "light"}`}>
          ¡Inspirate y busca los mejores Gifos!
        </p>
      </div>
      <div className="contenedor-icono-barra-busqueda">
        <div className="contenedor-imagen">
          <img className="imagen" src={ilustra} alt="icono" />
        </div>
        <div className="field" id="searchform">
          <input
            type="text"
            id="barra"
            onChange={(e) => setUserSearch(e.target.value)}
            value={userSearch}
            placeholder="Busca gifs"
          />
          <button
            className="boton-busqueda"
            type="button"
            id="boton"
            onClick={traerGifs}
          >
            <img width="12px" src={search} alt="busqueda" />
          </button>
        </div>
        <div className="contenedor-resultados">
          <p className={`oracion-resultados ${isDark ? "dark" : "light"}`}>
            Resultados de la busqueda
          </p>
        </div>
      </div>
    </div>
  );
}
