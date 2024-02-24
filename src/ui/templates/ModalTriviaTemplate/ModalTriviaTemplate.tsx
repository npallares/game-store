import { Link } from "react-router-dom";
import styles from "./modal.module.scss";
import { Button } from "@mui/material";

interface ModalProps {
  title: string | null;
  time: number | null;
  matches: number | null;
  onClick?: () => void;
}
const ModalTriviaTempalte: React.FC<ModalProps> = ({
  title = "TITLE",
  time = 12345,
  matches = 0,
  onClick = () => console.log("Initial on Click - ModalTriviaTempalte.ts"),
}) => {
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
        <span className={styles.stepsSection}>{<h2>{"LOGS"}</h2>}</span>

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

export default ModalTriviaTempalte;

/* return (
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
  </section> */
