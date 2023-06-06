import { useEffect } from "react";
import styles from "./CardGame.module.css";
import { CardItem } from "./CardItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  resetAllRedux,
  setFirstCardRedux,
  setIsMatchRedux,
  setSecondCardRedux,
} from "../../redux/slices/game.slice";
import {
  CardState,
  setCardIsDoneFalse,
  setCardIsDoneTrue,
  setCardViewFrontFalse,
  setCardViewFrontTrue,
} from "../../redux/slices/cards.slice";
import checkIsDone from "../../hooks/checkIsDone";


const CardGame = () => {
  const cardsState = useAppSelector((state) => state.cards);
  const gameState = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const resetAll = () => {
    dispatch(resetAllRedux());
  };

  const resetGametimeOut = () => setTimeout(resetAll, 1500);

  const resetViewFront = (firstCardId: string, secondCardId: string) => {
    dispatch(setCardViewFrontFalse(firstCardId));
    dispatch(setCardViewFrontFalse(secondCardId));
  };

  const resetViewFrontTimeOut = (firstCardId: string, secondCardId: string) =>
    setTimeout(() => resetViewFront(firstCardId, secondCardId), 1000);

  const { firstCardId, secondCardId, isMatch } = gameState;

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
    const isDone = checkIsDone(id, cardsState)
    if (isDone) return;
    settingCards(value, id);
  };
  
  useEffect(() => {
    gameFunction();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.isMatch]);

  return (
    <div>
      {cardsState.map((card: CardState) => {
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
