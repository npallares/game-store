import { Outlet } from "react-router-dom";
import styles from "../CARD-GAME/services/ModalService/modal.module.scss";
import { useAppSelector } from "../state/hooks";
import NestedModal from "../ui/templates/Modal/Modoal";
import { getCurrentGameStatus } from "../state/slices/currentGame.slice";
import { STATUS } from "../enums/status";

const AppModal = () => {
  const currentGameStatus = useAppSelector(getCurrentGameStatus);

  const comprobation = currentGameStatus === STATUS.LOADED;

  console.log("Nicolas", currentGameStatus);

  const isOn = comprobation;

  if (isOn) {
    return (
      <div className={styles.modalContainer}>
        {<NestedModal />}
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
