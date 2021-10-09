import React,  {useEffect} from 'react'


import { Link } from "react-router-dom";
export const GameOver = (props) => {
    
    useEffect(() => {
        props.sadMusic.play()
        const playPromise = props.sadMusic.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
               console.log("audio played auto");
            })
            .catch(() => {
               console.log("playback prevented");
            });
        }
       
    })
    return (
        
        <div className="gameOverScreen">
<button onClick={() => props.sadMusic.play()}>aaa</button>
<h2 className="deadText">YOU DIED <br /> YOUR DEEDS SHALL BE REMEMBERED <br />
UNTIL YOU REFRESH THE PAGE</h2>
<Link to="/dino" className="start">Try again?</Link>
<div className="deadPlayer text-center"></div>
        </div>
    )
}