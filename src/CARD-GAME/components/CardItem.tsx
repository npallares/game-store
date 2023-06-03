import { CardState } from "../context/CardsComponentContext";
import styles from "./CardItem.module.css";


export const CardItem = ({
  card,
}: {
  card: CardState;
}) => {
  const {id, value, done, ViewFront } = card
  if(done === true){ 
    console.log("newcardAdentro", card);
    return (
      <div
        className={`${styles.cardContenier} ${
          done ? styles.done : styles.noSelected
        }`}
      >
        {value}
      </div>
    );
  }
  return (
    <div
      /* className={`${styles.cardContenier} ${
        done ? styles.selected : styles.noSelected
      }`} */
      className={`${styles.cardContenier} ${
        ViewFront ? styles.ViewFront : styles.noSelected
      }`}
      key={id}
    >
      {value}
    </div>
  );
};
