import React, { useState, useEffect } from "react";
import "./Busqueda.css";
import ilustra from "../imagenes/ilustra.svg";
import search from "../imagenes/search.svg";
import { Hint } from "react-autocomplete-hint";
import axios from "axios";

export default function Busqueda({ isDark, gifs, setGifs, setLoading }) {
  const [userSearch, setUserSearch] = useState("");
  const [url, setUrl] = useState(
    "https://api.giphy.com/v1/gifs/trending?api_key=2ZEPY7PWMdCbc4nWcgflY72LcVevldu4&limit=12"
  );
  const [HintData, setHintData] = useState([]);

  const traerGifs = () => {
    setLoading(true);
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

  const getData = async () => {
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=2ZEPY7PWMdCbc4nWcgflY72LcVevldu4&q=${userSearch}&limit=12`
    );
    var hintArray = [];

    res.data.data.map((a) => hintArray.push(a.name));
    setHintData(hintArray);
  };

  useEffect(() => {
    if (gifs.length > 0) {
      setLoading(false);
    }
  }, [gifs]);

  useEffect(() => {
    setUrl(
      `https://api.giphy.com/v1/gifs/search?api_key=2ZEPY7PWMdCbc4nWcgflY72LcVevldu4&q=${userSearch}&limit=12`
    );
    getData();
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
        <div className="input-wrapper">
          <div className="rah-input-wrapper">
            <Hint options={HintData} allowTabFill>
              <input
                type="text"
                id="barra"
                onChange={(e) => setUserSearch(e.target.value)}
                value={userSearch}
                placeholder="Busca gifs"
              />
            </Hint>
          </div>
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
