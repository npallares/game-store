import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Payload {
  id: string;
}

type TriviaState = {
  questionCounter: string[];
  matchCounter: number;
}

const initialState: TriviaState = {
  questionCounter: [''],
  matchCounter: 0,
};

export const triviaSlice = createSlice({
  name: "trivia",
  initialState,
  reducers: {
    addMatchCounter: (state) => {
      state.matchCounter = state.matchCounter + 1;
    },
    addQuestionCounter: (state, action: PayloadAction<Payload>) => {
      state.questionCounter.push(action.payload.id);
    },
  },
});

export const { addMatchCounter, addQuestionCounter } = triviaSlice.actions;

export const selectQuestionCounter = (state: RootState): string[] =>
  state.trivia.questionCounter;
