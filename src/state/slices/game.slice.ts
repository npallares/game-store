import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface GameStateReducer {
  firstCard: null | string;
  firstCardId: null | string;
  secondCard: null | string;
  secondCardId: null | string;
  isMatch: null | boolean;
}

interface SetFirstCard {
  value: string | null;
  id: string | null;
}

interface SetSecondCard {
  id: string | null;
  value: string | null;
}

const initialState: GameStateReducer = {
  firstCard: null,
  firstCardId: null,
  secondCard: null,
  secondCardId: null,
  isMatch: null,
};

export const gameSlice = createSlice({
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
    resetAllRedux: (state) => {
      state.firstCard = null;
      state.firstCardId = null;
      state.secondCard = null;
      state.secondCardId = null;
      state.isMatch = null;
    },
  },
});

export const {
  setFirstCardRedux,
  setSecondCardRedux,
  setIsMatchRedux,
  resetAllRedux,
} = gameSlice.actions;
