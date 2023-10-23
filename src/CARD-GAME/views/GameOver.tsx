import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import {
  getFinalTime,
  setFinishedTimestamp,
  setInitialState,
} from "../../redux/slices/time.slice";
import { useEffect, useState } from "react";
import { setCardsInitialState } from "../../redux/slices/dragonballCards.slice";
import { setPokemonCardsInitialState } from "../../redux/slices/pokemonCards.slice";

type Status = {
  FINISHED: string;
  RESTART: string;
  INICIAL: string;
};

const STATUS: Status = {
  FINISHED: "finished",
  RESTART: "restart",
  INICIAL: "inicial",
};

const GameOver = () => {
  const [status, setStatus] = useState<string>(STATUS.INICIAL);
  const dispatch = useAppDispatch();
  const timeState = useAppSelector((state) => state.time);
  //const cardState = useAppSelector((state) => state.dragonballCards);
  const navigate = useNavigate();

  const { finalTime } = timeState;

  useEffect(() => {
    dispatch(setCardsInitialState());
    dispatch(setPokemonCardsInitialState());
    dispatch(getFinalTime());
    dispatch(setFinishedTimestamp());
  });

  const handleClick = () => {
    return navigate("/");
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
      <div>
        <h1>{"GameOver"}</h1>
        <h2>{}</h2>
        <h5>{finalTime ? `${finalTime} Segundos` : ""}</h5>
      </div>
      <button
        onClick={handleClick}
        type="button"
        name="button"
        style={{ width: "150px", height: "50px", border: "2px solid grey" }}
      >
        {"Restart"}
      </button>
    </div>
  );
};

export default GameOver;
