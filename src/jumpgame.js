import React, { useState, useEffect } from "react";
import "./games.css";
// MOVING TO REGULAR JAVASCIPT
export const JumpGame = () => {
  const [enemy, setEnemy] = useState({});
  const [playerPosition, setPlayerPosition] = useState(' ')
  useEffect(() => {
    document.addEventListener("keyup", (event) => {
      if (event.code === "Space") {
        Jump();
      }
    });
  }, []);
  function Jump() {
    setPlayerPosition('jump')
    setTimeout(() => {
      setPlayerPosition('')
    }, 300);
  }
  return (
    <div className="masterDiv">
      <div className="jumpgameBox">
        Try and survive lol
        <div  className={`player ${playerPosition}`}></div>
        <div style={enemy} className="enemy"></div>
      </div>
    </div>
  );
};
