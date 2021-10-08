
import './App.css';

import { BrowserRouter as  Switch, Route, Link } from "react-router-dom";
import {JumpGame} from './jumpgame'
import {GameOver} from './gameover'
import { Start } from './start';
function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path='/' component={Start} />
        <Route exact path="/dino" component={JumpGame} />
        <Route path="/gameover" component={GameOver} />
      </Switch>
    </div>
  );
}

export default App;
