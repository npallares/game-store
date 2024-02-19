//import "./App.css";
import "./styles/index.css";
import { Route, Routes } from "react-router-dom";
import Game from "./CARD-GAME/views/Game/Game";
import GameOver from "./CARD-GAME/views/GameOver/GameOver";
import Modal from "./CARD-GAME/components/Modal/Modal";
import Home from "./CARD-GAME/views/Home/Home";
import { useAppSelector } from "./state/hooks";

function App() {
  const isDone = useAppSelector((state) => state.game.isDone);
  console.log("Nicolas2", isDone);
  return (
    <Routes>
      <Route path="/" element={<Modal isDone={isDone} />}>
        <Route index element={<Home />} />
        <Route path="/:theme" element={<Game />} />
        <Route path="/gameover" element={<GameOver />} />
      </Route>
    </Routes>
  );
}

export default App;
