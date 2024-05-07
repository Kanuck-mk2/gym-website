'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import CustomButton from './CustomButton';
import SwiperNavButtons from './SwiperNavButtons';

import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/animations';

const HeroSlider = () => {
  return (
    <Swiper className="h-full">
      <SwiperSlide>
        <div className="h-full flex justify-start pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px] -mt-9">
            <motion.h1
              className="lg:text-8xl text-gray-200 text-center lg:text-left mb-2 font-anta sm:text-7xl"
              variants={fadeIn('up', 0.4)}
              initial="childHidden"
              whileInView="childVisible"
              viewport={{ once: false, amount: 0.2 }}
            >
              Where <span className="text-accent font-anta">Peak</span>{' '}
              performance meets success
            </motion.h1>
            <motion.p
              className="text-gray-200 font-semibold italic text-center lg:text-left mb-4"
              variants={fadeIn('up', 0.6)}
              initial="childHidden"
              whileInView="childVisible"
              viewport={{ once: false, amount: 0.2 }}
            >
              Achieve results from our facility and a community ready to be
              engaged in realizing your goals.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial="childHidden"
              whileInView="childVisible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <CustomButton
                text="Get started"
                containerStyles="w-[196px] h-[62px] bg-accent rounded-full font-anta"
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-full flex justify-start pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px] -mt-9">
            <motion.h1
              className="lg:text-7xl text-gray-200 text-center lg:text-left mb-2 font-anta sm:text-5xl"
              variants={fadeIn('up', 0.4)}
              initial="childHidden"
              whileInView="childVisible"
              viewport={{ once: false, amount: 0.2 }}
            >
              Our <span className="text-accent">Team</span> of expert{' '}
              <span className="text-accent">coaches</span> to guide and{' '}
              <span className="text-accent">motivate</span> to your{' '}
              <span className="text-accent">peak</span> potential
            </motion.h1>
            <motion.p
              className="text-gray-200 italic font-semibold text-center lg:text-left mb-4"
              variants={fadeIn('up', 0.6)}
              initial="childHidden"
              whileInView="childVisible"
              viewport={{ once: false, amount: 0.2 }}
            >
              Our trainers are highly qualified and experienced with a wide
              range of clients. Our team is equipped and knowledgeable in
              meeting your goals.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial="childHidden"
              whileInView="childVisible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <CustomButton
                text="Learn More"
                containerStyles="w-[196px] h-[62px] bg-accent rounded-full font-anta"
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-full flex justify-start pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px] -mt-9">
            <motion.h1
              className="lg:text-7xl text-gray-200 text-center lg:text-left mb-2 font-anta sm:text-5xl"
              variants={fadeIn('up', 0.4)}
              initial="childHidden"
              whileInView="childVisible"
              viewport={{ once: false, amount: 0.2 }}
            >
              Step into our{' '}
              <span className="text-accent">state-of-the-art gym</span>, where
              sleek modern equipment and premium amenities await
            </motion.h1>
            <motion.p
              className="text-gray-200 italic font-semibold text-center lg:text-left mb-4"
              variants={fadeIn('up', 0.6)}
              initial="childHidden"
              whileInView="childVisible"
              viewport={{ once: false, amount: 0.2 }}
            >
              To provide an comfortable yet effcient space for your workout
              needs.
            </motion.p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperNavButtons
        containerStyles="absolute bottom-2 lg:right-0 lg:mb-[100px] lg:mr-[430px] w-full lg:w-[130px] h-[120px] z-50 flex justify-center sm:justify-center sm:py-14 sm:mr-50 gap-2"
        btnStyles="w-[56px] h-[56px] flex justify-center items-center border-2 border-accent rounded-full text-white hover:bg-accent transition-all duration-300"
        iconStyles="text-2xl"
      />
    </Swiper>
  );
};

export default HeroSlider;
