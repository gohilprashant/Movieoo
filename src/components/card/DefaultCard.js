import React from 'react';
import { Chip, styled, Tooltip, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import InfoIcon from '@mui/icons-material/Info';
import { grey, yellow } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { addToWatchList } from '../../store/slices/watchlistSlice';
const StyleDefaultCard = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '290px',
  display: 'flex',
  alignItems: 'flex-end',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  '.MuiChip-root': {
    position: 'absolute',
    left: '1rem',
    top: '1rem',
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,.5)',
    '.MuiChip-icon': {
      color: yellow[500],
    },
  },
  '.img-box': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      transition: 'all .2s',
    },
  },
  '.detail-box': {
    position: 'relative',
    zIndex: 2,
    padding: '1rem',
    width: '100%',
    background: 'linear-gradient(to bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.7),rgba(0,0,0,0.9) )',
  },
  '.card-actions': {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '-54px',
    transition: 'all .2s',
  },
  '&:hover': {
    '.img-box': {
      img: {
        transform: 'scale(1.1)',
      },
    },
    '.card-actions': {
      marginBottom: '-4px',
    },
  },
}));

const DefaultCard = ({ media, mediaType }) => {
  const isMovie = mediaType === 'movie';
  const date = new Date(isMovie ? media.release_date : media.first_air_date);
  const dispatch = useDispatch();

  const handleAddToWatchList = () => {
    dispatch(addToWatchList({ media, mediaType }));
  };

  return (
    <StyleDefaultCard>
      <Chip icon={<StarIcon />} label={media.vote_average ? media.vote_average : '-'} size='small' />
      <div className='img-box'>
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face/${media.poster_path}`}
          alt={media.title}
          loading='lazy'
        />
      </div>
      <div className='detail-box'>
        <Typography variant='h6'>{isMovie ? media.title : media.name}</Typography>
        <Typography variant='subtitle2' color={grey[500]}>
          {date.getFullYear() ? date.getFullYear() : 'Not available'}
        </Typography>
        <div className='card-actions'>
          <Tooltip title='Details' placement='top' arrow>
            <IconButton size='large'>
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Add to watchlist' placement='top' arrow>
            <IconButton size='large' onClick={handleAddToWatchList}>
              <BookmarkAddIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </StyleDefaultCard>
  );
};

export default DefaultCard;
