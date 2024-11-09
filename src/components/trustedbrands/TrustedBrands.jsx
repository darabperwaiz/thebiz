import React from 'react'
import style from './trustedBrand.module.css'
import GreenStar from "../../../public/assets/images/GreenStar.svg";
import WhiteStar from "../../../public/assets/images/WhiteStar.svg";
import google from '../../../public/assets/images/google.svg'
import yellowStar from '../../../public/assets/images/yellostar.svg'
import halfYellow from '../../../public/assets/images/halfYellow.svg'
import Image from "next/image";
import Motion from "../Motion/Motion";
import { delay } from "framer-motion";

const TrustedBrands = () => {
  return (
    <div className={style.right}>
      <Motion
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
      >
        <div className={style.trustpilot}>
          <div className={style.trustpilotHead}>
            <Image src={GreenStar} alt="green star" />
            <p>Trustpilot</p>
          </div>
          <div className={style.greenStar}>
            <div className={style.starRating}>
              <Image src={WhiteStar} alt="white star" />
            </div>
            <div className={style.starRating}>
              <Image src={WhiteStar} alt="white star" />
            </div>
            <div className={style.starRating}>
              <Image src={WhiteStar} alt="white star" />
            </div>
            <div className={style.starRating}>
              <Image src={WhiteStar} alt="white star" />
            </div>
            <div className={style.Halfstar}>
              <Image src={WhiteStar} alt="white star" />
            </div>
          </div>
          <div className={style.rating}>
            <p>Rated 4.5/5.0</p>
          </div>
        </div>
        </Motion>
        <Motion
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{delay: 0.2, duration: 0.5 }}
        >
        <div className={style.google}>
          <div className={style.gLeft}>
            <Image src={google} alt="google" />
            <div className={style.YStar}>
              <Image src={yellowStar} alt="yellow star" />
              <Image src={yellowStar} alt="yellow star" />
              <Image src={yellowStar} alt="yellow star" />
              <Image src={yellowStar} alt="yellow star" />
              <Image src={halfYellow} alt="half star" />
            </div>
          </div>
          <div className={style.gRight}>
            <p>Google</p>
            <p>average rating</p>
            <p>4.7</p>
          </div>
        </div>
        </Motion>
        <Motion
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{delay: 0.4, duration: 0.5 }}
        >
        <div className={style.clutch}>
          <Image src="/assets/images/clutch.webp" width={100} height={50} alt="" loading="lazy"/>
        </div>
        </Motion>
      </div>
  )
}

export default TrustedBrands
