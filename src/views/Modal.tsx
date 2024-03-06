import { Outlet } from "react-router-dom";
import styles from "./modal.module.scss";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import TriviaModal from "../ui/templates/Modals/TriviaModal";
import {
  getCurrentGame,
  getCurrentGameStatus,
} from "../state/slices/currentGame.slice";
import { STATUS } from "../enums/status";
import { setFinalTime, setFinishedTimestamp } from "../state/slices/time.slice";
import { useEffect } from "react";
import { GAMES } from "../enums/games";
import CardsModal from "../ui/templates/Modals/CardsModal";

const AppModal = () => {
  const dispatch = useAppDispatch();
  const currentGameStatus = useAppSelector(getCurrentGameStatus);
  const currentGame = useAppSelector(getCurrentGame);

  const comprobation = currentGameStatus === STATUS.LOADED;
  const isTriviaGame = currentGame === GAMES.TRIVIA_GAME;
  const isCardsGame = currentGame === GAMES.CARDS_GAME;

  const isOn = comprobation;

  useEffect(() => {
    if (currentGameStatus === STATUS.LOADED) {
      dispatch(setFinishedTimestamp());
      dispatch(setFinalTime());
    }
  }, [currentGameStatus, dispatch]);

  if (isOn && isTriviaGame) {
    return (
      <div className={styles.modalContainer}>
        {<TriviaModal />}
        <Outlet />
      </div>
    );
  }

  if (isOn && isCardsGame) {
    return (
      <div className={styles.modalContainer}>
        {<CardsModal />}
        <Outlet />
      </div>
    );
  }

  if (isOn) {
    return (
      <div className={styles.modalContainer}>
        {<TriviaModal />}
        <Outlet />
      </div>
    );
  }

  return (
    <div className={styles.modalContainer}>
      <Outlet />
    </div>
  );
};

export default AppModal;
