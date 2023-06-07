import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import cardsMixer from "../../helpers/cardsMixer";

export type CardState = {
  id: string;
  value: string;
  frontImg: string;
  backImg: string;
  done: null | boolean;
  ViewFront: boolean | null;
};

export const drabonBallCards: CardState[] = [
  {
    id: "goku01",
    value: "goku",
    frontImg: "assets/cards/drgonBallImages/goku.jpg",
    backImg: "dragonball",
    done: null,
    ViewFront: null,
  },
  {
    id: "goku02",
    value: "goku",
    frontImg: "img/goku.jpg",
    backImg: "dragonball",
    done: null,
    ViewFront: null,
  },
  {
    id: "krilin01",
    value: "krilin",
    frontImg: "img/krilin.jpg",
    backImg: "dragonball",
    done: null,
    ViewFront: null,
  },
  {
    id: "krilin02",
    value: "krilin",
    frontImg: "img/krilin.jpg",
    backImg: "dragonball",
    done: null,
    ViewFront: null,
  },
  {
    id: "vegeta01",
    value: "vegeta",
    frontImg: "img/vegeta.jpg",
    backImg: "dragonball",
    done: null,
    ViewFront: null,
  },
  {
    id: "vegeta02",
    value: "vegeta",
    frontImg: "img/vegeta.jpg",
    backImg: "dragonball",
    done: null,
    ViewFront: null,
  },
  {
    id: "gohan01",
    value: "gohan",
    frontImg: "img/gohan.jpg",
    backImg: "dragonball",
    done: null,
    ViewFront: null,
  },
  {
    id: "gohan02",
    value: "gohan",
    frontImg: "img/gohan.jpg",
    backImg: "dragonball",
    done: null,
    ViewFront: null,
  },
  {
    id: "picoro01",
    value: "picoro",
    frontImg: "img/picoro.jpg",
    backImg: "dragonball",
    done: null,
    ViewFront: null,
  },
  {
    id: "picoro02",
    value: "picoro",
    frontImg: "img/picoro.jpg",
    backImg: "dragonball",
    done: null,
    ViewFront: null,
  },
  {
    id: "trunks01",
    value: "trunks",
    frontImg: "img/trunks.jpg",
    backImg: "dragonball",
    done: null,
    ViewFront: null,
  },
  {
    id: "trunks02",
    value: "trunks",
    frontImg: "img/trunks.jpg",
    backImg: "dragonball",
    done: null,
    ViewFront: null,
  },
  {
    id: "bulma01",
    value: "bulma",
    frontImg: "img/bulma.jpg",
    backImg: "dragonball",
    done: null,
    ViewFront: null,
  },
  {
    id: "bulma02",
    value: "bulma",
    frontImg: "img/bulma.jpg",
    backImg: "dragonball",
    done: null,
    ViewFront: null,
  },
  {
    id: "roshi01",
    value: "roshi",
    frontImg: "img/roshi.jpg",
    backImg: "dragonball",
    done: null,
    ViewFront: null,
  },
  {
    id: "roshi02",
    value: "roshi",
    frontImg: "img/roshi.jpg",
    backImg: "dragonball",
    done: null,
    ViewFront: null,
  },
];

export const initialState: CardState[] = cardsMixer(drabonBallCards);

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCardIsDoneTrue: (state, action: PayloadAction<string>) => {
      console.log("Payload one", action.payload);
      const index = state.findIndex((card) => card.id === action.payload);
      state[index].done = true;
    },
    setCardIsDoneFalse: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((card) => card.id === action.payload);
      state[index].done = false;
    },
    setCardViewFrontTrue: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((card) => card.id === action.payload);
      state[index].ViewFront = true;
    },
    setCardViewFrontFalse: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((card) => card.id === action.payload);
      state[index].ViewFront = false;
    },
  },
});

export const {
  setCardViewFrontTrue,
  setCardViewFrontFalse,
  setCardIsDoneTrue,
  setCardIsDoneFalse,
} = cardsSlice.actions;
