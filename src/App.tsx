import "./App.css";
import CardGame from "./CARD-GAME/components/CardGame";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card-game" element={<CardGame />} />
    </Routes>
  );
}

export default App;
