'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import CustomButton from './CustomButton';
import SwiperNavButtons from './SwiperNavButtons';

const HeroSlider = () => {
  return (
    <Swiper className="h-full">
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48 ">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px] -mt-9">
            <h1 className="h1 text-center lg:text-left mb-2 font-anta">
              Where <span className="text-cyan-300 font-anta">Peak </span>
              effort meets success
            </h1>
            <p className="text-gray-200 italic text-center lg:text-left mb-4">
              Achieve results from our facility and a community ready to be
              engaged in realizing your goals.
            </p>
            <CustomButton
              text="Get started"
              containerStyles="w-[196px] h-[62px] bg-cyan-300 rounded-full font-anta "
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperNavButtons
        containerStyles="absolute bottom-2 lg:bottom-0 right-0 h-[130px] w-full lg:w-[700px] z-50 flex justify-start lg:justify-end mr-60 mb-7 gap-2"
        btnStyles="border border-accent text-white w-[56px] h-[56px] flex justify-center
                 items-center hover:bg-accent transition-all duration-300"
        iconStyles="text-2xl"
      />
    </Swiper>
  );
};

export default HeroSlider;
