import { FaUsers } from 'react-icons/fa';
import { IoIosPricetags } from 'react-icons/io';
import { FaDumbbell } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface NavbarLink {
  name: string;
  target: string;
  offset: number;
}

export const navbarLinks: NavbarLink[] = [
  { name: 'home', target: 'home', offset: -100 },
  { name: 'about', target: 'about', offset: -80 },
  { name: 'classes', target: 'classes', offset: -80 },
  { name: 'team', target: 'team', offset: 0 },
  { name: 'prices', target: 'prices', offset: -40 },
  { name: 'testimonial', target: 'testimonial', offset: 0 },
  { name: 'blog', target: 'blog', offset: 0 },
  { name: 'contact', target: 'contact', offset: 0 },
];

export const featuredItems: {
  icon: IconType;
  title: string;
  subtitle: string;
}[] = [
  {
    icon: FaUsers,
    title: 'Award-winning trainers',
    subtitle: 'Text',
  },
  {
    icon: IoIosPricetags,
    title: 'Excellent prices',
    subtitle: 'Text',
  },
  {
    icon: FaDumbbell,
    title: 'Modern equipment and amentities',
    subtitle: 'Text',
  },
];
