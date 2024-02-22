import { TRIVIA_CARDS_IDS } from "../../enums/triviaCardsIds";

type Card = {
  id: string;
  value: string;
};

export interface GameCard extends Card {
  frontImg: string;
  backImg: string;
  done: null | boolean;
  ViewFront: boolean | null;
}
export interface TriviaCard extends Card {
  id: TRIVIA_CARDS_IDS;
  frontImg: string;
}
