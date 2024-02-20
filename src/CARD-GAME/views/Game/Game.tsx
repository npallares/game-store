import { useEffect } from "react";
import styles from "./game.module.scss";
import { CardItem } from "../../components/CardItem/CardItem";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import {
  resetAllRedux,
  setFirstCardRedux,
  setIsMatchRedux,
  setSecondCardRedux,
  setIsDone,
} from "../../../state/slices/game.slice";
import {
  setCardIsDoneFalse,
  setCardIsDoneTrue,
  setCardViewFrontFalse,
  setCardViewFrontTrue,
} from "../../../state/slices/cards.slice";
import checkIsDone from "../../../helpers/checkIsDone";
import { CardState } from "../../../types/cards/card_types";
import { useNavigate, useParams } from "react-router-dom";
import { setCards } from "../../../state/slices/cards.slice";
import { addStep } from "../../../state/slices/steps.slice";

const Game = () => {
  const { theme } = useParams();
  const cardsStatus = useAppSelector((state) => state.cards.status);
  const cards = useAppSelector((state) => state.cards.cards);
  const gameState = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();
  //const navigate = useNavigate();

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
    return isOver ? /* navigate("/gameover") */ dispatch(setIsDone()) : false;
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
        dispatch(addStep());
        resetViewFrontTimeOut(firstCardId, secondCardId);
        resetGametimeOut();
        return;
      }
      if (checkIsMatchFalse) {
        dispatch(addStep());
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
    // MEJORA SACAR ESLINT-DISABLE
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsStatus]);

  useEffect(() => {
    gameOver();
    gameFunction();
    // MEJORA SACAR ESLINT-DISABLE
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.isMatch]);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {cards.map((card: CardState) => {
          return (
            <div
              role="button"
              key={card.id}
              className={`${styles.cardContainer}`}
              onClick={() => handlesClick(card.value, card.id)}
            >
              <CardItem card={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Game;
