import { useEffect } from "react";
import styles from "./cardGame.module.css";
import { CardItem } from "./CardItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  resetAllRedux,
  setFirstCardRedux,
  setIsMatchRedux,
  setSecondCardRedux,
} from "../../redux/slices/game.slice";
import {
  setCardIsDoneFalse,
  setCardIsDoneTrue,
  setCardViewFrontFalse,
  setCardViewFrontTrue,
} from "../../redux/slices/cards.slice";
import checkIsDone from "../../helpers/checkIsDone";
import { CardState } from "../../types/cards/card_types";
import { useNavigate, useParams } from "react-router-dom";
import { setCards } from "../../redux/slices/cards.slice";

const CardGame = () => {
  const { theme } = useParams();
  console.log("Nicolas params", theme);
  const cardsStatus = useAppSelector((state) => state.cards.status);
  const cards = useAppSelector((state) => state.cards.cards);
  const navigate = useNavigate();
  const gameState = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const { firstCardId, secondCardId, isMatch } = gameState;


  const resetAll = () => {
    dispatch(resetAllRedux());
  };

  const resetGametimeOut = () => setTimeout(resetAll, 500);

  const resetViewFront = (firstCardId: string, secondCardId: string) => {
    dispatch(setCardViewFrontFalse(firstCardId));
    dispatch(setCardViewFrontFalse(secondCardId));
  };

  const gameOver = () => {
    const isOver = cards.every((card) => card.done === true);
    return isOver ? navigate("/gameover") : false;
  };

  const resetViewFrontTimeOut = (firstCardId: string, secondCardId: string) =>
    setTimeout(() => resetViewFront(firstCardId, secondCardId), 500);


  const checkIsMatchTrue =
    firstCardId !== null && secondCardId !== null && isMatch === true;

  const checkIsMatchFalse =
    firstCardId !== null && secondCardId !== null && isMatch === false;

  const checkIsMatchNull =
    firstCardId !== null && secondCardId !== null && isMatch === null;

  const gameFunction = () => {
    if (!checkIsMatchNull) {
      if (checkIsMatchTrue) {
        dispatch(setCardIsDoneTrue(firstCardId));
        dispatch(setCardIsDoneTrue(secondCardId));
        resetViewFrontTimeOut(firstCardId, secondCardId);
        resetGametimeOut();
        return;
      }
      if (checkIsMatchFalse) {
        resetViewFrontTimeOut(firstCardId, secondCardId);
        resetGametimeOut();
        return;
      }
      return;
    }
    return;
  };
  
  const settingCards = (value: string, id: string) => {
    if (firstCardId === null) {
      dispatch(setFirstCardRedux({ value, id }));
      dispatch(setCardIsDoneFalse(id));
      dispatch(setCardViewFrontTrue(id));
      return;
    }
    if (secondCardId === null) {
      dispatch(setSecondCardRedux({ value, id }));
      dispatch(setCardIsDoneFalse(id));
      dispatch(setCardViewFrontTrue(id));
      dispatch(setIsMatchRedux());
      return;
    }
  };

  const handlesClick = (value: string, id: string) => {
    const isDone = checkIsDone(id, cards);
    if (isDone) return;
    settingCards(value, id);
  };

  useEffect(() => {
    if (!theme || cardsStatus !== "Uninitialized") return;
    dispatch(setCards(theme));
  }, [cardsStatus]);

  useEffect(() => {
    gameOver();
    gameFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.isMatch]);

  return (
    <div className={styles.container}>
      {cards.map((card: CardState) => {
        return (
          <button
            key={card.id}
            className={styles.cardButton}
            onClick={() => handlesClick(card.value, card.id)}
          >
            <CardItem card={card} />
          </button>
        );
      })}
    </div>
  );
};

export default CardGame;
