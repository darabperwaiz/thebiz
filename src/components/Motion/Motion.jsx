"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Motion = ({ children}) => {
  return (
    <motion.div
    style={{width: '100%'}}
    initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.7,
      easings: ['easeIn', 'easeOut'], // smoother easing
    }}
    viewport={{ amount: 0.5, once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
