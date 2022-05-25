import React from 'react';
import { Button, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import heroImg from '../../assets/images/hero-bg.jpg';

const HeroArea = () => {
  return (
    <Box
      sx={{
        background: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
        height: '100vh',
        display: 'flex',
        marginTop: '-4rem',
      }}
    >
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <Container sx={{ py: 5, display: 'flex', justifyContent: 'flex-start' }}>
          <Box sx={{ p: 5, backgroundColor: 'rgba(0,0,0,0.55)', borderRadius: (theme) => theme.shape.borderRadius }}>
            <Typography variant='h3' variantMapping={{ h3: 'h1' }} fontWeight={600} mb={1}>
              Not sure what to watch ?
            </Typography>
            <Typography mb={2}>Get a random movie or tv show from your watchlist</Typography>
            <Box display={'flex'} alignItems={'center'}>
              <Button variant='contained' sx={{ mr: 1.5 }}>
                Get Random Movie
              </Button>
              <Button variant='contained'>Get Random Tv show</Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroArea;
