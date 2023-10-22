import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import cardsMixer from "../../helpers/cardsMixer";
import { CardState } from "../../types/cards/card_types";

export const pokemonCards: CardState[] = [
  {
    id: "pikachu01",
    value: "pikachu",
    frontImg: "img/pikachu.jpg",
    backImg: "pokemon",
    done: null,
    ViewFront: null,
  },
  {
    id: "pikachu02",
    value: "pikachu",
    frontImg: "img/pikachu.jpg",
    backImg: "pokemon",
    done: null,
    ViewFront: null,
  },
  {
    id: "charmander01",
    value: "charmander",
    frontImg: "img/charmander.jpg",
    backImg: "pokemon",
    done: null,
    ViewFront: null,
  },
  {
    id: "charmander02",
    value: "charmander",
    frontImg: "img/charmander.jpg",
    backImg: "pokemon",
    done: null,
    ViewFront: null,
  },
  {
    id: "mew01",
    value: "mew",
    frontImg: "img/mew.jpg",
    backImg: "pokemon",
    done: null,
    ViewFront: null,
  },
  {
    id: "mew02",
    value: "mew",
    frontImg: "img/mew.jpg",
    backImg: "pokemon",
    done: null,
    ViewFront: null,
  },
  {
    id: "onix01",
    value: "onix",
    frontImg: "img/onix.jpg",
    backImg: "pokemon",
    done: null,
    ViewFront: null,
  },
  {
    id: "onix02",
    value: "onix",
    frontImg: "img/onix.jpg",
    backImg: "pokemon",
    done: null,
    ViewFront: null,
  },
  {
    id: "snorlax01",
    value: "snorlax",
    frontImg: "img/snorlax.jpg",
    backImg: "pokemon",
    done: null,
    ViewFront: null,
  },
  {
    id: "snorlax02",
    value: "snorlax",
    frontImg: "img/snorlax.jpg",
    backImg: "pokemon",
    done: null,
    ViewFront: null,
  },
  {
    id: "dito01",
    value: "dito",
    frontImg: "img/dito.jpg",
    backImg: "pokemon",
    done: null,
    ViewFront: null,
  },
  {
    id: "dito02",
    value: "dito",
    frontImg: "img/dito.jpg",
    backImg: "pokemon",
    done: null,
    ViewFront: null,
  },
  {
    id: "squartle01",
    value: "squartle",
    frontImg: "img/squartle.jpg",
    backImg: "pokemon",
    done: null,
    ViewFront: null,
  },
  {
    id: "squartle02",
    value: "squartle",
    frontImg: "img/squartle.jpg",
    backImg: "pokemon",
    done: null,
    ViewFront: null,
  },
  {
    id: "bulbasor01",
    value: "bulbasor",
    frontImg: "img/bulbasor.jpg",
    backImg: "pokemon",
    done: null,
    ViewFront: null,
  },
  {
    id: "bulbasor02",
    value: "bulbasor",
    frontImg: "img/bulbasor.jpg",
    backImg: "pokemon",
    done: null,
    ViewFront: null,
  },
];

export const initialState: CardState[] = cardsMixer(pokemonCards);
//export const initialState: CardState[] = drabonBallCards;

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
