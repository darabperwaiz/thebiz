

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollAnimationBox = ({children}) => {
  // useScroll provides the scrollY value, which tracks the vertical scroll position
  const { scrollY } = useScroll();

  // useTransform maps the scrollY position to opacity and translateY values
  const opacity = useTransform(scrollY, [0, 300], [0, 1]); // Fades in as you scroll down
  const translateY = useTransform(scrollY, [0, 300], [100, 0]); // Moves up as you scroll down

  return (
    <motion.div
      style={{
        opacity: opacity,                 // Applies the opacity transform
        y: translateY,                    // Applies the translateY transform
      }}
    >
      {/* Content goes here */}
      {children}
    </motion.div>
  );
};

export default ScrollAnimationBox;
