import { TRIVIA_CARDS_IDS } from "../../enums/triviaCardsIds";

export default interface TriviaCardType {
  id: TRIVIA_CARDS_IDS;
  value: string;
  frontImg: string;
}
