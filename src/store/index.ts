import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./counterSlice";
import { transactionsReducer } from "./transactionsSlice";

const store = configureStore({
  reducer: {
    counter: countReducer,
    transactions: transactionsReducer,
  },
});

export default store;
