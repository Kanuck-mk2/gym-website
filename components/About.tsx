'use client';

import { featuredItems } from '@/constants';

import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/animations';
import Achievements from './Achievements';

const About = () => {
  return (
    <section className="bg-about pt-8 pb-14 lg:pt-16 lg:pb-28 " id="about">
      <div className="container mx-auto  ">
        <div className="flex flex-col items-center gap-2 mb-8 ">
          <h2 className="h2 text-center">About Us</h2>
          <p className="max-w-[600px] mx-auto text-center text-gray-200 text-[20px]">
            At PEAK Fitness, we are committed in seeing you transform and sculpt
            your body that you have been dreaming off.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
          variants={fadeIn('up', 0.1)}
          initial="parentHidden"
          whileInView={'parentVisible'}
          viewport={{ once: true }}
        >
          {featuredItems.map((feature, index) => {
            return (
              <motion.div
                className="flex flex-col justify-center items-center gap-4 p-10"
                key={index}
                variants={fadeIn('up', index * 0.1)}
                initial="childHidden"
                whileInView={'childVisible'}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-white text-4xl bg-primary-300 w-[60px] h-[60px] rounded-full flex justify-center items-center "
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    duration: 1,
                    delay: index * 0.3,
                  }}
                  viewport={{ once: false }}
                >
                  {<feature.icon />}
                </motion.div>
                <div>
                  <h4 className="h4 text-accent">{feature.title}</h4>
                  <p className="text-gray-300">{feature.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <Achievements />
      </div>
    </section>
  );
};

export default About;
