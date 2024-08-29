// lib/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; 
import todolistReducer from './todoListSlice'; 
import cartReducer from "./cartSlice"
export function makeStore() {
  return configureStore({
    reducer: {
      counter: counterReducer, 
      cart : cartReducer
    },
  });
}