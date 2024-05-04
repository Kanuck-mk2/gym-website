'use client';

import Link from 'next/link';
import MobileNav from './MobileNav';
import Nav from './Nav';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        headerActive ? 'h-[100px]' : 'h-[124px]'
      } fixed max-w-[1920px] top-0 left-0 right-0 w-full bg-primary-200 h-[100px] transition-all z-50`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href="">
          <Image
            src={'/assets/img/logo2.png'}
            width={117}
            height={55}
            alt="logo"
          />
        </Link>

        <MobileNav
          containerStyles=" flex flex-col  text-center gap-8 fixed bg-primary-200 w-full left-0 
         top-[124px] text-base uppercase  font-medium  text-white lg:hidden"
        />
        <Nav containerStyles=" flex gap-4 text-white lg:flex sm:hidden " />
      </div>
    </header>
  );
};

export default Header;
