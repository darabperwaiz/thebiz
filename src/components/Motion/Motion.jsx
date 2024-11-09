"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Motion = ({ children, initial, whileInView, exit, transition }) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      exit={exit}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
