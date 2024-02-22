import { configureStore } from "@reduxjs/toolkit";
import timeSlice from "./slices/time.slice";
import {
  triviaCardSlice,
  gameSlice,
  stepsSlice,
  gameCardsSlice,
  triviaSlice,
} from "./slices";

// TODO: unificar y resolver TriviaCards con cards

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
    gameCards: gameCardsSlice.reducer,
    triviaCard: triviaCardSlice.reducer,
    time: timeSlice,
    steps: stepsSlice.reducer,
    trivia: triviaSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
