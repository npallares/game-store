import { configureStore } from "@reduxjs/toolkit";
import { dragonballCardsSlice, gameSlice, pokemonCardsSlice } from "./slices";

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
    dragonballCards: dragonballCardsSlice.reducer,
    pokemonCards: pokemonCardsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
