import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface CounterState {
  value: number;
  message: string;
}
const initialState: CounterState = {
  value: 0,
  message: "counter is 0", // up to 1 | is 0 | up to 10 | less that 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value > 1) {
        state.message = "is up to 1";
      } else if (state.value === 0) {
        state.message = "is 0";
      }
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const counterAction = counterSlice.actions;
