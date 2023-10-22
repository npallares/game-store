import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import PokemonCardGame from "./CARD-GAME/components/PokemonCardGame";
import DragonBallCardGame from "./CARD-GAME/components/DragonBallCardGame";
import GameOver from "./CARD-GAME/components/GameOver";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link to='/dragonball'>Dragon Ball</Link></li>
        <li><Link to='/pokemon'>Pokemon</Link></li>
      </ul>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gameover" element ={<GameOver/>}/>
      <Route path="/dragonball" element={<DragonBallCardGame />} />
      <Route path="/pokemon" element={<PokemonCardGame />} />
    </Routes>
  );
}

export default App;
