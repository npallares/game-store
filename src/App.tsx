//import "./App.css";
import "./styles/index.css";
import { Route, Routes } from "react-router-dom";
import Game from "./views/MemoGame";
import ModalService from "./CARD-GAME/services/ModalService/ModalService";
import Material from "./views/Material";
import React from "react";
import { Home, TriviaGame } from "./views";

enum PATHS {
  CARD_GAME = "/cardsGame/:theme",
  TRIVIA_GAME = "/trivia/:theme",
}

function App() {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<ModalService />}>
          <Route index element={<Home />} />
          <Route path={PATHS.CARD_GAME} element={<Game />} />
          <Route path={PATHS.TRIVIA_GAME} element={<TriviaGame />} />
          <Route path="/material" element={<Material />} />
        </Route>
      </Routes>
    </React.StrictMode>
  );
}

export default App;
