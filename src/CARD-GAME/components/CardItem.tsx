import { CardState } from "../context/CardsComponentContext";
import styles from "./CardItem.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  resetAll,
  setFirstCard,
  setIsMatch,
  setSecondCard,
} from "../../redux/slices/game.slice";
import { setCardViewFront } from "../../redux/slices/cards.slice";
import { useState } from "react";

type Card = {
  card: CardState;
};

export const CardItem = ({ card }: Card) => {
  
  const dispatch = useAppDispatch();
  const [data, setData] = useState(null)
  
  const cardsState = useAppSelector((state) => state.cardsReducer);
  const gameState = useAppSelector((state) => state.gameReducer);
  
  const { value, id, ViewFront } = card;

  const cardSeters = () => {
    if (gameState.firstCardId === null) {
      dispatch(
        setFirstCard({
          firstCard: value,
          firstCardId: id,
        })
      );
      dispatch(setCardViewFront(id));  

    } else if (gameState.secondCardId === null) {
      dispatch(
        setSecondCard({
          secondCard: value,
          secondCardId: id,
        })
      );
      dispatch(setIsMatch());
      
      dispatch(setCardViewFront(id));  
      const reset = () => dispatch(resetAll());
      setTimeout(reset, 3000);
    }
  };

  const handlerClick = () => {
    cardSeters();
  };

  return (
    <div
      className={`${styles.cardContenier} ${
        ViewFront ? styles.selected : styles.noSelected
      }`}
      onClick={handlerClick}
    >
      {value}
    </div>
  );
};
