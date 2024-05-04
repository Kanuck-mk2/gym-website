'use client';
import { useMediaQuery } from 'react-responsive';
import { navbarLinks } from '../constants';
import { Link as ScrollLink } from 'react-scroll';

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {

  const isMobile = useMediaQuery({
    query: '(max-width: 640px)',
  })


  return (
    <nav className={`${containerStyles}`}>
      {navbarLinks.map((link, index) => {
        return (
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
        );
      })}
    </nav>
  );
};

export default MobileNav;
