import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import PokemonCardGame from "./CARD-GAME/components/PokemonCardGame";
import DragonBallCardGame from "./CARD-GAME/components/DragonBallCardGame";
import GameOver from "./CARD-GAME/components/GameOver";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { setInitialTimestamp } from "./redux/slices/time.slice";

const Home = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setInitialTimestamp());
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        color: "white",
        backgroundColor: "lightskyblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Home</h1>
      <h2>Selecciona un juego</h2>
      <div>
        <Link to="/dragonball">
          <button
            onClick={handleClick}
            style={{
              width: "150px",
              height: "50px",
              border: "2px solid grey",
              margin: "50px",
              cursor: "pointer",
            }}
          >
            DRAGON BALL
          </button>
        </Link>
        <button
          onClick={handleClick}
          style={{
            width: "150px",
            height: "50px",
            border: "2px solid grey",
            margin: "50px",
            cursor: "pointer",
          }}
        >
          <Link to="/pokemon">
            <button>POKEMON</button>
          </Link>
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gameover" element={<GameOver />} />
      <Route path="/dragonball" element={<DragonBallCardGame />} />
      <Route path="/pokemon" element={<PokemonCardGame />} />
    </Routes>
  );
}

export default App;
