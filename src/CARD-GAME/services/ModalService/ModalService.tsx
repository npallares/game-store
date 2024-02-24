import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styles from "./modal.module.scss";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import {
  setFinishedTimestamp,
  getFinalTime,
} from "../../../state/slices/time.slice";
import {
  setEfficiency,
  setStepsInitialState,
} from "../../../state/slices/steps.slice";
import ModalTriviaTempalte from "../../../ui/templates/ModalTriviaTemplate/ModalTriviaTemplate";
import { GAMES } from "../../../enums/games";
import { getCurrentGame, getCurrentGametheme } from "../../../state/slices/currentGame.slice";

const ModalService = () => {
  const dispatch = useAppDispatch();
  const currentGame = useAppSelector(getCurrentGame);
  const currentTheme = useAppSelector(getCurrentGametheme);
  const finalTime = useAppSelector((state) => state.time.finalTime);
  //const mateches = useAppSelector(selectMatchCounter);
  //const currentGameStatus = useAppSelector(getModalStatus);
  //const efficiency = useAppSelector((state) => state.steps.efficiency);
  //const steps = useAppSelector((state) => state.steps.steps);
  //const isOtheGame = currentGame === GAMES.OTHER;

  const closeModal = currentGame === GAMES.OTHER
  ;
  const isTriviaGame = currentGame === GAMES.TRIVIA_GAME;
  const isMemoGame = currentGame === GAMES.CARDS_GAME;

  const handleClick = () => {
    //dispatch(setIsDone());
    dispatch(setStepsInitialState());
    //console.log("Nicolasss", isDone);
  };

  useEffect(() => {
    dispatch(setFinishedTimestamp());
    dispatch(getFinalTime());
    dispatch(setEfficiency());
  });

  if(closeModal)return (
    <div className={styles.modalContainer}>
      <Outlet />
    </div>
  );

  if (isTriviaGame)
    return (
      <div className={styles.templateContainer}>
        <div className={styles.modalLinkContainer}>
          <ModalTriviaTempalte
            matches={12345}
            title={"IS TRIVIA GAME"}
            time={67890}
            onClick={handleClick}
          />
        </div>
        <Outlet />
      </div>
    );

  if (isMemoGame)
    return (
      <div className={styles.templateContainer}>
        <div className={styles.modalLinkContainer}>
          <ModalTriviaTempalte
            matches={12345}
            title={"IS TRIVIA GAME"}
            time={Number(finalTime)}
            onClick={handleClick}
          />
        </div>
        <Outlet />
      </div>
    );
};

export default ModalService;
