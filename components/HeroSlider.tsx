'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import CustomButton from './CustomButton';

const HeroSlider = () => {
  return (
    <Swiper>
      <SwiperSlide className="h-full flex justify-end pt-48">
        <div>
          <h1 className='h1 text-center lg:text-left mb-2'>
            <span>Where Hard</span>
            work meets success
          </h1>
          <p className='text-white italic text-center lg:text-left mb-4'></p>
          <CustomButton />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
