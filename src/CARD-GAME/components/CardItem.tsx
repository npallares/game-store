import React, { useContext, useEffect, useState } from "react";
import { CardState, CardsContext } from "../context/CardsComponentContext";
import styles from "./CardItem.module.css";
import { GameContext } from "../context/GameComponentContext";

type Card = {
  card: CardState;
};

export const CardItem = ({ card }: Card) => {
  const gameContext = useContext(GameContext);
  const cardsContext = useContext(CardsContext);

  const [isSelected, setIsSelected] = useState(false);

  const { value, id } = card;
  const {changeCardToDone} = cardsContext;

  const { game, setFirstCard, setSecondCard, resetAll, checkMatch } =
    gameContext;

  const handlerClick = () => {
    if (game.firstCard === null) setFirstCard(value, id);
    else if (game.secondCard === null) {
      setSecondCard(value, id);
      checkMatch();
     /*  const myCheck = checkMatch()
      if(myCheck) changeCardToDone(card) */
    }
    //console.log(game);
  };

  return (
    <div
      className={`${styles.cardContenier} ${card.done ? styles.selected : styles.noSelected}`}
      onClick={handlerClick}
    >
      {value}
    </div>
  );
};
