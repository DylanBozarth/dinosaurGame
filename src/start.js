import React from 'react'
import "./games.css"

import { Link } from "react-router-dom";
export const Start = (props) => {
   
    return (
        <div>
<div className="masterDiv">
      {" "}
      
     
      <div className="jumpgameBox"><div className="titlebox">
        <h3 className="score">Don't go extinct!</h3>
        <br />
        <p className="score">Score: 0  <br /> Press the space bar to jump, and well that's pretty much it. <br /> Press the "jump" for mobile users </p>
        <h3><Link to="/dino" className="start" onClick={() => props.music.play()}>Start?</Link></h3>
      </div>
        <div className="player" id="player"></div>
        <div  className="enemy" id="enemy"></div><div className="fire"></div>
      </div>
    </div>

        </div>
    )
}