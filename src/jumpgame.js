import React, { useState, useEffect } from "react";
import "./games.css";
// MOVING TO REGULAR JAVASCIPT
export const JumpGame = () => {
  const [score, setScore] = useState(0)
  const [enemy, setEnemy] = useState({});
  const [playerPosition, setPlayerPosition] = useState(' ')
  useEffect(() => {
    document.addEventListener("keyup", (event) => {
      if (event.code === "Space") {
        Jump();
      }
    });
    const ScoreCount = () => {
      setTimeout(() => {
        setScore(score + 1)
      }, 3100)
    }
    ScoreCount()
  });
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
       <p className="score">Score: {score}</p></div>
     
    </div>
  );
};
