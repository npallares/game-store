import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Payload {
  id: string;
}

type TriviaGameState = {
  logs: string[];
  matchCounter: number;
};

const initialState: TriviaGameState = {
  logs: [""], // TODO: si se pone array vacio, se descuaja el match controler... revisar
  matchCounter: 0,
};

export const triviaGameSlice = createSlice({
  name: "trivia",
  initialState,
  reducers: {
    addMatchCounter: (state) => {
      state.matchCounter = state.matchCounter + 1;
    },
    addQuestionCounter: (state, action: PayloadAction<Payload>) => {
      state.logs.push(action.payload.id);
    },
    triviaGameSliceToInitialState: (state) => {
      state.logs = [""];
      state.matchCounter = 0;
    },
  },
});

export const { addMatchCounter, addQuestionCounter, triviaGameSliceToInitialState } =
  triviaGameSlice.actions;

export const getLogs = (state: RootState): string[] =>
  state.triviaGame.logs;

export const selectMatchCounter = (state: RootState): number =>
  state.triviaGame.matchCounter;

export const selectQuestionCounter = (state: RootState): string[] =>
  state.triviaGame.logs;
