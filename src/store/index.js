import { configureStore } from '@reduxjs/toolkit';
import { userInputSlice } from './reducers/userInput';

const store = configureStore({
  reducer: {
    user: userInputSlice.reducer,
  }
})

export default store;