"use client"

import React from "react";
import style from "./Hero.module.css";
import PrimaryButton from "../primaryButton/PrimaryButton";
import { AnimatePresence, motion } from "framer-motion";
const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <motion.div className={style.heroContainer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          easings: ['easeIn', 'easeOut'], // smoother easing
        }}
        viewport={{ once: true, amount: 0.3 }}
        >
          <div className={style.header}>
          <h1>Best <span>web design </span> agency, <br /> and <span>digital marketing</span> service for your business growth!</h1>
          {/* <h2>CRAFT YOUR DIGITAL JOURNEY THE WAY YOU IMAGINE</h2> */}
          <p className={style.tagline}>&quot;<span>Accelerate Your Online Growth,</span> Get Your Website & Marketing Consultation Today!&quot;</p>
          </div>
          <PrimaryButton text={"Let's talk with me"} />
        </motion.div>
      </div>
    </div>

  );
};

export default Hero;
