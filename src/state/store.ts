import { configureStore } from "@reduxjs/toolkit";
import timeSlice from "./slices/time.slice";
import { gameSlice, stepsSlice } from "./slices";
import { cardsSlice } from "./slices/cards.slice";

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
    cards: cardsSlice.reducer,
    time: timeSlice,
    steps: stepsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
