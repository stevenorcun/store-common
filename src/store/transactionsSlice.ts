// import createSlice from redux toolkit
import { createSlice } from "@reduxjs/toolkit";

interface Transaction {
  id: number | string;
  title: string;
  amount: number;
}

interface TransactionState {
  transactions: Transaction[];
}

const initialState: TransactionState = {
  transactions: [],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;

export const transactionReducer = transactionsSlice.reducer;
