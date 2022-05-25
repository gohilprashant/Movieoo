import { alpha, Box, Container, Link } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{ flexGrow: 1, borderTop: 1, borderColor: (theme) => alpha(theme.palette.common.white, 0.4) }}
      textAlign='center'
      py={2}
    >
      <Container>
        Made by{' '}
        <Link
          href='https://prashantgohil.netlify.app/'
          underline='none'
          rel='noreferrer'
          target='_blank'
          sx={{
            color: 'common.white',
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          Prashant Gohil
        </Link>
      </Container>
    </Box>
  );
};

export default Footer;
