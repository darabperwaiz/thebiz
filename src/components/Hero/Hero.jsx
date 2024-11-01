"use client"

import React from "react";
import style from "./Hero.module.css";
import PrimaryButton from "../primaryButton/PrimaryButton";
const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.heroContainer}>
          <div className={style.header}>
          <h1>THE BIZ TECHNOLOGY</h1>
          <h2>WHERE INNOVATION MEETS ENTERPRISE SOLUTIONS</h2>
          </div>
          <p>&quot;<em><b>Accelerate Your Online Growth,</b></em> Get Your Free Website & Marketing Consultation Today!&quot;
          </p>
          <PrimaryButton text={"Let's talk with me"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
