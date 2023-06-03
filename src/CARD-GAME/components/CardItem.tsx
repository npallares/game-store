import { CardState } from "../context/CardsComponentContext";
import styles from "./CardItem.module.css";


export const CardItem = ({
  card,
}: {
  card: CardState;
}) => {
  const {id, value, done } = card
  return (
    <div
      className={`${styles.cardContenier} ${
        done ? styles.selected : styles.noSelected
      }`}
      key={id}
    >
      {value}
    </div>
  );
};
