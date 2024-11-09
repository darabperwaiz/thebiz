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
          initial={{visibility: "hidden", x: -300}}
          whileInView={{visibility: "visible", x: 0}}
          transition={{duration: 0.5}}
          exit={{x: 300}}
          >THE BIZ TECHNOLOGY</motion.h1>
          <motion.h2
          initial={{visibility: "hidden", x: 300}}
          whileInView={{visibility: "visible", x: 0}}
          transition={{duration: 0.5}}
          exit={{x: -300}}
          >WHERE INNOVATION MEETS ENTERPRISE SOLUTIONS</motion.h2>
          </div>
          <motion.p
          initial={{visibility: "hidden", y: 300}}
          whileInView={{visibility: "visible", y: 0}}
          transition={{duration: 0.5}}
          exit={{y: -300}}
          >&quot;<em><b>Accelerate Your Online Growth,</b></em> Get Your Free Website & Marketing Consultation Today!&quot;
          </motion.p>
          <PrimaryButton text={"Let's talk with me"} />
        </div>
      </div>
    </div>
    </AnimatePresence>
  );
};

export default Hero;
