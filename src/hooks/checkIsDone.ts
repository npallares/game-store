import { CardState } from "../CARD-GAME/context/CardsComponentContext";

const checkIsDone = (id: string, cardsState: CardState[]) => {
  const index = cardsState.findIndex((card) => card.id === id);
  const isDone = cardsState[index]?.done || false;
  return isDone;
};

export default checkIsDone;
