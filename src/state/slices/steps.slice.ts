import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface StepsState {
  steps: number;
  efficiency: number;
}

const initialState: StepsState = {
  steps: 0,
  efficiency: 0,
};

const getCurrentEfficiency = (steps: number): number => {
  const efficiency = 800 / steps; // si steps es el 100%, necesitamos saber cuanto porcentaje es 8 (100%)
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
      state.efficiency = getCurrentEfficiency(state.steps);
    },
    setStepsInitialState: (state) => {
      state.steps = 0;
      state.efficiency = 0;
    },
  },
});

export const { addStep, setEfficiency, setStepsInitialState } =
  stepsSlice.actions;

export const getSteps = (state: RootState): number => state.steps.steps;

export const getEfficiency = (state: RootState): number =>
  state.steps.efficiency;
