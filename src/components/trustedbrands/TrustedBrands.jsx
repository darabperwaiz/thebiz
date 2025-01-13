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
        <a href="https://www.trustpilot.com/review/appearisttechnology.com" target="_blank" rel="noopener noreferrer" className={style.trustpilot}>
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
        </a>
        </Motion>
        <Motion
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{delay: 0.2, duration: 0.5 }}
        >
        <a href="https://www.google.com/maps/place/Appearist+Technology/@30.2977077,-97.7440827,17z/data=!3m1!4b1!4m6!3m5!1s0x8644b5c6ec41dd8d:0xfdcbab8157ed8bae!8m2!3d30.2977077!4d-97.7415078!16s%2Fg%2F11wj6f6s5c?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={style.google}>
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
        </a>
        </Motion>
        <Motion
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{delay: 0.4, duration: 0.5 }}
        >
        <a href="https://review.clutch.co/review/?provider_id=2429327" target="_blank" rel="noopener noreferrer" className={style.clutch}>
          <Image src="/assets/images/clutch.webp" width={100} height={50} alt="" loading="lazy"/>
        </a>
        </Motion>
      </div>
  )
}

export default TrustedBrands
