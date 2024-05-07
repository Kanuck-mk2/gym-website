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
    <section className="bg-black py-12 lg:h-[110vh] " id="team">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <h2 className="text-4xl"> Our Trainers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-6">
          {trainerData.map((trainer, index) => {
            return (
              <div key={index}>
                <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                  <Image src={trainer.image} fill alt="/" />
                </div>
                <h4>{trainer.name}</h4>
                <p>{trainer.role}</p>
                <p>{trainer.description}</p>
                <div>
                  {trainer.social.map((social, index) => {
                    return (
                      <div key={index}>
                        <Link href={social.href}>
                          <social.icon className="text-lg text-white" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
