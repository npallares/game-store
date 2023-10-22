import { createSlice } from "@reduxjs/toolkit";
import { getTime, millisecondsToSeconds } from "date-fns";

interface TimeReducer {
  initialTimestamp: number | null | Date;
  finishedTimestamp: number | null | Date;
  finalTime: object | number | string | null;
}

const initialState: TimeReducer = {
  initialTimestamp: null,
  finishedTimestamp: null,
  finalTime: null,
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
    getFinalTime: (state) => {
        const { initialTimestamp, finishedTimestamp } = state;
        
        const diffInMilliseconds =
        Number(finishedTimestamp) - Number(initialTimestamp);
        const diffInSeconds = millisecondsToSeconds(diffInMilliseconds);
        state.finalTime = getTime(diffInSeconds);
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
  getFinalTime,
  setInitialTimestamp,
  setInitialState,
} = timeSlice.actions; // Corrected the export statement

export default timeSlice.reducer; // Export the reducer as
