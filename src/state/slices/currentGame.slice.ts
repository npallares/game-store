import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../enums/status";
import { THEMES } from "../../enums/theme";
import { RootState } from "../store";

type SetThemePayload = {
  theme: THEMES;
};

interface CurrentGameState {
  status: STATUS;
  theme: THEMES | null;
}

const initialState: CurrentGameState = {
  status: STATUS.UNINITIALIZED,
  theme: null,
};

export const currentGame = createSlice({
  name: "currentGame",
  initialState,
  reducers: {
    setCurrentGameTheme: (state, action: PayloadAction<SetThemePayload>) => {
      state.theme = action.payload.theme;
    },
    startCurrentGame: (state) => {
      state.status = STATUS.LOADING;
    },
    currentGameOver: (state) => {
      state.status = STATUS.LOADED;
    },
    restartGame: (state) => {
      state.status = initialState.status;
    },
  },
});

export const { setCurrentGameTheme, startCurrentGame, currentGameOver, restartGame } =
  currentGame.actions;

export const getCurrentGameStatus = (state: RootState): STATUS =>
  state.currentGame.status;
export const getCurrentGametheme = (state: RootState): THEMES | null =>
  state.currentGame.theme;
