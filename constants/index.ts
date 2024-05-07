import {
  FaCheck,
  FaFacebook,
  FaTwitter,
  FaUsers,
  FaYoutube,
} from 'react-icons/fa';
import { IoIosPricetags } from 'react-icons/io';
import { FaDumbbell } from 'react-icons/fa';
import { FaBriefcase, FaClock, FaTrophy } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';
import type { IconType } from 'react-icons';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-scroll';

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
    img: '/assets/img/classes/bodybuilder.jpg',
    description: 'Strength training and muscle development.',
  },
  {
    name: 'cardio',
    img: '/assets/img/classes/cardio2.jpg',
    description: 'Heart-pumping workouts for cardiovascular health.',
  },
  {
    name: 'inclusive fitness',
    img: '/assets/img/classes/infit.jpg',
    description: 'Fitness for all levels and abilities.',
  },
  {
    name: 'crossfit',
    img: '/assets/img/classes/crossfit2.jpg',
    description: 'High-intensity functional training.',
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
    image: '/assets/img/trainers/david2.jpg',
    role: 'Bodybuilder coach',
    description: 'David is a professional bodybuilder coach with extensive experience and a passion for sculpting physiques. With personalized training programs and expert guidance, David helps clients achieve their fitness goals effectively.',
    social: [
      { icon: FaFacebook, href: 'http://facebook.com' },
      { icon: FaTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
  {
    name: 'Jay',
    image: '/assets/img/trainers/Jay.jpg',
    role: 'Professional Trainer',
    description: 'Jay is a professional trainer known for his dynamic approach and personalized training methods. With Jays guidance, clients achieve remarkable results and surpass their fitness goals.',
    social: [
      { icon: FaFacebook, href: 'http://facebook.com' },
      { icon: FaTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
  {
    name: 'Anya',
    image: '/assets/img/trainers/anya.jpg',
    role: 'Fitness Expert',
    description: 'Anya is a renowned fitness expert with a holistic approach to fitness. Her training programs focus on physical strength, mental well-being, and nutritional balance, helping clients achieve optimal health and wellness.',
    social: [
      { icon: FaFacebook, href: 'http://facebook.com' },
      { icon: FaTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
];


interface benefits {
  icon: IconType;
  text: string;
}

export interface membershipData {
  title: string;
  price: number;
  benefits: benefits[];
}

export const membershipData = [
  {
    title: 'Standard',
    price: 24.99,
    benefits: [
      {
        icon: FaCheck,
        text: 'Includes membership',
      },
      {
        icon: FaCheck,
        text: 'text',
      },
      {
        icon: MdClose,
        text: 'Diet plan included',
      },
      {
        icon: FaCheck,
        text: 'text',
      },
      {
        icon: MdClose,
        text: '24 hour access (6am-10pm for standard members)',
      },
      {
        icon: FaCheck,
        text: 'Full Access',
      },
      {
        icon: MdClose,
        text: 'No additional amenities',
      },
      {
        icon: MdClose,
        text: 'Coaching Sessions ( 5 free coaching session for new members)',
      },
    ],
  },
  {
    title: 'Ultimate',
    price: 54.99,
    benefits: [
      {
        icon: FaCheck,
        text: 'Includes membership',
      },
      {
        icon: FaCheck,
        text: 'Access to all gym facilities',
      },
      {
        icon: FaCheck,
        text: 'Diet plan included',
      },
      {
        icon: FaCheck,
        text: 'text',
      },
      {
        icon: FaCheck,
        text: '24 hour access',
      },
      {
        icon: FaCheck,
        text: 'Full Access',
      },
      {
        icon: MdClose,
        text: 'No additional amenities',
      },
      {
        icon: FaCheck,
        text: 'Coaching Sessions (5 sessions per month for Ultimate Members)',
      },
    ],
  },
  {
    title: 'Professional',
    price: 99.99,
    benefits: [
      {
        icon: FaCheck,
        text: 'Includes membership',
      },
      {
        icon: FaCheck,
        text: 'Access to all gym facilities',
      },
      {
        icon: FaCheck,
        text: 'Diet plan included',
      },
      {
        icon: FaCheck,
        text: 'text',
      },
      {
        icon: FaCheck,
        text: '24 hour access',
      },
      {
        icon: FaCheck,
        text: 'Full Access',
      },
      {
        icon: FaCheck,
        text: 'No additional amenities',
      },
      {
        icon: FaCheck,
        text: 'Coaching Sessions (12 sessions per month for Pro Members)',
      },
    ],
  },
];
interface testimonialData {
  img: string;
  message: string;
  name: string;
}
export const testimonialData = [
  {
    img: '/assets/img/testimonial/Alex.jpg',
    message: 'Peak Gym helped me smash my fitness goals!',
    name: 'Alex Nguyen',
  },
  {
    img: '/assets/img/testimonial/Alia.jpg',
    message: 'I love Peak Gym! The trainers are fantastic!',
    name: 'Alia Lopez',
  },
  {
    img: '/assets/img/testimonial/Colin.jpg',
    message: 'Peak Gym is amazing! The facilities are top-notch.',
    name: 'Kevin Lee',
  },
  {
    img: '/assets/img/testimonial/Serena.jpg',
    message: 'Peak Gym is my go-to place for fitness. Highly recommend!',
    name: 'Serena Adewale',
  },
  {
    img: '/assets/img/testimonial/Ryan.jpg',
    message: 'Peak Gym has transformed my fitness journey. Love it!',
    name: 'Liam Williams',
  },
  {
    img: '/assets/img/testimonial/Zak.jpg',
    message: 'Peak Gym rocks! The trainers are awesome!',
    name: 'Zak Rhode',
  },
];


interface blogData {
  img: string;
  date: string;
  title: string;
  href: string;
}

export const blogData = [
  {
    img: '/assets/img/blog/post1.jpg',
    date: 'March 10, 2024',
    title: 'Overtraining facts and myths',
    href: '/',
  },
  {
    img: '/assets/img/blog/post5.jpg',
    date: 'Feburary 23, 2024',
    title: 'A revoltuion takes a spin',
    href: '/',
  },
  {
    img: '/assets/img/blog/post2.jpg',
    date: 'February 12, 2024',
    title: 'Programming your goals',
    href: '/',
  },
  {
    img: '/assets/img/blog/post3.jpg',
    date: 'January 30, 2024',
    title: 'The idea of fitness as we age',
    href: '/',
  },
  {
    img: '/assets/img/blog/post4.jpg',
    date: 'January 18, 2024',
    title: 'Exploring protein',
    href: '/',
  },
  {
    img: '/assets/img/blog/post6.jpg',
    date: 'December 20, 2023',
    title: 'Nutrition for girls who lift',
    href: '/',
  },
  {
    img: '/assets/img/blog/post7.jpg',
    date: 'March 10, 2024',
    title: 'Adaptive Training and overcoming limits',
    href: '/',
  },
  {
    img: '/assets/img/blog/post2.jpg',
    date: 'March 10, 2024',
    title: 'text',
    href: '/',
  },
];

interface brandImages{
  src: string;
  href: string;
}

export const brandImages = [
  {
    src: '/assets/img/brands/brand-1.png',
    href: '',
  },
  {
    src: '/assets/img/brands/brand-2.png',
    href: '',
  },
  {
    src: '/assets/img/brands/brand-3.png',
    href: '',
  },
  {
    src: '/assets/img/brands/brand-4.png',
    href: '',
  },
  {
    src: '/assets/img/brands/brand-5.png',
    href: '',
  },
]
