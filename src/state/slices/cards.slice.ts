import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import cardsMixer from "../../helpers/cardsMixer";
import { CardState } from "../../types/cards/card_types";
import { drabonBallCards } from "../../CARD-GAME/themes/dragon-ball/dragon-ball";
import { pokemonCards } from "../../CARD-GAME/themes/pokemon/pokemon";

export enum LoadingStatus {
  Uninitialized = "Uninitialized",
  Loading = "Loading",
  Errored = "Errored",
  Loaded = "Loaded",
}

type CardsSliceState = {
  status: LoadingStatus;
  cards: CardState[];
};

const initialState: CardsSliceState = {
  status: LoadingStatus.Uninitialized,
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

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<string>) => {
      const selectedTheme =
        action.payload === ":pokemon" ? pokemonCards : drabonBallCards;
      const cards = cardsMixer(selectedTheme);
      cards.map((card, index) => (state.cards[index] = card));
      state.status = LoadingStatus.Loaded;
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
      state.status = LoadingStatus.Uninitialized;
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
} = cardsSlice.actions;

export const selectCardsStatus = (state: CardsSliceState): LoadingStatus =>
  state.status;
