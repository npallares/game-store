import { Link } from "react-router-dom";
import styles from "./modal.module.scss";
import { MouseEventHandler } from "react";
import { Button } from "@mui/material";

interface ModalProps {
  title: string;
  time: string;
  steps: number;
  onClick: MouseEventHandler<HTMLAnchorElement>;
}
const Modal = ({ title, time, steps, onClick }: ModalProps) => {
  return (
    <section className={styles.modalContainer}>
      <div className={styles.modalSection}>
        <span className={styles.titleSection}>{<h1>{title}</h1>}</span>
        <span className={styles.timeSection}>
          {<h2>{`Tiempo de resolución: ${time} segundos`}</h2>}
        </span>
        <span className={styles.stepsSection}>
          {<h2>Tu eficiencia fue del {steps}%</h2>}
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

export default Modal;
