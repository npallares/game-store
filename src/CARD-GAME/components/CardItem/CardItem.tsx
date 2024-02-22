import { CardState } from "../../../types/cards/card_types";
import getBackImg from "../../../utils/cardItemUtils";
import getFrontImg from "../../../utils/getFrontImg";
import styles from "./cardItem.module.scss";

export const CardItem = ({ card }: { card: CardState }) => {
  const { id, done, ViewFront, backImg } = card;

  const isDone = done;
  const reference = backImg;
  const styleDone = isDone ? styles.done : styles.inGame;

  const images = {
    frontImg: getFrontImg(reference, card),
    backImg: getBackImg(reference),
  };

  if (isDone || ViewFront === true) {
    return (
      <div className={`${styles.cardItemContenier} ${styleDone}`}>
        <img src={images.frontImg} alt={id} />
      </div>
    );
  }
  return (
    <div className={`${styles.cardItemContenier} ${styleDone}`}>
      <img src={images.backImg} alt={id} />
    </div>
  );
};
