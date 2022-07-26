import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  styled,
  Tooltip,
  Typography,
  alpha,
  Link,
} from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/system';
import { grey, yellow } from '@mui/material/colors';
const StyleDefaultCard = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',

  '.img-box': {
    width: '15rem',
    minWidth: '15rem',
    img: {
      width: '100%',
    },
  },
  '.detail-box': {
    padding: '1rem',
  },
}));
const DetailCard = ({ media, mediaType }) => {
  const isMovie = mediaType === 'movie';
  const { title, tagline, vote_average, overview, release_date, homepage, original_language, name, first_air_date } =
    media;
  console.log(media);

  return (
    <StyleDefaultCard>
      <div className='img-box'>
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face/${media.poster_path}`}
          alt={media.title}
          loading='lazy'
        />
      </div>
      <div className='detail-box'>
        <Typography variant='h5' fontWeight={700}>
          {isMovie ? title : name}
        </Typography>
        {tagline && (
          <Typography variant='subtitle1' mb={2}>
            {tagline}
          </Typography>
        )}

        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} sm={6} md={4} xl={3} display='flex'>
            <Box
              sx={{
                backgroundColor: (theme) => alpha(theme.palette.common.black, 0.3),
                padding: 2,
                flex: 1,
              }}
            >
              <Typography variant='h6'>Release Date</Typography>
              <Typography variant='subtitle2'>{isMovie ? release_date : first_air_date}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl={3} display='flex'>
            <Box
              sx={{
                backgroundColor: (theme) => alpha(theme.palette.common.black, 0.3),
                padding: 2,
                flex: 1,
              }}
            >
              <Typography variant='h6'>Website</Typography>
              <Typography variant='subtitle2'>
                <Link
                  target='_blank'
                  sx={{
                    wordBreak: 'break-word',
                    color: (theme) => theme.palette.common.white,
                    textDecoration: 'none',
                    ':hover': { color: (theme) => theme.palette.primary.light },
                  }}
                  rel='noreferrer'
                  href={homepage}
                >
                  {homepage}
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl={3} display='flex'>
            <Box
              sx={{
                backgroundColor: (theme) => alpha(theme.palette.common.black, 0.3),
                padding: 2,
                flex: 1,
              }}
            >
              <Typography variant='h6' mr={1}>
                Rating
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <StarIcon sx={{ color: yellow[500], mr: 0.5 }} />
                {vote_average ? vote_average : '-'}
              </Box>
            </Box>
          </Grid>
          {original_language && (
            <Grid item xs={12} sm={6} md={4} xl={3} display='flex'>
              <Box
                sx={{
                  backgroundColor: (theme) => alpha(theme.palette.common.black, 0.3),
                  padding: 2,
                  flex: 1,
                }}
              >
                <Typography variant='h6' mr={1}>
                  Original Language
                </Typography>
                <Typography variant='subtitle2' mr={1}>
                  {original_language[0].toUpperCase() + original_language.slice(1)}
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
        <Typography>{overview}</Typography>
      </div>
    </StyleDefaultCard>
  );
};

export default DetailCard;
