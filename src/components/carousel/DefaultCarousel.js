import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import DefaultCard from '../card/DefaultCard';

const DefaultCarousel = ({ mediaList, mediaType }) => {
  return (
    <Swiper slidesPerView={5} spaceBetween={30} navigation={true} modules={[Navigation]} className='mySwiper'>
      {mediaList.map((m) => (
        <SwiperSlide key={m.id}>
          <DefaultCard media={m} mediaType={mediaType} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DefaultCarousel;
