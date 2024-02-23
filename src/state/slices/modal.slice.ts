import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../enums/status";
import { RootState } from "../store";
import { THEMES } from "../../enums/theme";

export type Modal = {
  status: STATUS;
  theme: THEMES | null;
  isGame: boolean;
  isTriviaGame: boolean;
};

const initialState: Modal = {
  status: STATUS.UNINITIALIZED,
  theme: null,
  isGame: false,
  isTriviaGame: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsGame: (state) => {
      state.isGame === true;
      state.status === STATUS.LOADED;
    },
    setTheme: (state, action: PayloadAction<THEMES>) => {
      state.theme = action.payload
    },
    setIsTriviaGame: (state) => {
      state.isTriviaGame = true;
      state.status === STATUS.LOADED;
    },
    setInitialState: (state) => {
      state.isGame = initialState.isGame;
      state.theme = initialState.theme;
      state.isGame = initialState.isGame;
      state.isTriviaGame = initialState.isTriviaGame;
    },
  },
});

export const { setIsTriviaGame, setIsGame } = modalSlice.actions;

export const getModalSliceStatus = (state: RootState): STATUS =>
  state.modalSlice.status;

export const getIsModalGame = (state: RootState): boolean =>
  state.modalSlice.isGame;

export const getIsTriviaGame = (state: RootState): boolean =>
  state.modalSlice.isGame;
