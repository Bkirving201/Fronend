import React, { useState, useEffect } from "react";
import './App.css'
const ApiPlayers = "https://backend-soccer.onrender.com/api/jugadores/irving";

const Cards = () => {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPlayers = async () => {
    try {
      const response = await fetch(ApiPlayers);
      const data = await response.json();
      setPlayers(data.players);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlayers();
  }, []);

  return (

    <div className="div">

      <div className="container row">

      <h1 className="Titulo">Jugadores TOP</h1>
      <br/>
      {isLoading ? (
        <h1>Cargando...</h1>
      ) : (
        players.map((player) => {
          return (

            <div key={player._id} className="card" style={{ width: "18rem" }}>

              
                    <br/>
                    <img
                    src={player.playerImgProfile}
                    className="card-img-top"
                    alt={player.playerName}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      
                    }}
                    />

                    <div classname="card-body" style={{width: '18rem'}}>

                      <h5 className="card-title">{player.playerName}</h5>

                      <div className="card" style={{width: '16rem'}}>

                          <ul className="list-group list-group-flush">

                            <li className="list-group-item">{player.playerPosition}</li>
                            <li className="list-group-item">{player.playerSize}</li>
                            <li className="list-group-item">{player.playerWight}</li>
                            <li className="list-group-item">{player.playerTeamActual}</li>
                            <li className="list-group-item">{player.playerNationality}</li>

                          </ul>
                          
                      </div>

                    </div>

                    
            </div>
            
          );
        })
      )}

      </div>

     
    </div>
  );
};

export default Cards;
