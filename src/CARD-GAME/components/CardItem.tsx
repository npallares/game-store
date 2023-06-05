import { CardState } from "../context/CardsComponentContext";
import { images } from "../../hooks/getImages";
import styles from "./CardItem.module.css";

export const CardItem = ({ card }: { card: CardState }) => {
  const { id, value, done, ViewFront, backImg } = card;


  if (done === true || ViewFront === true) {
    return (
      <div className={`${styles.cardContenier} ${styles.done}`}>
        <img src={images[value]} alt={id} />
      </div>
    );
  }

  return (
    <div className={`${styles.cardContenier}`}>
      <img src={images[backImg]} alt={id} />
    </div>
  );
};
