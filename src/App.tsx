//import "./App.css";
import "./styles/index.css";
import { Route, Routes } from "react-router-dom";
import Game from "./CARD-GAME/views/Game/Game";
import ModalService from "./CARD-GAME/services/ModalService/ModalService";
import Home from "./CARD-GAME/views/Home/Home";
import Material from "./CARD-GAME/views/Material/Material";
import TriviaGame from "./CARD-GAME/views/TriviaGame/TriviaGame";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ModalService />}>
        <Route index element={<Home />} />
        <Route path="/:theme" element={<Game />} />
        <Route path="/material" element={<Material />} />
        <Route path="/trivia" element={<TriviaGame />} />
      </Route>
    </Routes>
  );
}

export default App;
