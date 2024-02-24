import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../enums/status";
import { RootState } from "../store";
import { GAMES } from "../../enums/games";

export type Modal = {
  status: STATUS;
  game: GAMES;
  finalTime: number;
};

const initialState: Modal = {
  status: STATUS.UNINITIALIZED,
  game: GAMES.OTHER,
  finalTime: 0,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<GAMES>) => {
      state.game = action.payload;
    },
    setFinalTime: (state, action: PayloadAction<number>) => {
      state.finalTime = action.payload;
    },
    setInitialState: (state) => {
      state.status = initialState.status;
    },
  },
});

export const { setFinalTime, setTheme, setInitialState } = modalSlice.actions;

export const getModalStatus = (state: RootState): STATUS =>
  state.modalSlice.status;

export const getModalthme = (state: RootState): GAMES => state.modalSlice.game;

export const getModalFinalTime = (state: RootState): number =>
  state.modalSlice.finalTime;
