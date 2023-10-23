import "./App.css";
import { Route, Routes } from "react-router-dom";
import PokemonCardGame from "./CARD-GAME/views/PokemonCardGame";
import DragonBallCardGame from "./CARD-GAME/views/DragonBallCardGame";
import GameOver from "./CARD-GAME/views/GameOver";
import Home from "./CARD-GAME/views/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gameover" element={<GameOver />} />
      <Route path="/dragonball" element={<DragonBallCardGame />} />
      <Route path="/pokemon" element={<PokemonCardGame />} />
    </Routes>
  );
}

export default App;
