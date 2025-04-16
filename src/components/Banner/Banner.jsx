import React from "react";
// import img from '../../../assets/images/vector.svg'
import style from "./banner.module.css";
import TrustedBrands from "../trustedbrands/TrustedBrands";
import { AnimatePresence, motion } from "framer-motion";
const Banner = () => {
  return (

    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      easings: ['easeIn', 'easeOut'], // smoother easing
    }}
    viewport={{ amount: 0.8 }}
    className={style.banner}>
      <div className={style.left}>
        <p>Experience excellence with our top-notch digital services</p>
      </div>
      <TrustedBrands />
    </motion.div>
  );
};

export default Banner;
