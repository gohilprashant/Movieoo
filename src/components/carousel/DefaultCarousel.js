import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import DefaultCard from '../card/DefaultCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMediaByCategories } from '../../store/slices/mediaSlice';

const DefaultCarousel = ({ mediaList, mediaType, mediaCategory }) => {
  const dispatch = useDispatch();
  const { movies, tvShows } = useSelector((state) => state.media);
  useEffect(() => {
    if (mediaType === 'movie' && movies[mediaCategory].length < 1) {
      dispatch(fetchMediaByCategories(mediaType, mediaCategory));
    }
    if (mediaType === 'tv' && tvShows[mediaCategory].length < 1) {
      dispatch(fetchMediaByCategories(mediaType, mediaCategory));
    }
  }, [mediaType, mediaCategory]);

  return (
    <Swiper slidesPerView={5} spaceBetween={30} navigation={true} modules={[Navigation]} className='mySwiper'>
      {mediaList.map((m, idx) => (
        <SwiperSlide key={`${m.id}-${idx}`}>
          <DefaultCard media={m} mediaType={mediaType} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DefaultCarousel;
