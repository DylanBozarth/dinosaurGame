import React from 'react'
import "./games.css"

export const Start = () => {
    return (
        <div>
<div className="masterDiv">
      {" "}
      
     
      <div className="jumpgameBox"><div className="titlebox">
        <h3 className="score">Don't go extinct!</h3>
        <br />
        <p className="score">Score: 0</p>
        <h3>Start?</h3>
      </div>
        <div className="player" id="player"></div>
        <div  className="enemy" id="enemy"></div><div className="fire"></div>
      </div>
    </div>

        </div>
    )
}