import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import transactionReducer from "./transactionsSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    transactions: transactionReducer,
  },
});

export default store;
