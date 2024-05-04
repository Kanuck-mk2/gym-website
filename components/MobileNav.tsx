'use client';
import { navbarLinks } from '../constants';
import { Link as ScrollLink } from 'react-scroll';

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <nav className={`${containerStyles}`}>
      {navbarLinks.map((link, index) => {
        return (
          <ScrollLink
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass="active"
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
