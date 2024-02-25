'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFixed: false,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setIsFixed(state, action) {
      state.isFixed = action.payload;
      localStorage.setItem('isFixed', action.payload);
    },
    toggleIsFixed(state, action) {
      state.isFixed = !state.isFixed;
      localStorage.setItem('isFixed', action.payload);
    },
  },
});

export const { setIsFixed, toggleIsFixed } = headerSlice.actions;
export default headerSlice.reducer;
