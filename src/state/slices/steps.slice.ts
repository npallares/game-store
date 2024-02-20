import { createSlice } from "@reduxjs/toolkit";

interface StepsState {
  steps: number;
  efficiency: null | number;
}

const initialState: StepsState = {
  steps: 0,
  efficiency: null,
};

const getEfficiency = (steps: number): number => {
  const efficiency = 800 / steps; // si steps es el 100%, necesitamos saber cuanto porcentaje es 8 (100%)
  console.log("Nicolas", efficiency, steps);
  return Math.round(efficiency);
};

export const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    addStep: (state) => {
      state.steps = state.steps + 1;
    },
    setEfficiency: (state) => {
      state.efficiency = getEfficiency(state.steps);
    },
    setStepsInitialState: (state) => {
      state.steps = 0;
      state.efficiency = null;
    },
  },
});

export const { addStep, setEfficiency, setStepsInitialState } =
  stepsSlice.actions;
