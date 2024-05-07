'use client';

import { brandImages } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { brand, item } from '@/constants/animations';

const Brands = () => {
  return (
    <section className=" bg-about py-8" id="contact">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-5 py-8"
          variants={brand}
          initial="hidden"
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.3 }}
        >
          {brandImages.map((img, index) => {
            return (
              <motion.div key={index} variants={item}>
                <Link className="group" href={img.href}>
                  <Image
                    className="opacity-80 group-hover:opacity-100 transition-all mx-auto"
                    src={img.src}
                    width={204}
                    height={106}
                    alt="/"
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
