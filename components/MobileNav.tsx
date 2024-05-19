'use client';
import { useMediaQuery } from 'react-responsive';
import { navbarLinks } from '../constants';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/animations';

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)',
  });

  return (
    <motion.nav
    className={`${containerStyles} `}
    variants={fadeIn('down', 0.3)} 
    initial="parentHidden"
    animate='parentVisible'
    exit={'parentHidden'}
   
  >
      {navbarLinks.map((link, index) => {
        return (
          <motion.div
          key={index}
          variants={fadeIn('down', index * 0.5)}
          initial="childHidden"
          animate='childVisible'
        
        
        >
          <ScrollLink
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass={`${!isMobile && 'active'}`}
            className="cursor-pointer hover:text-accent transition-all"
            key={index}
          >
            {' '}
            {link.name}
          </ScrollLink>
          </motion.div>
        );
      })}
    </motion.nav>
  );
};

export default MobileNav;
