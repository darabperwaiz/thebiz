import React from "react";
// import img from '../../../assets/images/vector.svg'
import style from "./banner.module.css";
import TrustedBrands from "../trustedbrands/TrustedBrands";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}         // Starting state
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{opacity: 0, scale: 0.5}}       // Target state when in view
      transition={{ duration: 0.8, ease: "easeOut" }}
    className={style.banner}>
      <div className={style.left}>
        <p>Experience excellence with our top-notch digital services</p>
      </div>
      <TrustedBrands />
    </motion.div>
  );
};

export default Banner;
