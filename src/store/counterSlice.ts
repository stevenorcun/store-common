import { createSlice } from "@reduxjs/toolkit";

interface CountState {
  value: number;
}

const initialState: CountState = {
  value: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = countSlice.actions;

export const counterReducer = countSlice.reducer;
