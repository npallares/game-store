import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import cardsMixer from "../../helpers/cardsMixer";
import { CardState } from "../../types/cards/card_types";
import { drabonBallCards } from "../../CARD-GAME/themes/dragon-ball/dragon-ball";

export const initialState: CardState[] = cardsMixer(drabonBallCards);
//export const initialState: CardState[] = drabonBallCards;

export const dragonballCardsSlice = createSlice({
  name: "cards",
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
    setCardsInitialState: (state) => {
      state.map((card) => (card.done = null));
    },
  },
});

export const {
  setCardViewFrontTrue,
  setCardViewFrontFalse,
  setCardIsDoneTrue,
  setCardIsDoneFalse,
  setCardsInitialState,
} = dragonballCardsSlice.actions;
