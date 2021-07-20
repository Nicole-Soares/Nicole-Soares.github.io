import React, {useState} from "react";
import "./styles.css";
import Header from "./componentes/Header";
import Busqueda from "./componentes/Busqueda";
import Listado from "./componentes/Listado"

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false)
  return (
    <div className={`App ${isDark ? "dark" : "light"}`}>
      <div className="viewport">
        <Header isDark={isDark} setIsDark={setIsDark}/>
        <Busqueda isDark={isDark} gifs={gifs} setGifs={setGifs} setLoading={setLoading}/>
        <Listado gifs={gifs} loading={loading} isDark={isDark}/>
      </div>
    </div>
  );
}
