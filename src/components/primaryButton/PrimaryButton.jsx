'use client'

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import style from "./PrimaryButton.module.css";
import { motion } from "framer-motion";
const PrimaryButton = ({ text }) => {
  return (
    <motion.button
      initial={{ visibility: "hidden", x: -300 }}
      whileInView={{ visibility: "visible", x: 0 }}
      exit={{ x: 300 }}
      transition={{ duration: 0.5 }}
      className={style.button}
    >
      <span>{text}</span>
      <span>
        <FaArrowRightLong />
      </span>
    </motion.button>
  );
};

export default PrimaryButton;
