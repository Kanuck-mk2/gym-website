'use client';
import CountUp from 'react-countup';

import { stats } from '../constants';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
          {stats.map((item, index) => {
            return (
              <div key={index}>
                <div className="border-2 border-white bg-cyan-600 w-[180px] h-[180px] mx-auto rounded-full p-1 mb-6 ">
                  <div
                    ref={ref}
                    className="border border-accent w-full h-full flex items-center justify-center  text-gray-200 text-5xl rounded-full "
                  >
                    {isInView && (
                      <CountUp start={0} end={item.number} duration={6} />
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                  <item.icon className="text-3xl text-white mb-2 " />
                  <h4 className="h4">{item.text}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
