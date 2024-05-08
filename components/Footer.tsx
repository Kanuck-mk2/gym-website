'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

import CustomButton from './CustomButton';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { footer, footerItem } from '@/constants/animations';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);

  return (
    <footer className="bg-primary-300 pt-24">
      <div className="container mx-auto">
        <motion.div
          className="text-white grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-12"
          variants={footer}
          initial="hidden"
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="flex flex-col gap-4" variants={footerItem}>
            <Link href="#" className="flex flex-col items-start mb-7">
              <Image
                src={'/assets/img/logo2.png'}
                width={117}
                height={55}
                alt="logo"
              />
              <h2 className="text-center text-accent font-anta mt-[-40px]">
                PEAK FITNESS
              </h2>
            </Link>
            <p className="max-w-sm">Text</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Edmonton, Alberta</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>780.459.3383 / 587.994.1245</span>
              </li>
              <li>
                <Link className="flex items-center gap-4" href="#">
                  <FaEnvelope className="text-xl text-accent" />
                  <span>getfit@peak.ca</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Recent blog posts</h4>
            <div className="border-b border-dotted border-gray-400 flex-flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
            <div className="border-b border-dotted border-gray-400 flex-flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
            <div className="flex-flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
          </motion.div>
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent">Gallery</h4>
            <div className="flex flex-wrap gap-2">
              <Link href="#">
                <Image
                  src={'/assets/img/trainers/david2.jpg'}
                  width={100}
                  height={100}
                  alt="/"
                />
              </Link>
              <Link href="#">
                <Image
                  src={'/assets/img/trainers/Jay.jpg'}
                  width={100}
                  height={100}
                  alt="/"
                />
              </Link>
              <Link href="#">
                <Image
                  src={'/assets/img/trainers/Anya.jpg'}
                  width={100}
                  height={100}
                  alt="/"
                />
              </Link>
              <Link href="#">
                <Image
                  src={'/assets/img/trainers/rosy.jpg'}
                  width={100}
                  height={100}
                  alt="/"
                />
              </Link>
              <Link href="#">
                <Image
                  src={'/assets/img/trainers/david.jpg'}
                  width={100}
                  height={100}
                  alt="/"
                />
              </Link>
              <Link href="#">
                <Image
                  src={'/assets/img/trainers/matt.jpg'}
                  width={100}
                  height={100}
                  alt="/"
                />
              </Link>
              <Link href="#">
                <Image
                  src={'/assets/img/trainers/sofia.jpg'}
                  width={100}
                  height={100}
                  alt="/"
                />
              </Link>
              <Link href="#">
                <Image
                  src={'/assets/img/trainers/david2.jpg'}
                  width={100}
                  height={100}
                  alt="/"
                />
              </Link>
            </div>
          </motion.div>
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p>Text</p>
              <form className="flex items-center">
                <input
                  className="h-[50px] outline-none px-1 text-primary-300 rounded-sm"
                  type="text"
                  placeholder="Your email address"
                />
                <CustomButton
                  containerStyles="h-[50px] px-10 rounded-sm font-anta"
                  text="Sign Up"
                />
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="text-white border-t border-white/20 py-20 mt-14">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <span>&copy; Copyright {currentYear} PEAK Fitness </span>
            <ul className="flex gap-4 text-xl">
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
