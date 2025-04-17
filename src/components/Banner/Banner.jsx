import React from "react";
// import img from '../../../assets/images/vector.svg'
import style from "./banner.module.css";
import TrustedBrands from "../trustedbrands/TrustedBrands";
import { AnimatePresence, motion } from "framer-motion";
import ScrollAnimationBox from "../ScrollAnimationBox";
const Banner = () => {
  return (

    <ScrollAnimationBox>
    <div className={style.banner}>
      <div className={style.left}>
        <p>Experience excellence with our top-notch digital services</p>
      </div>
      <TrustedBrands />
    </div>
    </ScrollAnimationBox>
  );
};

export default Banner;
