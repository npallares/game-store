import { configureStore } from "@reduxjs/toolkit";
import timeSlice from "./slices/time.slice";
import { triviaCardSlice, gameSlice, stepsSlice, cardsSlice, counterSlice } from "./slices";

// TODO: unificar y resolver TriviaCards con cards

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
    cards: cardsSlice.reducer,
    time: timeSlice,
    steps: stepsSlice.reducer,
    triviaCard: triviaCardSlice.reducer,
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
