//import "./App.css";
import "./styles/index.css";
import { Route, Routes } from "react-router-dom";
import MemoGame from "./views/MemoGame";
import React from "react";
import { Home, TriviaGame } from "./views";
import Modal from "./views/Modal";
import { PATHS } from "./enums/paths";

function App() {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Modal />}>
          <Route index element={<Home />} />
          <Route path={PATHS.CARD_GAME} element={<MemoGame />} />
          <Route path={PATHS.TRIVIA_GAME} element={<TriviaGame />} />
          <Route path="/modal" element={<Modal />} />
        </Route>
      </Routes>
    </React.StrictMode>
  );
}

export default App;
