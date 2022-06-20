import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { movies } from '../../utils/fakeData';
import DefaultCarousel from '../carousel/DefaultCarousel';

const MoviesContainer = () => {
  const { popular, upcoming, topRated } = useSelector((state) => state.media.movies);
  useEffect(() => {
    console.log('movies component rendered');
  }, []);
  return (
    <Fragment>
      <Box mb={4}>
        <Typography variant='h6' fontWeight={600} mb={1.5}>
          Popular Movies
        </Typography>
        <DefaultCarousel mediaList={popular} mediaType='movie' mediaCategory='popular' />
      </Box>
      <Box mb={4}>
        <Typography variant='h6' fontWeight={600} mb={1.5}>
          Upcoming Movies
        </Typography>
        <DefaultCarousel mediaList={upcoming} mediaType='movie' mediaCategory='upcoming' />
      </Box>
      <Box>
        <Typography variant='h6' fontWeight={600} mb={1.5}>
          Top Rated Movies
        </Typography>
        <DefaultCarousel mediaList={topRated} mediaType='movie' mediaCategory='topRated' />
      </Box>
    </Fragment>
  );
};

export default MoviesContainer;
