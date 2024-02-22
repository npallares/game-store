import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Payload {
  id: string;
}

interface CounterState {
  questionCounter: string[];
  matchCounter: number;
}

const initialState: CounterState = {
  questionCounter: [''],
  matchCounter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addMatchCounter: (state) => {
      state.matchCounter = state.matchCounter + 1;
    },
    addQuestionCounter: (state, action: PayloadAction<Payload>) => {
      state.questionCounter.push(action.payload.id);
    },
  },
});

export const { addMatchCounter, addQuestionCounter } = counterSlice.actions;
