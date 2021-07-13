import React, {useState} from "react";
import Gif from "./Gif"

//let apiKey = "2ZEPY7PWMdCbc4nWcgflY72LcVevldu4";
//let url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;


export default function Listado() {
  const [post, setPost] = useState([]);

 fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
 .then((respuesta)=>{
   return respuesta.json()
 })
 .then((data)=>{
   setPost(data)
   return setPost
 })
 .catch((error)=>{
   return console.log(error)
 })

  return (
    <div >
      {post.length > 0 ? post.map((item)=>{ return<Gif imagen={item.url} />}):""}

    </div>
  );
}
