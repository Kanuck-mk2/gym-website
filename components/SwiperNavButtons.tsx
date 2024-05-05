'use client';

import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

const SwiperNavButtons = ({
  containerStyles,
  btnStyles,
  iconStyles,
}: {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={`${containerStyles}`}>
      <button className={`${btnStyles}`} type="button" title="/">
        <PiCaretLeftBold className={`${iconStyles}`} />
      </button>
      <button className={`${btnStyles}`} type="button" title="/">
        <PiCaretRightBold className={`${iconStyles}`} />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
