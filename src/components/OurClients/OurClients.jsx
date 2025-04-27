import React from "react";
import style from "./ourclients.module.css";
import Image from "next/image";
import {motion} from 'framer-motion'
import ScrollAnimationBox from "../ScrollAnimationBox";
import { Scroll } from "@react-three/drei";

const OurClients = () => {
  return (
    <div className={style.ourClients}>
      <ScrollAnimationBox>
      <p className={style.title}>
        Our <span>Clients</span>
      </p>
      </ScrollAnimationBox>
      <div className={style.icons}>
        <ScrollAnimationBox>
        <div className={style.icon}>
          <Image
            src="/assets/images/clientsIcon/Eileen-Rouse-Logo.webp"
            alt=""
            width={500}
            height={500}
          />
        </div>
        </ScrollAnimationBox>
        <ScrollAnimationBox>
        <div className={style.icon}>
          <Image
            src="/assets/images/clientsIcon/phlebo.co_ 1.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
        </ScrollAnimationBox>
        <ScrollAnimationBox>
        <div className={`${style.icon} ${style.icon3}`}>
          <Image
            src="/assets/images/clientsIcon/logo-e16710445489801.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
        </ScrollAnimationBox>
        <ScrollAnimationBox>
        <div className={style.icon}>
          <Image
            src="/assets/images/clientsIcon/qtq_95 1.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
        </ScrollAnimationBox>
        <ScrollAnimationBox>
        <div className={`${style.icon} ${style.icon5}`}>
          <Image
            src="/assets/images/clientsIcon/Printable-file_edited 1.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
        </ScrollAnimationBox>
        <ScrollAnimationBox>
        <div className={`${style.icon} ${style.icon6}`}>
          <Image
            src="/assets/images/clientsIcon/glamour.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
        </ScrollAnimationBox>
        <ScrollAnimationBox>
        <div className={style.icon}>
          <Image
            src="/assets/images/clientsIcon/yogshala.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
        </ScrollAnimationBox>
      </div>
    </div>
  );
};

export default OurClients;
