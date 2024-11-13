// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../Redux/Products/productSlice';
import counterSlice from './Counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    products: productsReducer,
  },
});

export default store;
