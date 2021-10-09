
import './App.css';

import { BrowserRouter as  Switch, Route, Link } from "react-router-dom";
import {JumpGame} from './jumpgame'
import {GameOver} from './gameover'
import { Start } from './start';

function App() {
  var epicMusic = new Audio ('./epicmusic.mp3')
  var Oof = new Audio ('./oof.mp3')
  var sadMusic = new Audio ('./sadmusic.mp3')
  return (
    <div className="App">
      
      <Switch>
      <Route
              exact
              path="/"
              render={(props) => (
                <Start {...props} music={epicMusic} />
              )}
            />
        <Route
              exact
              path="/dino"
              render={(props) => (
                <JumpGame {...props} music={epicMusic} oof ={Oof} />
              )}
            />
         <Route
              exact
              path="/gameover"
              render={(props) => (
                <GameOver {...props} music={epicMusic} sadMusic={sadMusic} oof ={Oof} />
              )}
            />
      </Switch>
    </div>
  );
}

export default App;
