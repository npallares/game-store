import { CardState } from "../context/CardsComponentContext";
import styles from "./CardItem.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";


export const CardItem = ({
  card,
}: {
  card: CardState;
}) => {
  const {id, value, done } = card
  const myDone= true
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
