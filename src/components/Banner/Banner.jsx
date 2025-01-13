import React from "react";
// import img from '../../../assets/images/vector.svg'
import style from "./banner.module.css";
import TrustedBrands from "../trustedbrands/TrustedBrands";
import { AnimatePresence, motion } from "framer-motion";
const Banner = () => {
  return (
    <AnimatePresence>
    <motion.div 
    initial={{opacity: 0, scale: 0.6}}
    whileInView={{opacity: 1, scale: 1}}
    exit={{opacity: 0, scale: 0.6}}
    transition={{duration: 0.9}}
    className={style.banner}>
      <div className={style.left}>
        <p>Experience excellence with our top-notch digital services</p>
      </div>
      <TrustedBrands />
    </motion.div>
    </AnimatePresence>
  );
};

export default Banner;
