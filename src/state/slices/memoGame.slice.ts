import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface SetFirstCard {
  value: string | null;
  id: string | null;
}
interface SetSecondCard {
  id: string | null;
  value: string | null;
}
interface MemoGameState {
  firstCard: null | string;
  firstCardId: null | string;
  secondCard: null | string;
  secondCardId: null | string;
  isMatch: null | boolean;
  isDone: null | boolean;
}

const initialState: MemoGameState = {
  firstCard: null,
  firstCardId: null,
  secondCard: null,
  secondCardId: null,
  isMatch: null,
  isDone: null,
};

export const memoGameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setFirstCardRedux: (state, action: PayloadAction<SetFirstCard>) => {
      state.firstCard = action.payload.value;
      state.firstCardId = action.payload.id;
    },
    setSecondCardRedux: (state, action: PayloadAction<SetSecondCard>) => {
      state.secondCard = action.payload.value;
      state.secondCardId = action.payload.id;
    },
    setIsMatchRedux: (state) => {
      const isMatch =
        state.firstCard === state.secondCard &&
        state.firstCard !== null &&
        state.secondCard !== null;

      if (isMatch) state.isMatch = true;
      if (!isMatch) state.isMatch = false;
    },
    setIsDone: (state) => {
      state.isDone = !state.isDone;
    },
    resetAllRedux: (state) => {
      state.firstCard = null;
      state.firstCardId = null;
      state.secondCard = null;
      state.secondCardId = null;
      state.isMatch = null;
      state.isDone = null;
    },
  },
});

export const {
  setFirstCardRedux,
  setSecondCardRedux,
  setIsMatchRedux,
  setIsDone,
  resetAllRedux,
} = memoGameSlice.actions;

export const selectMemoGame = (state: RootState): MemoGameState =>
  state.memoGame;

