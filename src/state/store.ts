import { configureStore } from "@reduxjs/toolkit";
import timeSlice from "./slices/time.slice";
import {
  triviaCardsSlice,
  memoGameSlice,
  stepsSlice,
  memoCardsSlice,
  triviaGameSlice,
  modalSlice,
  currentGame,
} from "./slices";

// TODO: unificar y resolver TriviaCards con cards

export const store = configureStore({
  reducer: {
    currentGame: currentGame.reducer,
    memoGame: memoGameSlice.reducer,
    memoCards: memoCardsSlice.reducer,
    triviaGame: triviaGameSlice.reducer,
    triviaCards: triviaCardsSlice.reducer,
    time: timeSlice,
    steps: stepsSlice.reducer,
    modalSlice: modalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
