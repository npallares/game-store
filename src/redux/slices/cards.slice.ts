import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CardState = {
  id: string;
  value: string;
  frontImg: string;
  backImg: string;
  done: null | boolean;
  ViewFront: boolean | null
};

export const initialState: CardState[] = [
  {
    id: "goku01",
    value: "goku",
    frontImg: "img/goku.jpg",
    backImg: "img/bk.jpg",
    done: null,
    ViewFront: null,
  },
  {
    id: "vegeta01",
    value: "vegeta",
    frontImg: "img/vegeta.jpg",
    backImg: "img/bk.jpg",
    done: null,
    ViewFront: null,
  },
  {
    id: "goku02",
    value: "goku",
    frontImg: "img/goku.jpg",
    backImg: "img/bk.jpg",
    done: null,
    ViewFront: null,
  },
  {
    id: "vegeta02",
    value: "vegeta",
    frontImg: "img/vegeta.jpg",
    backImg: "img/bk.jpg",
    done: null,
    ViewFront: null,
  },
];

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCardOneIsDoneTrue: (state, action: PayloadAction<string>) => {
      console.log("Payload one", action.payload);
      const index = state.findIndex(
        (card) => card.id === action.payload
        );
        state[index].done = true;
      },
      setCardTwoIsDoneTrue: (state, action: PayloadAction<string>) => {
      console.log("Payload two", action.payload);
      const index = state.findIndex(
        (card) => card.id === action.payload
      );
      state[index].done = true;
    },
    setCardOneIsDoneFalse: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((card) => card.id === action.payload);
      state[index].done = false;
    },
    setCardTwoIsDoneFalse: (state, action: PayloadAction<string>) => {
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
  setCardOneIsDoneTrue,
  setCardTwoIsDoneTrue,
  setCardTwoIsDoneFalse,
  setCardOneIsDoneFalse,
} = cardsSlice.actions;
