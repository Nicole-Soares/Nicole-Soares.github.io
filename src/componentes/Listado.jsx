import React, {useState, useEffect} from "react";
import Gif from "./Gif"

let apiKey = "2ZEPY7PWMdCbc4nWcgflY72LcVevldu4"
let url = `https://api.giphy.com/v1/gifs/trending?api_key=2ZEPY7PWMdCbc4nWcgflY72LcVevldu4`;


export default function Listado({gifs}) {
  return (
    <div >
      {gifs.length > 0 ? gifs.map((item)=>{ return<Gif imagen={item.images.original.url} />}):""}

    </div>
  );
}
