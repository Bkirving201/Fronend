import React from "react";
import Cards from "./components/Cards";
import Formulario from "./components/Formulario";
import Eliminar from './components/Eliminar';
import MenuBar from "./components/MenuBar";
import './components/App.css';
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
          <Route path="/Eliminar.jsx" exact Component={Eliminar}/>
          
        </Routes>
        
    </Router>   
      
    </>
  );
};


export default App;
