import React from "react";
import Api from "./components/Api";
import Cards from "./components/Cards";
import Formulario from "./components/Formulario";
import Menu from "./components/Menu";

//Vamos a crear el una función para consumir nuestra API local

//Vamos a usar useEffect

const App = () => {
  return (
    <>

      <Menu/>
      <Cards/>
      <Formulario/>
    </>
  );
};

export default App;
