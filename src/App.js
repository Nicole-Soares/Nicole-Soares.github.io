import React from "react";
import "./styles.css";
import Header from "./componentes/Header";
import Busqueda from "./componentes/Busqueda";

export default function App() {
  return (
    <div className="App">
      <div className="viewport">
        <Header />
        <Busqueda />
      </div>
    </div>
  );
}
