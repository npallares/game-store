import "./App.css";
import { Route, Routes } from "react-router-dom";
import CardGame from "./CARD-GAME/views/CardGame/CardGame";
import GameOver from "./CARD-GAME/views/GameOver/GameOver";
import Home from "./CARD-GAME/views/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:theme" element={<CardGame />} />
      <Route path="/gameover" element={<GameOver />} />
    </Routes>
  );
}

export default App;
