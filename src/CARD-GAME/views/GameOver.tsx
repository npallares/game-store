import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { useNavigate } from "react-router-dom";
import {
  getFinalTime,
  setFinishedTimestamp,
} from "../../state/slices/time.slice";
import { useEffect } from "react";
import { setCardsInitialState } from "../../state/slices/cards.slice";

const GameOver = () => {
  const dispatch = useAppDispatch();
  const timeState = useAppSelector((state) => state.time);
  //const cardState = useAppSelector((state) => state.dragonballCards);
  const navigate = useNavigate();

  const { finalTime } = timeState;

  useEffect(() => {
    dispatch(setCardsInitialState());
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
