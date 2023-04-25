import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  GameComponentContext,
  GameContext,
} from "./CARD-GAME/context/GameComponentContext";
import CardGame from "./CARD-GAME/components/CardGame";
import { CardsComponentContext } from "./CARD-GAME/context/CardsComponentContext";

function App() {
  return (
    <CardsComponentContext>
      <GameComponentContext>
        <CardGame />
      </GameComponentContext>
    </CardsComponentContext>
  );
}

export default App;
