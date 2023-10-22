import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

const GameOver = () => {
  const navigate = useNavigate();
  //const dispatch = useAppDispatch();
  //const cardsState = useAppSelector((state) => state.dragonballCards);
  //const gameState = useAppSelector((state) => state.game);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        color: "white",
        backgroundColor: "lightskyblue",
      }}
    >
      GameOver
      <button onClick={handleClick} type="button">
        {"Restart"}
      </button>
    </div>
  );
};

export default GameOver;
