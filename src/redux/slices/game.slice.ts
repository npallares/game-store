import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface GameStateReducer {
  firstCard: null | string;
  firstCardId: null | string;
  secondCard: null | string;
  secondCardId: null | string;
  isMatch: boolean;
}

interface SetFirstCard {
  firstCard: null | string;
  firstCardId: null | string;
}

interface SetSecondCard {
  secondCard: null | string;
  secondCardId: null | string;
}


const initialState: GameStateReducer = {
  firstCard: null,
  firstCardId: null,
  secondCard: null,
  secondCardId: null,
  isMatch: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setFirstCard: (state, action: PayloadAction<SetFirstCard>) => {
      state.firstCard = action.payload.firstCard;
      state.firstCardId = action.payload.firstCardId;
    },
    setSecondCard: (state, action: PayloadAction<SetSecondCard>) => {
      state.secondCard = action.payload.secondCard;
      state.secondCardId = action.payload.secondCardId;
    },
    setIsMatch: (state)=>{
       const isMatch =
         state.firstCard === state.secondCard &&
         state.firstCard !== null &&
         state.secondCard !== null;
        
         isMatch
           ? (state.isMatch = true)
           : (state.isMatch = false);
    },
    resetAll: (state)=>{
        state.firstCard = null;
        state.firstCardId = null;
        state.secondCard = null;
        state.secondCardId = null;
        state.isMatch = false;
    }
  },
});

export const { setFirstCard, setSecondCard, setIsMatch, resetAll } = gameSlice.actions;
