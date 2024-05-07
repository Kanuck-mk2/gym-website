'use client';

import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './CustomButton';

import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/animations';
import { trainerData } from '@/constants';

const Team = () => {
  return (
    <section className="bg-black  lg:h-[130vh]" id="team">
      <div className="container mx-auto h-full flex flex-col items-center justify-evenly">
        <motion.h2
          className="text-4xl p-6"
          variants={fadeIn('up', 0.4)}
          initial="childHidden"
          whileInView={'childVisible'}
          viewport={{ once: false, amount: 0.2 }}
        >
          {' '}
          Our Trainers
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mr-9"
          variants={fadeIn('up', 0.6)}
          initial="childHidden"
          whileInView={'childVisible'}
          viewport={{ once: false, amount: 0.2 }}
        >
          {trainerData.map((trainer, index) => {
            return (
              <div
                className="flex flex-col items-center text-center"
                key={index}
              >
                <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                  <Image src={trainer.image} fill alt="/" />
                </div>
                <h4 className="h4 mb-2">{trainer.name}</h4>
                <p className="uppercase text-xs tracking-[3px] mb-2 text-gray-200">
                  {trainer.role}
                </p>
                <p className="mb-6 text-gray-200 max-w-[320px] mx-auto">
                  {trainer.description}
                </p>
                <div className="flex gap-12 justify-center">
                  {trainer.social.map((social, index) => {
                    return (
                      <div key={index}>
                        <Link href={social.href}>
                          <social.icon className="text-lg text-white hover:text-accent transition-all" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          className="py-12"
          variants={fadeIn('up', 0.8)}
          initial="childHidden"
          whileInView={'childVisible'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomButton
            containerStyles="w-[196px] h-[62px] rounded-full"
            text="See all trainers"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
