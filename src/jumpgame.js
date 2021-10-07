import React, { useState, useEffect } from "react";
import "./games.css";
export const JumpGame = () => {
  const [score, setScore] = useState(0)
  const [enemy, setEnemy] = useState({});
  const [playerClass, setPlayerClass] = useState(' ')
  const [playerPosition, setPlayerPosition] = useState({playerx: 0, playery: 0})
  const [enemyPosition, setEnemyPosition] = useState({enenmyx: 0, enemyy: 0})
  useEffect(() => {
    document.addEventListener("keyup", (event) => {
      if (event.code === "Space") {
        Jump();
        
      }
    
      

    }, []);
    
   
    // the score counter is just a timer with the same delay as the enemy animation 
    const ScoreCount = () => {
      setTimeout(() => {
        setScore(score + 1)
      }, 3000)
    }
    ScoreCount()

  });
  function getEnemyCords() {
    var element = document.getElementById('enemy');
  var position = element.getBoundingClientRect();
  var x = position.left;
  var y = position.top;
setEnemyPosition({enemyx: x, enemyy: y})
console.log(enemyPosition)
  }
  function getPlayerCords() {
    var element = document.getElementById('player');
  var position = element.getBoundingClientRect();
  var x = position.left;
  var y = position.top;
setPlayerPosition({playerx: x, playery: y})
  }
 
  function Jump() {
    setPlayerClass('jump')
    setTimeout(() => {
      setPlayerClass('')
    }, 400);
  }
  return (
    <div className="masterDiv">
      <div className="jumpgameBox">
        Try and survive lol
      
        <div  className={`player ${playerClass}`} id="player"></div>
        <div style={enemy} className="enemy" id="enemy"></div>
       <p className="score">Score: {score}</p></div>
    </div>
  );
};
