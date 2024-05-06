'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/animations';
import CustomButton from './CustomButton';

import { classes } from '@/constants';

const Classes = () => {
  return (
    <section className="h-screen bg-green-300" id="classes">
      Classes
    </section>
  );
};

export default Classes;
