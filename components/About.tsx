'use client';

import { featuredItems } from '@/constants';

import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/animations';

const About = () => {
  return (
    <section className="bg-about pt-8 pb-14 lg:pt-16 lg:pb-28 " id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <h2 className="h2 text-center">About Us</h2>
          <p className="max-w-[600px] mx-auto text-center">text</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 ">
          {featuredItems.map((feature, index) => {
            return (
              <div className='flex flex-col justify-center items-center gap-4  p-10' key={index}>
                <div className="text-white text-4xl bg-primary-300 w-[80px] h-[80px] rounded-full flex justify-center items-center">
                  {<feature.icon />}
                </div>
                <div>
                  <h4 className="h4 text-accent">{feature.title}</h4>
                  <p className="text-gray-300">{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
