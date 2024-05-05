'use client';

import { featuredItems } from '@/constants';

import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/animations';

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28 " id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <h2 className="h2 text-center">About Us</h2>
          <p className="max-w-[600px] mx-auto text-center">text</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 ">
          {featuredItems.map((feature, index) => {
            return (
              <div key={index}>
                <div>{<feature.icon />}</div>
                <div>
                  <h4 className="h4">{feature.title}</h4>
                  <p>{feature.subtitle}</p>
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
