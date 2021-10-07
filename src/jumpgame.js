import React, { useState, useEffect } from "react";
import "./games.css";
export const JumpGame = () => {
  const [score, setScore] = useState(0)
  const [enemy, setEnemy] = useState({});
  const [playerPosition, setPlayerPosition] = useState(' ')
  useEffect(() => {
    document.addEventListener("keyup", (event) => {
      if (event.code === "Space") {
        Jump();
      }
      
      getEnemyCords()
getPlayerCords()

    }, []);
    function getEnemyCords() {
      var element = document.getElementById('enemy');
    var position = element.getBoundingClientRect();
    var x = position.left;
    var y = position.top;
console.log("enemy", x, y)
    }
    function getPlayerCords() {
      var element = document.getElementById('player');
    var position = element.getBoundingClientRect();
    var x = position.left;
    var y = position.top;
console.log("player", x, y)
    }
    // the score counter is just a timer with the same delay as the rock animation 
    const ScoreCount = () => {
      setTimeout(() => {
        setScore(score + 1)
      }, 3000)
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
        <div  className={`player ${playerPosition}`} id="player"></div>
        <div style={enemy} className="enemy" id="enemy"></div>
       <p className="score">Score: {score}</p></div>
     
    </div>
  );
};
