import { Link } from "react-router-dom";
import styles from "./modal.module.scss";
import { MouseEventHandler } from "react";
import { Button } from "@mui/material";
import {
  Modal,
  getIsTriviaGame,
  getModalSliceStatus,
} from "../../../state/slices/modal.slice";
import { useAppSelector } from "../../../state/hooks";
import { STATUS } from "../../../enums/status";
import { THEMES } from "../../../enums/theme";
import {
  selectMatchCounter,
  selectQuestionCounter,
} from "../../../state/slices/triviaGame.slice";

interface ModalProps extends Modal {
  title: string | null;
  time: string | null;
  theme: THEMES | null;
  steps: number | null;
  efficiency: number | null;
  onClick: MouseEventHandler<HTMLAnchorElement>;
}
const ModalView = ({
  title = null,
  time = null,
  steps = null,
  efficiency = null,
  theme = null,
  onClick,
}: ModalProps) => {
  const modalStatus = useAppSelector(getModalSliceStatus);
  const isTriviaGame = useAppSelector(getIsTriviaGame);
  const matches = useAppSelector(selectMatchCounter);
  const logs = useAppSelector(selectQuestionCounter);
  if (modalStatus !== STATUS.LOADED) return;
  if (isTriviaGame) {
    return (
      <section className={styles.modalContainer}>
        <div className={styles.modalSection}>
          <span className={styles.titleSection}>{<h1>{title}</h1>}</span>
          <span className={styles.timeSection}>
            {<h2>{`Lo resolviste en ${time} segundos.`}</h2>}
          </span>
          <span className={styles.stepsSection}>
            {<h2>{`hiciste match ${matches} veces`}</h2>}
          </span>
          <span className={styles.stepsSection}>{<h2>{logs}</h2>}</span>

          <section className={styles.buttonSection}>
            <Link className={styles.test} onClick={onClick} to="/">
              <Button variant="contained" size="large" onClick={() => onClick}>
                {"RESET"}
              </Button>
            </Link>
          </section>
        </div>
      </section>
    );
  }
  return (
    <section className={styles.modalContainer}>
      <div className={styles.modalSection}>
        <span className={styles.titleSection}>{<h1>{title}</h1>}</span>
        <span className={styles.timeSection}>
          {<h2>{`Lo resolviste en ${time} segundos.`}</h2>}
        </span>
        <span className={styles.stepsSection}>
          {
            <h2>{`Lo hiciste en ${steps} intentos y Tu taza de relacion fue del ${efficiency}%`}</h2>
          }
        </span>

        <section className={styles.buttonSection}>
          <Link className={styles.test} onClick={onClick} to="/">
            <Button variant="contained" size="large" onClick={() => onClick}>
              {"RESET"}
            </Button>
          </Link>
        </section>
      </div>
    </section>
  );
};

export default ModalView;
