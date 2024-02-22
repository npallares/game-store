import { TriviaCardIds } from "../../../types/trivia/trivia_Card_Ids_type";
import { TriviaCard } from "../../../types/trivia/trivia_Card_type";

export const futbolImages = {
  ONE: "/src/assets/cards/futbol/one.jpg",
  TWO: "/src/assets/cards/futbol/two.jpg",
  THREE: "/src/assets/cards/futbol/three.jpg",
  FOUR: "/src/assets/cards/futbol/four.jpg",
};

export const futbolCards: TriviaCard[] = [
  {
    id: TriviaCardIds.ONE,
    value: "cuti romero",
  },
  {
    id: TriviaCardIds.TWO,
    value: "lionel messi",
  },
  {
    id: TriviaCardIds.THREE,
    value: "paulo dybala",
  },
  {
    id: TriviaCardIds.FOUR,
    value: "enzo fernandez",
  },
];
