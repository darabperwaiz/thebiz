"use client"

import React from "react";
import style from "./Hero.module.css";
import PrimaryButton from "../primaryButton/PrimaryButton";
import { easeInOut, motion } from "framer-motion";
const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.heroContainer}>
          <div className={style.header}>
          <motion.h1
          initial = {{translateX: "-900px"}}
          animate = {{translateX: 0}}
          transition={{duration: 0.5, ease: easeInOut}}
          >THE BIZ TECHNOLOGY</motion.h1>
          <motion.h2
          initial = {{opacity: 0}}
          animate = {{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.5, ease: easeInOut}}
          >WHERE INNOVATION MEETS ENTERPRISE SOLUTIONS</motion.h2>
          </div>
          <motion.p 
          initial= {{translateY: '700px'}}
          animate = {{translateY: 0}}
          exit={{translateY: '700px'}}
          className={style.tagline}>
            "<em><b>Accelerate Your Online Growth,</b></em> Get Your Free Website & Marketing Consultation Today!"
          </motion.p>
          <PrimaryButton text={"Let's talk with me"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
