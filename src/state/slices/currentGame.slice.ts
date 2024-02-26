import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../enums/status";
import { THEMES } from "../../enums/theme";
import { RootState } from "../store";
import { GAMES } from "../../enums/games";

type SetGamePayload = {
  game: GAMES;
};

type SetThemePayload = {
  theme: THEMES;
};

interface CurrentGameState {
  status: STATUS;
  game: GAMES;
  theme: THEMES;
}

const initialState: CurrentGameState = {
  status: STATUS.UNINITIALIZED,
  game: GAMES.OTHER,
  theme: THEMES.OTHER,
};

export const currentGame = createSlice({
  name: "currentGame",
  initialState,
  reducers: {
    setCurrentGame: (state, action: PayloadAction<SetGamePayload>) => {
      state.game = action.payload.game;
    },
    setCurrentGameTheme: (state, action: PayloadAction<SetThemePayload>) => {
      state.theme = action.payload.theme;
    },
    startCurrentGame: (state) => {
      state.status = STATUS.LOADING;
    },
    setStatusLoaded: (state) => {
      state.status = STATUS.LOADED;
    },
    setCurrentGamseStatusToInitialState: (state) => {
      state.status = initialState.status;
      state.game = initialState.game;
      state.theme = initialState.theme;
    },
  },
});

export const {
  setCurrentGame,
  setCurrentGameTheme,
  startCurrentGame,
  setStatusLoaded,
  setCurrentGamseStatusToInitialState,
} = currentGame.actions;

export const getCurrentGameStatus = (state: RootState): STATUS =>
  state.currentGame.status;
export const getCurrentGametheme = (state: RootState): THEMES =>
  state.currentGame.theme;
export const getCurrentGame = (state: RootState): GAMES =>
  state.currentGame.game;
