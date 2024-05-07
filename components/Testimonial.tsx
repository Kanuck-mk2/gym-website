'use client';

import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

import { testimonialData } from '@/constants';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/animations';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <section className=" bg-about py-12 xl:py-28 lg:h-[100vh]" id="testimonial">
      <div className="container mx-auto">
        <motion.h2
          className="h2 text-center font-anta py-10"
          variants={fadeIn('up', 0.4)}
          initial="childHidden"
          whileInView={'childVisible'}
          viewport={{ once: true, amount: 0.2 }}
        >
          Our Testimonials
        </motion.h2>
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="childHidden"
          whileInView={'childVisible'}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {testimonialData.map((person, index) => {
              return (
                <SwiperSlide className="h-full" key={index}>
                  <div className="flex flex-col justify-center items-center gap-6 text-center h-full">
                    <Image
                      className="rounded-full border-2 border-accent"
                      src={person.img}
                      width={130}
                      height={130}
                      alt="/"
                    />
                    <div className="flex flex-col justify-center items-center">
                      <FaQuoteLeft className="text-2xl text-gray-300" />
                      <p className="max-w-[380px] mb-4 text-gray-200">
                        {person.message}
                      </p>
                      <span className="text-2xl text-accent font-anta">
                        {person.name}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}{' '}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
