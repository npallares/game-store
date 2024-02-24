import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styles from "./modal.module.scss";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { setIsDone } from "../../../state/slices/memoGame.slice";
import {
  setFinishedTimestamp,
  getFinalTime,
} from "../../../state/slices/time.slice";
import { timeToString } from "./utils/getFinalTime";
import {
  setEfficiency,
  setStepsInitialState,
} from "../../../state/slices/steps.slice";
import {
  getIsModalGame,
  getIsTriviaGame,
} from "../../../state/slices/modal.slice";
import ModalTriviaTempalte from "../../../ui/templates/ModalTriviaTemplate/ModalTriviaTemplate";
import { selectMatchCounter } from "../../../state/slices/triviaGame.slice";

const ModalService = () => {
  const dispatch = useAppDispatch();
  const isGame = useAppSelector(getIsModalGame);
  const isTriviaGame = useAppSelector(getIsTriviaGame);
  const finalTime = useAppSelector((state) => state.time.finalTime);
  const efficiency = useAppSelector((state) => state.steps.efficiency);
  const steps = useAppSelector((state) => state.steps.steps);
  const mateches = useAppSelector(selectMatchCounter);

  const handleClick = () => {
    dispatch(setIsDone());
    dispatch(setStepsInitialState());
    //console.log("Nicolasss", isDone);
  };

  useEffect(() => {
    dispatch(setFinishedTimestamp());
    dispatch(getFinalTime());
    dispatch(setEfficiency());
  });

  if (isTriviaGame)
    return (
      <div className={styles.templateContainer}>
        <div className={styles.modalLinkContainer}>
          <ModalTriviaTempalte
            matches={mateches}
            title={"IS TRIVIA GAME"}
            time={Number(finalTime)}
            onClick={handleClick}
          />
        </div>
        <Outlet />
      </div>
    );

  if (isGame)
    return (
      <div className={styles.templateContainer}>
        <div className={styles.modalLinkContainer}>
          <ModalTriviaTempalte
            matches={mateches}
            title={"IS TRIVIA GAME"}
            time={Number(finalTime)}
            onClick={handleClick}
          />
        </div>
        <Outlet />
      </div>
    );

  return (
    <div className={styles.modalContainer}>
      <Outlet />
    </div>
  );
};

export default ModalService;
