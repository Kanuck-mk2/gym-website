import { Variants, TargetAndTransition } from 'framer-motion';

interface AnimationVariant extends Variants {
  hidden: TargetAndTransition;
  visible: TargetAndTransition;
}

export const fadeInUpVariant: AnimationVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const scaleVariant: AnimationVariant = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const staggerChildrenVariant: AnimationVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
