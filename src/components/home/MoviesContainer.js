import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment } from 'react';
import { movies } from '../../utils/fakeData';
import DefaultCarousel from '../carousel/DefaultCarousel';

const MoviesContainer = () => {
  return (
    <Fragment>
      <Box mb={4}>
        <Typography variant='h6' fontWeight={600} mb={1.5}>
          Popular Movies
        </Typography>
        <DefaultCarousel mediaList={movies} mediaType='movie' />
      </Box>
      <Box mb={4}>
        <Typography variant='h6' fontWeight={600} mb={1.5}>
          Upcoming Movies
        </Typography>
        <DefaultCarousel mediaList={movies} mediaType='movie' />
      </Box>
      <Box>
        <Typography variant='h6' fontWeight={600} mb={1.5}>
          Top Rated Movies
        </Typography>
        <DefaultCarousel mediaList={movies} mediaType='movie' />
      </Box>
    </Fragment>
  );
};

export default MoviesContainer;
