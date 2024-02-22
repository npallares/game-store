import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import cardsMixer from "../../utils/cardsMixer";
import { GameCard } from "../../types/cards/card_types";
import { RootState } from "../store";
import { STATUS } from "../../enums/status";
import { pokemonCards } from "../../themes/pokemon/pokemon";
import { drabonBallCards } from "../../themes/dragonBall/dragonBall";

type GameCardsSliceState = {
  status: STATUS;
  cards: GameCard[];
};

const initialState: GameCardsSliceState = {
  status: STATUS.UNINITIALIZED,
  cards: [
    {
      id: "",
      value: "",
      frontImg: "",
      backImg: "",
      done: null,
      ViewFront: null,
    },
  ],
};

export const gameCardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<string>) => {
      const selectedTheme =
        action.payload === ":pokemon" ? pokemonCards : drabonBallCards;
      const cards = cardsMixer(selectedTheme);
      cards.map((card, index) => (state.cards[index] = card));
      state.status = STATUS.LOADED;
    },
    setCardIsDoneTrue: (state, action: PayloadAction<string>) => {
      // console.log("Payload one - setCardIsDoneTrue", action.payload);
      const index = state.cards.findIndex((card) => card.id === action.payload);
      state.cards[index].done = true;
    },
    setCardIsDoneFalse: (state, action: PayloadAction<string>) => {
      // console.log("Payload one - setCardIsDoneFalse", action.payload);
      //console.log("Index1", state.cards);
      const index = state.cards.findIndex((card) => card.id === action.payload);
      state.cards[index].done = false;
    },
    setCardViewFrontTrue: (state, action: PayloadAction<string>) => {
      //console.log("Payload one - setCardViewFrontTrue", action.payload);
      const index = state.cards.findIndex((card) => card.id === action.payload);
      state.cards[index].ViewFront = true;
    },
    setCardViewFrontFalse: (state, action: PayloadAction<string>) => {
      // console.log("Payload one - setCardViewFrontFalse", action.payload);
      const index = state.cards.findIndex((card) => card.id === action.payload);
      state.cards[index].ViewFront = false;
    },
    setCardsInitialState: (state) => {
      //state.cards.map((card) => (card.done = null));
      state.cards = initialState.cards;
      state.status = STATUS.UNINITIALIZED;
    },
  },
});

export const {
  setCardViewFrontTrue,
  setCardViewFrontFalse,
  setCardIsDoneTrue,
  setCardIsDoneFalse,
  setCardsInitialState,
  setCards,
} = gameCardsSlice.actions;

export const selectGameCardsStatus = (state: RootState): STATUS =>
  state.gameCards.status;
export const selectGameCards = (state: RootState): GameCard[] =>
  state.gameCards.cards;
