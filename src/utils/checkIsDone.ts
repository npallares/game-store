import { CardState } from "../types/cards/card_types";

const checkIsDone = (id: string, cardsState: CardState[]) => {
  const index = cardsState.findIndex((card) => card.id === id);
  const isDone = cardsState[index]?.done || false;
  return isDone;
};

export default checkIsDone;
