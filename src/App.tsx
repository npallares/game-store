//import "./App.css";
import "./styles/index.css";
import { Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import ModalService from "./CARD-GAME/services/ModalService/ModalService";
import Material from "./pages/Material";
import React from "react";
import { Home, TriviaGame } from "./pages";

function App() {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<ModalService />}>
          <Route index element={<Home />} />
          <Route path="/:theme" element={<Game />} />
          <Route path="/material" element={<Material />} />
          <Route path="/trivia" element={<TriviaGame />} />
        </Route>
      </Routes>
    </React.StrictMode>
  );
}

export default App;
