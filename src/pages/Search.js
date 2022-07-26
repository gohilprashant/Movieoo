import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import DefaultCard from '../components/card/DefaultCard';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { API_KEY, API_URL } from '../utils/constants';
const Search = () => {
  const location = useLocation();
  let query = location.search.slice(1);

  const [media, setMedia] = useState({
    movies: [],
    tvShows: [],
  });

  //   12, 7

  const getSearchResults = async () => {
    const response = await axios.get(`${API_URL}/search/multi?query=${query}&api_key=${API_KEY}`);
    const { results } = response.data;
    const movies = [];
    const tvShows = [];

    results.forEach((r) => {
      if (r.media_type === 'movie') {
        movies.push(r);
      }

      if (r.media_type === 'tv') {
        tvShows.push(r);
      }
    });

    setMedia({ movies, tvShows });
  };

  useEffect(() => {
    getSearchResults();
  }, [query]);

  return (
    <Container>
      <Box mb={4} py={5} sx={{ minHeight: '85vh' }}>
        <Typography variant='h5' fontWeight={400} mb={4}>
          {media.movies.length > 0 || media.tvShows.length > 0 ? 'Search Results for ' : 'No results found for '}

          <Box component={'span'} fontWeight={700}>
            {query}
          </Box>
        </Typography>
        {media.movies.length > 0 && (
          <Box>
            <Typography variant='h6' fontWeight={600} mb={1.5}>
              Movies
            </Typography>
            <Grid container spacing={2}>
              {media.movies.map((m) => (
                <Grid item xs={12} sm={6} md={4} xl={3}>
                  <DefaultCard media={m} mediaType={'movie'} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {media.tvShows.length > 0 && (
          <Box mt={5}>
            <Typography variant='h6' fontWeight={600} mb={1.5}>
              Tv Shows
            </Typography>
            <Grid container spacing={2}>
              {media.tvShows.map((m) => (
                <Grid item xs={12} sm={6} md={4} xl={3}>
                  <DefaultCard media={m} mediaType={'tv'} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Search;
