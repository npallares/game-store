import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CardState = {
  id: string;
  value: string;
  frontImg: string;
  backImg: string;
  done: boolean;
  ViewFront: boolean
};

const initialState: CardState[] = [
  {
    id: "goku01",
    value: "goku",
    frontImg: "img/goku.jpg",
    backImg: "img/bk.jpg",
    done: false,
    ViewFront: false,
  },
  {
    id: "vegeta01",
    value: "vegeta",
    frontImg: "img/vegeta.jpg",
    backImg: "img/bk.jpg",
    done: false,
    ViewFront: false,
  },
  {
    id: "goku02",
    value: "goku",
    frontImg: "img/goku.jpg",
    backImg: "img/bk.jpg",
    done: false,
    ViewFront: false,
  },
  {
    id: "vegeta02",
    value: "vegeta",
    frontImg: "img/vegeta.jpg",
    backImg: "img/bk.jpg",
    done: false,
    ViewFront: false,
  },
];

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCardViewFront: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((card) => card.id === action.payload);
      state[index].ViewFront = true;
    },
    unsetCardViewFront: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((card) => card.id === action.payload);
      state[index].ViewFront = false;
    },
  },
});

export const { setCardViewFront, unsetCardViewFront } = cardsSlice.actions;
