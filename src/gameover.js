import React from 'react'


import { Link } from "react-router-dom";
export const GameOver = () => {
    var sadmusic = new Audio('./sadmusic.mp3')
    return (
        
        <div className="gameOverScreen">

<h2 className="deadText">YOU DIED <br /> YOUR DEEDS SHALL BE REMEMBERED <br />
Until you refresh the page</h2>
<Link to="/dino" className="start">Try again?</Link>
<div className="deadPlayer text-center"></div>
        </div>
    )
}