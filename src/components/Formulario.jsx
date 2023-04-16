import React, { useState } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import './App.css'
const API_URL = "https://backend-soccer.onrender.com/api/jugadores/irving";


const formularioInicio = {
  playerName: "",
  playerPosition: "",
  playerImgProfile: "",
  playerSize: "",
  playerWight: "",
  playerTeamActual: "",
  playerNationality: "",
};



const Formulario = () => {
  const [formulario, setFormulario] = useState(formularioInicio);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post(API_URL, formulario)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    window.location.href = '/';
  }

  
  

  return (
    <>
       <h1 className="Titulo">Formulario para enviar jugadores a la BD</h1>
      

        <form onSubmit={handleSubmit}>


            <div className="row">

                <div class="col">

                
                  <label className="Label">
                    Nombre del jugador:
                  </label>
                  
                  <input
                    class="form-control"
                    type="text"
                    name="playerName"
                    value={formulario.playerName}
                    onChange={handleChange}
                  />

                </div>

                <br/>

                <div class="col">

                
                  <label className="Label">
                    Posición del jugador:
                  </label>

                  <input
                    class="form-control"
                    type="text"
                    name="playerPosition"
                    value={formulario.playerPosition}
                    onChange={handleChange}
                  />

                </div>

                <br/>

                <div class="col">

                
                  <label className="Label">
                    Imagen del jugador:
                  </label>

                  
                  <input
                    class="form-control"
                    type="text"
                    name="playerImgProfile"
                    value={formulario.playerImgProfile}
                    onChange={handleChange}
                  />

                </div>

                                            
            </div>
        

          <div className="row">

            <div class="col">


              <label className="Label">
                Peso del jugador:
              </label>
              
              <input
                class="form-control"
                type="text"
                name="playerSize"
                value={formulario.playerSize}
                onChange={handleChange}
              />

            </div>

            <br/>

            <div class="col">


              <label className="Label">
                Altura del jugador:
              </label>

              <input
                class="form-control"
                type="text"
                name="playerWight"
                value={formulario.playerWight}
                onChange={handleChange}
              />

            </div>

            <br/>

            <div class="col">


              <label className="Label">
                Equipo actual del jugador:
              </label>

              
              <input
                class="form-control"
                type="text"
                name="playerTeamActual"
                value={formulario.playerTeamActual}
                onChange={handleChange}
              />

            </div>

            <div class="col">


              <label className="Label">
                Nacionalidad:
              </label>
              
              <input
                class="form-control"
                type="text"
                name="playerNationality"
                value={formulario.playerNationality}
                onChange={handleChange}
              />

            
            </div>

            <div className="col">
               <br/>
              
              <button onClick={handleClick}

                  type="submit"
                  class="btn btn-primary">

                  Enviar

                </button> 

            </div>


                  

            
      

          </div>
          
                          
             
                
         

          
        </form>
    </>
  );
};

export default Formulario;
