import React from "react";
import Gif from "./Gif"
import Hourglass from"../imagenes/Hourglass.gif"

let apiKey = "2ZEPY7PWMdCbc4nWcgflY72LcVevldu4"
let url = `https://api.giphy.com/v1/gifs/trending?api_key=2ZEPY7PWMdCbc4nWcgflY72LcVevldu4`;


export default function Listado({gifs, loading}) {


  if (!gifs || !gifs.length === 0) {
    return <p>No encontramos nada, intentelo de nuevo </p>;
  }

  return (
    <div >
      {loading ? <p>Loading...</p> : gifs.length > 0 ? gifs.map((item)=>{ return<Gif imagen={item.images.downsized.url} key={item.id} titulo={item.title} url={item.url} ancho={item.width} />}):<img src={Hourglass} alt="loading" />}

    </div>
  );
}
