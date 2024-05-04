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
          <h1 className="h1 text-center lg:text-left mb-2 font-anta">
             Where <span className='text-cyan-300 font-anta'> Peak </span>
            effort meets success
          </h1>
          <p className="text-white italic text-center lg:text-left mb-4">
            Achieve peak results from our facility and a community engaged with
            realizing your goals.
          </p>
          <CustomButton
            text="Get started"
            containerStyles="w-[196px] h-[62px] bg-cyan-300 rounded-full"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
