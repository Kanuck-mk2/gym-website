import { FaFacebook, FaTwitter, FaUsers, FaYoutube } from 'react-icons/fa';
import { IoIosPricetags } from 'react-icons/io';
import { FaDumbbell } from 'react-icons/fa';
import { FaBriefcase, FaClock, FaTrophy } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';
import type { IconType } from 'react-icons';

export interface NavbarLink {
  name: string;
  target: string;
  offset: number;
}

export const navbarLinks: NavbarLink[] = [
  { name: 'home', target: 'home', offset: -100 },
  { name: 'about', target: 'about', offset: -80 },
  { name: 'classes', target: 'class', offset: -80 },
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
    subtitle:
      'Our experienced and highly knowledgable trainers have trained a clients with various fitness levels',
  },
  {
    icon: IoIosPricetags,
    title: 'Excellent prices and perks',
    subtitle:
      'Our membership plans are afforable and provide plently of benefits',
  },
  {
    icon: FaDumbbell,
    title: 'Modern equipment and amentities',
    subtitle:
      'Our well maintained equipment and amenties are kept in top condition',
  },
];

export const stats: {
  number: number;
  icon: IconType;
  text: string;
}[] = [
  {
    number: 19,
    icon: FaBriefcase,
    text: 'training courses',
  },
  {
    number: 879,
    icon: FaClock,
    text: 'working hours',
  },
  {
    number: 250,
    icon: ImUsers,
    text: 'satisfied clients',
  },
  {
    number: 9,
    icon: FaTrophy,
    text: 'international awards',
  },
];

export const classes: {
  name: string;
  img: string;
  description: string;
}[] = [
  {
    name: 'bodybuilding',
    img: '/assets/img/classes/bodybuilding.jpg',
    description: 'text',
  },

  {
    name: 'cardio',
    img: '/assets/img/classes/cardio.jpg',
    description: 'text',
  },
  {
    name: 'fitness',
    img: '/assets/img/classes/fitness.jpg',
    description: 'text',
  },
  {
    name: 'crossfit',
    img: '/assets/img/classes/crossfit.jpg',
    description: 'text',
  },
];

interface TrainerSocial {
  icon: IconType;
  href: string;
}

export interface Trainer {
  name: string;
  image: string;
  role: string;
  description: string;
  social: TrainerSocial[];
}

export const trainerData: Trainer[] = [
  {
    name: 'David',
    image: '/assets/img/trainers/david.jpg',
    role: 'Bodybuilder coach',
    description: 'text',
    social: [
      { icon: FaFacebook, href: 'http://facebook.com' },
      { icon: FaTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
  {
    name: 'Matt',
    image: '/assets/img/trainers/matt.jpg',
    role: 'Bodybuilder coach',
    description: 'text',
    social: [
      { icon: FaFacebook, href: 'http://facebook.com' },
      { icon: FaTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
  {
    name: 'Rosy',
    image: '/assets/img/trainers/rosy.jpg',
    role: 'Bodybuilder coach',
    description: 'text',
    social: [
      { icon: FaFacebook, href: 'http://facebook.com' },
      { icon: FaTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },

  {
    name: 'Sofia',
    image: '/assets/img/trainers/sofia.jpg',
    role: 'Bodybuilder coach',
    description: 'text',
    social: [
      { icon: FaFacebook, href: 'http://facebook.com' },
      { icon: FaTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
];
