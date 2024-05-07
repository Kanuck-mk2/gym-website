'use client';

import SwiperNavButtons from './SwiperNavButtons';
import CustomButton from './CustomButton';

import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/animations';
import { blogData } from '@/constants';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';

const Blog = () => {
  return (
    <section className="text-white py-24 bg-black" id="blog">
      <div className="container mx-auto">
        <motion.h2
          className=" h2 text-center mb-12 font-anta"
          variants={fadeIn('up', 0.4)}
          initial="childHidden"
          whileInView={'childVisible'}
          viewport={{ once: true, amount: 0.2 }}
        >
          Blogs
        </motion.h2>
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="childHidden"
          whileInView={'childVisible'}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Swiper
            className="h-[420px] md:max-w-[660px] lg:max-w-none mb-8"
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {blogData.map((post, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col justify-start h-full max-w-[320px] mx-auto">
                    <Image
                      className="mb-6"
                      src={post.img}
                      width={320}
                      height={266}
                      alt="/"
                    />
                    <div className="flex flex-col items-start">
                      <p className="max-w-[380px] uppercase text-[12px] tracking-[3px] mb-1">
                        {post.date}
                      </p>
                      <Link
                        className="hover:text-accent transition-all duration-300"
                        href={post.href}
                      >
                        <h5 className="h5">{post.title}</h5>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <SwiperNavButtons
              containerStyles="absolute left-0 rigt-0 bottom-[16rem] w-full max-w-[370px] sm:max-w-[620px] md:max-w-[960px] lg:max-w-[1320px] mx-auto z-50 flex justify-between gap-1"
              btnStyles="bg-accent text-white w-[66px] h-[66px] rounded-full flex justify-center items-center hover:bg-accent transition-all duration-300"
              iconStyles="text-2xl"
            />
          </Swiper>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center"
          variants={fadeIn('up', 0.8)}
          initial="childHidden"
          whileInView={'childVisible'}
          viewport={{ once: true, amount: 0.2 }}
        >
          <CustomButton
            containerStyles="block w-[196px] h-[62px] rounded-full font-anta"
            text="View all"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
