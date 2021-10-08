import React, { useState, useEffect } from "react";
import "./games.css";

import { useHistory } from "react-router-dom";
import useInterval from "react-useinterval";
export const JumpGame = () => {
  var OOF = new Audio('./oof.mp3')
  const history = useHistory();
  const [score, setScore] = useState(0);
  const [enemy, setEnemy] = useState({});
  const [playerClass, setPlayerClass] = useState("");
  useInterval(check4Death, 3000);
  function check4Death() {
    if (playerClass !== "") {
      setScore(score + 1);
    } else {
      GameOver();
    }
  }
  document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
      Jump();
    }
  });

  function Jump() {
    setPlayerClass("jump");
    setTimeout(() => {
      setPlayerClass("");
    }, 900);
  }
  const GameOver = () => {
    OOF.play()
    alert(`You went extinct! Your score was ${score}`);
    clearInterval(check4Death);
    
    history.push('/gameover')
  };
  return (
    <div className="masterDiv">
      {" "}
      
     
      <div className="jumpgameBox"><div className="titlebox">
        <h3 className="score">Don't go extinct!</h3>
        <br />
        <p className="score">Score: {score}</p>
      </div>
        <div className={`player ${playerClass}`} id="player"></div>
        <div style={enemy} className="enemy" id="enemy"></div><div className="fire"></div>
      </div>
    </div>
  );
};
