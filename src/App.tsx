//import "./App.css";
import "./styles/index.css";
import { Route, Routes } from "react-router-dom";
import Game from "./CARD-GAME/views/Game/Game";
import GameOver from "./CARD-GAME/views/GameOver/GameOver";
import Home from "./CARD-GAME/views/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:theme" element={<Game />} />
      <Route path="/gameover" element={<GameOver />} />
    </Routes>
  );
}

export default App;
