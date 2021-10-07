import React, { useState, useEffect } from "react";
import "./games.css";
export const JumpGame = () => {
  const [score, setScore] = useState(0);
  const [enemy, setEnemy] = useState({});
  const [playerClass, setPlayerClass] = useState(" ");

  document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
      Jump();
    }
// fires around 100 times a second
    function check4Death() {
      if (playerClass !== "") {
        console.log("safe");
      } else {
        console.log("nope");
        clearInterval();
      }
    }
    setInterval(check4Death, 3000);

    // the score counter is just a timer with the same delay as the enemy animation
    const ScoreCount = () => {
      setTimeout(() => {
        setScore(score + 1);
      }, 3000);
    };
    ScoreCount();
  });

  function Jump() {
    setPlayerClass("jump");
    setTimeout(() => {
      setPlayerClass("");
    }, 500);
  }
  return (
    <div className="masterDiv">
      <div className="jumpgameBox">
        Try and survive lol
        <div className={`player ${playerClass}`} id="player"></div>
        <div style={enemy} className="enemy" id="enemy"></div>
        <p className="score">Score: {score}</p>
      </div>
    </div>
  );
};
