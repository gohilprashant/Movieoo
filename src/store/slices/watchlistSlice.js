import { createSlice } from '@reduxjs/toolkit';

const movies = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [];
const tvShows = localStorage.getItem('tvShows') ? JSON.parse(localStorage.getItem('tvShows')) : [];

const initialState = {
  movies: movies,
  tvShows: tvShows,
  error: '',
  success: '',
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchList(state, action) {
      const { media, mediaType } = action.payload;
      if (mediaType === 'movie') {
        if (!state.movies.find((m) => m.id === media.id)) {
          state.movies.push(media);
          state.success = 'Movie added to watchlist!';
          localStorage.setItem('movies', JSON.stringify(state.movies));
        } else {
          state.error = 'Movie is aleady added to watchlist';
        }
      }
      if (mediaType === 'tv') {
        if (!state.tvShows.find((m) => m.id === media.id)) {
          state.tvShows.push(media);
          state.success = 'Tv Show added to watchlist!';
          localStorage.setItem('tvShows', JSON.stringify(state.tvShows));
        } else {
          state.error = 'Tv Show is aleady added to watchlist';
        }
      }
    },
    removeFromWatchlist(state, action) {
      const { id, mediaType } = action.payload;
      if (mediaType === 'movie') {
        state.movies = state.movies.filter((m) => m.id !== id);
        state.success = 'Movie removed from watchlist!';
        localStorage.setItem('movies', JSON.stringify(state.movies));
      }
      if (mediaType === 'tv') {
        state.tvShows = state.tvShows.filter((m) => m.id !== id);
        state.success = 'Tv Show removed from watchlist!';
        localStorage.setItem('tvShows', JSON.stringify(state.tvShows));
      }
    },

    resetWatchlist(state, action) {
      state.error = '';
      state.success = '';
    },
  },
});

export const { addToWatchList, removeFromWatchlist, resetWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;
