'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/animations';
import MembershipSlider from './MembershipSlider';

const Membership = () => {
  return (
    <motion.section
      id="prices"
      className="py-8 xl:py-0 lg:h-[195vh] bg-membership bg-cover bg-center 
      relative before:w-full before:h-full before:bg-black/50 before:absolute before:top-0 before:z-10"
      variants={fadeIn('up', 0.2)}
      initial="childHidden"
      whileInView={'childVisible'}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto px-0 text-white h-full flex flex-col lg:pt-24 relative z-20">
        <motion.h2
          className="h2 text-white text-center mb-8"
          variants={fadeIn('up', 0.4)}
          initial="childHidden"
          whileInView={'childVisible'}
          viewport={{ once: false, amount: 0.2 }}
        >
          Membership Plans and Benefits
        </motion.h2>
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="childHidden"
          whileInView={'childVisible'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <MembershipSlider />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Membership;
