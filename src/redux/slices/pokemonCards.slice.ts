import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import cardsMixer from "../../helpers/cardsMixer";
import { CardState } from "../../types/cards/card_types";
import { pokemonCards } from "../../CARD-GAME/themes/pokemon/pokemon";

export const initialState: CardState[] = cardsMixer(pokemonCards);

export const pokemonCardsSlice = createSlice({
  name: "pokemonCards",
  initialState,
  reducers: {
    setCardIsDoneTrue: (state, action: PayloadAction<string>) => {
      console.log("Payload one - setCardIsDoneTrue", action.payload);
      const index = state.findIndex((card) => card.id === action.payload);
      state[index].done = true;
    },
    setCardIsDoneFalse: (state, action: PayloadAction<string>) => {
      console.log("Payload one - setCardIsDoneFalse", action.payload);
      const index = state.findIndex((card) => card.id === action.payload);
      state[index].done = false;
    },
    setCardViewFrontTrue: (state, action: PayloadAction<string>) => {
      console.log("Payload one - setCardViewFrontTrue", action.payload);
      const index = state.findIndex((card) => card.id === action.payload);
      state[index].ViewFront = true;
    },
    setCardViewFrontFalse: (state, action: PayloadAction<string>) => {
      console.log("Payload one - setCardViewFrontFalse", action.payload);
      const index = state.findIndex((card) => card.id === action.payload);
      state[index].ViewFront = false;
    },
    setPokemonCardsInitialState: (state) => {
      state.map((card) => (card.done = null));
    },
  },
});

export const {
  setCardViewFrontTrue,
  setCardViewFrontFalse,
  setCardIsDoneTrue,
  setCardIsDoneFalse,
  setPokemonCardsInitialState,
} = pokemonCardsSlice.actions;
