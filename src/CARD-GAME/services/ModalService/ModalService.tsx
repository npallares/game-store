import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styles from "./modal.module.scss";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import Modal from "../../components/Modal/Modal";
import { setIsDone } from "../../../state/slices/game.slice";
import {
  setFinishedTimestamp,
  getFinalTime,
} from "../../../state/slices/time.slice";
import { timeToString } from "./utils/getFinalTime";
import { setEfficiency, setStepsInitialState } from "../../../state/slices/steps.slice";

const ModalService = () => {
  const dispatch = useAppDispatch();
  const isDone = useAppSelector((state) => state.game.isDone);
  const finalTime = useAppSelector((state) => state.time.finalTime);
  const efficiency = useAppSelector((state) => state.steps.efficiency);
  const steps = useAppSelector((state) => state.steps.steps);

  const handleClick = () => {
    dispatch(setIsDone());
    dispatch(setStepsInitialState());
    console.log("Nicolasss", isDone);
  };

  useEffect(() => {
    dispatch(setFinishedTimestamp());
    dispatch(getFinalTime());
    dispatch(setEfficiency());
  });

  if (isDone && finalTime && efficiency)
    return (
      <div className={styles.templateContainer}>
        <div className={styles.modalLinkContainer}>
          <Modal
            title={"Felicitaciones"}
            time={timeToString(finalTime)}
            steps={steps}
            efficiency={efficiency}
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
