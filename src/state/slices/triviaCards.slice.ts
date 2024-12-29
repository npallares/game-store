import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TriviaCard } from "../../types/cards/card_types";
import { RootState } from "../store";
import { STATUS } from "../../enums/status";
import { futbolCards } from "../../themes/futbol/futbol";

interface TriviaCardStateReducer {
  status: STATUS;
  cards: TriviaCard[];
}

const initialState: TriviaCardStateReducer = {
  status: STATUS.UNINITIALIZED,
  cards: [],
};

export const triviaCardsSlice = createSlice({
  name: "trivia",
  initialState,
  reducers: {
    setTriviaCard: (state, action: PayloadAction<string>) => {
      const selectedTheme = futbolCards
        action.payload === ":futbol" ? futbolCards : futbolCards;
      const cards = selectedTheme;
      if (state.status === STATUS.UNINITIALIZED) cards.map((card) => state.cards.push(card));
      state.status = STATUS.LOADED;
    },

    setTriviaCardInitialState: (state) => {
      state.status = STATUS.UNINITIALIZED;
      state.cards = [];
    },
  },
});

export const { setTriviaCard, setTriviaCardInitialState } =
  triviaCardsSlice.actions;

export const selectTriviaCards = (state: RootState): TriviaCard[] =>
  state.triviaCards.cards;

export const selectTriviaCardsStatus = (state: RootState): STATUS =>
  state.triviaCards.status;
