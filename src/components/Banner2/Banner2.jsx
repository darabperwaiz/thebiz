"use client"

import Image from "next/image";
// import PrimaryButton from "../../../Reusable/PrimaryButton"
import style from "./banner2.module.css";
import PrimaryButton from "../primaryButton/PrimaryButton";
import { AnimatePresence, motion } from "framer-motion";

const Banner2 = () => {
  return (
    <AnimatePresence>
    <div className={style.banner2}>
      <div className={style.gradient}>
        <div className={style.left}>
          <motion.p
          initial={{opacity: 0, x: -100}}
          whileInView={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: 100}}
          transition={{duration: 0.9}}
          className={style.title}>
            Enhance your business with the most advanced technological solutions
            available.
          </motion.p>
          <motion.p
          initial={{opacity: 0, x: -100}}
          whileInView={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: 100}}
          transition={{duration: 0.9}}
          className={style.des}>
            8+ years of building digital products and we are just getting
            started
          </motion.p>
          <PrimaryButton text="Let's talk with me" />
        </div>
        <motion.div className={style.right}>
          <Image
            className={style.halfCircle}
            src="/assets/images/halfCircle.svg"
            width={100}
            height={100}
            alt=""
          />
          <div className={style.imgBox}>
            <motion.div
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -100}}
            transition={{duration: 0.9}}
            >
            <Image
              src="/assets/images/man.webp"
              alt=""
              width={280}
              height={350}
            />
            </motion.div>
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
        </motion.div>
      </div>
    </div>
    </AnimatePresence>
  );
};

export default Banner2;
