import React from 'react';
import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { deepOrange, grey } from '@mui/material/colors';
const WatchlistCard = ({ media, mediaType }) => {
  const isMovie = mediaType === 'movie';
  const date = new Date(isMovie ? media.release_date : media.first_air_date);
  return (
    <Box
      key={media.id}
      display={'flex'}
      alignItems='center'
      py={1}
      position='relative'
      sx={{
        overflow: 'hidden',
        '&:hover': {
          '.action-box': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
      }}
    >
      <Avatar
        alt={media.title}
        src={`https://image.tmdb.org/t/p/w220_and_h330_face/${media.poster_path}`}
        sx={{ width: 48, height: 48 }}
      />
      <Box className='detail-box' ml={1}>
        <Typography variant='subtitle1' lineHeight={1.2}>
          {isMovie ? media.title : media.name}
        </Typography>
        <Typography variant='subtitle3' color={grey[500]}>
          {date.toLocaleString().split(',')[0]}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          padding: '0 1rem',
          background: 'linear-gradient(to right, rgba(0,0,0,0.0),rgba(0,0,0,0.5))',
          transform: 'translateX(100%)',
          opacity: 0,
          transition: 'all .3s',
        }}
        className='action-box'
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: deepOrange[800],
            borderRadius: '1rem',
            padding: '2px 14px',
          }}
        >
          <Tooltip title='Details' placement='top' arrow>
            <IconButton aria-label='delete' size='small'>
              <InfoIcon fontSize='inherit' />
            </IconButton>
          </Tooltip>
          <Tooltip title='Delete' placement='top' arrow>
            <IconButton aria-label='delete' size='small'>
              <DeleteIcon fontSize='inherit' />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default WatchlistCard;
