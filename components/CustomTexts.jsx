// Import React
import React from 'react';
// Import framer-motion
import { motion } from 'framer-motion';
// Import animation variants
import { textContainer, textVariant2 } from '../utils/motion';

// TypingText Component
export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {/* Use Array.from to convert the string into an array */}
    {Array.from(title).map((letter, index) => (
      // Use motion.span for animated span elements
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

// TitleText Component
export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
