import React from "react";
import Cards from "./components/Cards";
import Formulario from "./components/Formulario";
import MenuBar from "./components/MenuBar";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';


//Vamos a crear el una función para consumir nuestra API local

//Vamos a usar useEffect

const App = () => {
  return (
    <>

    <Router>

      <MenuBar />

      <Routes>

        <Route path="/Formulario.jsx" exact Component={Formulario}/>
        <Route path="/" exact Component={Cards}/>

      </Routes>
       
    </Router>
      
      
    </>
  );
};

export default App;
