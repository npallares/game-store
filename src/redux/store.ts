import { configureStore } from "@reduxjs/toolkit";
import { cardsSlice, gameSlice } from "./slices";
// ...

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
    cards: cardsSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
