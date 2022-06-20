import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, API_URL } from '../../utils/constants';
import camelToUnderscore from '../../utils/functions/camelToUnderscore';

const initialState = {
  movies: {
    popular: [],
    topRated: [],
    upcoming: [],
  },
  tvShows: {
    popular: [],
    topRated: [],
    upcoming: [],
  },
};

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    addMovies(state, action) {
      const { data, mediaType, mediaCategory } = action.payload;
      if (mediaType === 'movie') {
        state.movies[mediaCategory].push(...data);
      }
      if (mediaType === 'tv') {
        state.tvShows[mediaCategory].push(...data);
      }
    },
  },
});

// mediaType = movie or tv
// media category = popular or topRated or upcoming
export const fetchMediaByCategories = (mediaType, mediaCategory) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${API_URL}/${mediaType}/${camelToUnderscore(mediaCategory)}?api_key=${API_KEY}&language=en-US&page=1`
      );
      console.log('<<<<<<<<<<<<< res >>>>>>>>>>>>>>>>', res);
      dispatch(addMovies({ data: res.data.results, mediaType, mediaCategory }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const { addMovies } = mediaSlice.actions;

export default mediaSlice.reducer;
