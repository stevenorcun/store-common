// import createSlice from redux toolkit
import { createSlice } from "@reduxjs/toolkit";

export interface Transaction {
  id: number | string;
  title: string;
  amount: number;
  type: TransactionType;
}

export enum TransactionType {
  Income = "income",
  Expense = "expense",
}

export interface TransactionState {
  transactions: Transaction[];
  totalIncome?: number;
  totalExpense?: number;
}

const initialState: TransactionState = {
  transactions: [],
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
    deleteTransaction: (state, action) => {
      const index = state.transactions.findIndex(
        (transaction) => transaction.id === action.payload
      );
      if (index !== -1) {
        state.transactions.splice(index, 1);
      } else {
        console.log("Transaction not found");
      }
    },
    updateTransaction: (state, action) => {
      const index = state.transactions.findIndex(
        (transaction) => transaction.id === action.payload.id
      );
      if (index !== -1) {
        state.transactions[index] = action.payload;
      } else {
        console.log("Transaction not found");
      }
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;

export const transactionsReducer = transactionsSlice.reducer;
