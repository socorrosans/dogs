import { createSlice } from '@reduxjs/toolkit';

export const userInputSlice = createSlice({
  name: 'userInput',
  initialState: {
    user: '',
    password: '',
  },
  reducers: {
    getInputUser: (state, action) => {
      state.user = action.payload;
    },
    getInputPassword: (state, action) => {
      state.password = action.payload;
    },
    getInputValue: (state, action) => {
      state.value = action.payload;
    },
  }
});


export const {getInputUser, getInputPassword, getInputValue} = userInputSlice.actions;