import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_KEY, API_URL } from '../utils/constants';
import { useState } from 'react';
import DetailCard from '../components/card/DetailCard';
import { toast } from 'react-toastify';
const Detail = () => {
  const [media, setMedia] = useState({});
  const params = useParams();
  const type = params.id.slice(0, 2);
  const mediaType = type === 'mv' ? 'movie' : type === 'tv' ? 'tv' : null;
  const id = params.id.slice(2);

  const getMediaData = async () => {
    try {
      let response = await axios.get(`${API_URL}/${mediaType}/${id}?api_key=${API_KEY}&language=en-US&page=1`);
      setMedia(response.data);
    } catch (error) {
      toast.error('something went wrong');
      console.log(error);
    }
  };

  useEffect(() => {
    getMediaData();
  }, [params]);

  return (
    <Container>
      <Box mb={4} py={5} sx={{ minHeight: '85vh' }}>
        <DetailCard media={media} mediaType={mediaType} />
      </Box>
    </Container>
  );
};

export default Detail;
