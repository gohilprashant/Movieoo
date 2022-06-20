import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { movies, tvShows } from '../../utils/fakeData';
import DefaultCarousel from '../carousel/DefaultCarousel';

const TvShowsContainer = () => {
  const { popular, upcoming, topRated } = useSelector((state) => state.media.tvShows);
  return (
    <Fragment>
      <Box mb={4}>
        <Typography variant='h6' fontWeight={600} mb={1.5}>
          Popular Shows
        </Typography>
        <DefaultCarousel mediaList={popular} mediaType='tv' mediaCategory='popular' />
      </Box>
      {/* <Box mb={4}>
        <Typography variant='h6' fontWeight={600} mb={1.5}>
          Upcoming Shows
        </Typography>
        <DefaultCarousel mediaList={tvShows} mediaType='tv' />
      </Box> */}
      <Box>
        <Typography variant='h6' fontWeight={600} mb={1.5}>
          Top Rated Shows
        </Typography>
        <DefaultCarousel mediaList={topRated} mediaType='tv' mediaCategory='topRated' />
      </Box>
    </Fragment>
  );
};

export default TvShowsContainer;
