import { TRIVIA_CARDS_IDS } from "../../enums/triviaCardsIds";
import { TriviaCard } from "../../types/cards/card_types";

const FUTBOL_VALUES = {
  ONE: "Romero",
  TWO: "Messi",
  THREE: "Dybala",
  FOUR: "Fernandez",
};

const FUTBOL_IMAGES = {
  ONE: "/src/assets/cards/futbol/one.jpg",
  TWO: "/src/assets/cards/futbol/two.jpg",
  THREE: "/src/assets/cards/futbol/three.jpg",
  FOUR: "/src/assets/cards/futbol/four.jpg",
};

export const futbolCards: TriviaCard[] = [
  {
    id: TRIVIA_CARDS_IDS.ONE,
    value: FUTBOL_VALUES.ONE,
    frontImg: FUTBOL_IMAGES.ONE,
  },
  {
    id: TRIVIA_CARDS_IDS.TWO,
    value: FUTBOL_VALUES.TWO,
    frontImg: FUTBOL_IMAGES.TWO,
  },
  {
    id: TRIVIA_CARDS_IDS.THREE,
    value: FUTBOL_VALUES.THREE,
    frontImg: FUTBOL_IMAGES.THREE,
  },
  {
    id: TRIVIA_CARDS_IDS.FOUR,
    value: FUTBOL_VALUES.FOUR,
    frontImg: FUTBOL_IMAGES.FOUR,
  },
];

