import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Status } from "../../types/status/status_types";
import TriviaCardType from "../../types/trivia/trivia_Card_type";

interface TriviaCardStateReducer {
  status: Status;
  cards: TriviaCardType[];
}

const initialState: TriviaCardStateReducer = {
  status: Status.UNINITIALIZED,
  cards: [],
};

export const triviaCardSlice = createSlice({
  name: "trivia",
  initialState,
  reducers: {
    setTriviaCard: (state, action: PayloadAction<TriviaCardType>) => {
      const id = action.payload.id;
      const value = action.payload.value;
      const newCard = { id, value };
      state.cards.push(newCard);
    },
    setTriviaCardLoaded: (state) => {
      state.status = Status.LOADED;
    },
    setTriviaCardInitialState: (state) => {
      state.status = Status.UNINITIALIZED;
      state.cards = [];
    },
  },
});

export const {
  setTriviaCard,
  setTriviaCardLoaded,
  setTriviaCardInitialState,
} = triviaCardSlice.actions;
