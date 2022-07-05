import { configureStore } from '@reduxjs/toolkit';
import mediaReducer from './slices/mediaSlice';
import watchlistReducer from './slices/watchlistSlice';
const store = configureStore({
  reducer: { media: mediaReducer, watchlist: watchlistReducer },
});

export default store;
