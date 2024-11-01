"use client"

import Image from "next/image";
// import PrimaryButton from "../../../Reusable/PrimaryButton"
import style from "./banner2.module.css";
import PrimaryButton from "../primaryButton/PrimaryButton";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }} // Initial state (offscreen and hidden)
      whileInView={{ x: 0, opacity: 1 }} // Target state when in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
      viewport={{ once: true, amount: 0.5 }} // Trigger animation once, when 20% of the box is in view
      className={style.banner2}
    >
      <div className={style.gradient}>
        <div className={style.left}>
          <p className={style.title}>
            Enhance your business with the most advanced technological solutions
            available.
          </p>
          <p className={style.des}>
            8+ years of building digital products and we are just getting
            started
          </p>
          <PrimaryButton text="Let's talk with me" />
        </div>
        <div className={style.right}>
          <Image
            className={style.halfCircle}
            src="/assets/images/halfCircle.svg"
            width={100}
            height={100}
            alt=""
          />
          <div className={style.imgBox}>
            <Image
              src="/assets/images/man.webp"
              alt=""
              width={280}
              height={350}
            />
          </div>
          <Image
            className={style.google}
            src="/assets/images/g.svg"
            alt=""
            width={100}
            height={100}
          />
          <Image
            className={style.slack}
            src="/assets/images/slack.svg"
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Banner2;
