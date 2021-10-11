import React, { useEffect } from "react";

import { Link } from "react-router-dom";
export const GameOver = (props) => {
  return (
    <div className="gameOverScreen">
     
    
      <h2 className="deadText">
        YOU DIED <br /> YOUR DEEDS SHALL BE REMEMBERED <br />
        UNTIL YOU REFRESH THE PAGE
      </h2>
      <Link to="/dino" className="start">
        Try again?
      </Link>
      <div className="deadPlayer text-center"></div>
    </div>
  );
};
