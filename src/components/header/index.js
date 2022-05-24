import React from 'react';
import { alpha, AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import Search from './Search';
import Watchlist from './Watchlist';

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => alpha(theme.palette.common.black, 0.3),
        borderBottom: 1,
        borderColor: (theme) => alpha(theme.palette.common.white, 0.4),
      }}
    >
      <AppBar position='static' color='transparent' elevation={0}>
        <Toolbar component={Container}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MovieFilterIcon sx={{ fontSize: '2rem' }} />
            <Typography variant='h5' component='div' sx={{ ml: '.25rem' }}>
              Movieoo
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Search />
          <Watchlist />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
