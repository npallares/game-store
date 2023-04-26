import "./App.css";
import { GameComponentContext } from "./CARD-GAME/context/GameComponentContext";
import { CardsComponentContext } from "./CARD-GAME/context/CardsComponentContext";
import CardGame from "./CARD-GAME/components/CardGame";

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
