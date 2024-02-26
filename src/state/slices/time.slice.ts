import { createSlice } from "@reduxjs/toolkit";
import { differenceInSeconds, getTime, millisecondsToSeconds } from "date-fns";
import { RootState } from "../store";

interface TimeReducer {
  initialTimestamp: number | null | Date;
  finishedTimestamp: number | null | Date;
  finalTime: number | null;
}

const initialState: TimeReducer = {
  initialTimestamp: null,
  finishedTimestamp: null,
  finalTime: null,
};

const getMiliseconds = (
  initialTimeStamp: number,
  finishedTimeStamp: number
): number => {
  const miliseconds = differenceInSeconds(initialTimeStamp, finishedTimeStamp);
  return miliseconds;
};

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    setInitialTimestamp: (state) => {
      const currentTime = new Date(); // Log
      state.initialTimestamp = getTime(currentTime);
    },
    setFinishedTimestamp: (state) => {
      const currentTime = new Date(); // Log
      state.finishedTimestamp = getTime(currentTime);
    },
    setFinalTime: (state) => {
      const { initialTimestamp, finishedTimestamp } = state;
      state.finalTime = getMiliseconds(
        Number(finishedTimestamp),
        Number(initialTimestamp)
      );
    },
    setInitialState: (state) => {
      state.initialTimestamp = null;
      state.finishedTimestamp = null;
      state.finalTime = null;
    },
  },
});

export const {
  setFinishedTimestamp,
  setFinalTime,
  setInitialTimestamp,
  setInitialState,
} = timeSlice.actions; // Corrected the export statement

export default timeSlice.reducer; // Export the reducer as

export const getFinalTime = (state: RootState): number | null =>
  state.time.finalTime;
