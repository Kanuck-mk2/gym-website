'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/animations';
import CustomButton from './CustomButton';

import { classes } from '@/constants';

const Classes = () => {
  return (
    <section id="class" className="bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {classes.map((item, index) => {
          return (
            <div
              key={index}
              className="relative flex flex-col justify-center items-center "
            >
              <div className="relative w-full h-[300px] lg:h-[486px] ">
                <Image src={item.img} layout="fill" objectFit="cover" alt="/" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <motion.h3
                    className="h3 text-accent font-anta font-bold "
                    variants={fadeIn('up', 0.4)}
                    initial="childHidden"
                    whileInView={'childVisible'}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    {item.name}
                  </motion.h3>
                  <motion.p
                    className="text-gray-200 font bold text-2xl"
                    variants={fadeIn('up', 0.6)}
                    initial="childHidden"
                    whileInView={'childVisible'}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    {item.description}
                  </motion.p>

                  <motion.div
                    variants={fadeIn('up', 0.8)}
                    initial="childHidden"
                    whileInView={'childVisible'}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <CustomButton
                      containerStyles="w-[164px] h-[46px] rounded-full font-anta"
                      text="Read More"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Classes;
