"use client"

import React from "react";
import style from "./Hero.module.css";
import PrimaryButton from "../primaryButton/PrimaryButton";
import { AnimatePresence, motion } from "framer-motion";
const Hero = () => {
  return (
    <AnimatePresence>
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.heroContainer}>
          <div className={style.header}>
          <motion.h1
          initial={{visibility: "hidden", x: -100}}
          whileInView={{visibility: "visible", x: 0}}
          transition={{duration: 0.9}}
          exit={{x: 100}}
          >APPEARIST TECHNOLOGY</motion.h1>
          <motion.h2
          initial={{visibility: "hidden", x: 100}}
          whileInView={{visibility: "visible", x: 0}}
          transition={{duration: 0.9}}
          exit={{x: -100}}
          >CRAFT YOUR DIGITAL JOURNEY THE WAY YOU IMAGINE</motion.h2>
          </div>
          <motion.p
          initial={{visibility: "hidden", opacity: 0}}
          whileInView={{visibility: "visible", opacity: 1}}
          transition={{duration: 0.9}}
          exit={{visibility: "hidden", opacity: 0}}
          >&quot;Best web design agency and digital marketing service for your business growth!&quot;
          </motion.p>
          <PrimaryButton text={"Let's talk with me"} />
        </div>
      </div>
    </div>
    </AnimatePresence>
  );
};

export default Hero;
