import { configureStore } from '@reduxjs/toolkit';
import mediaReducer from './slices/mediaSlice';

const store = configureStore({
  reducer: { media: mediaReducer },
});

export default store;
