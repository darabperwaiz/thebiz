import React from "react";
import style from "./ourclients.module.css";
import Image from "next/image";
import {motion} from 'framer-motion'

const OurClients = () => {
  return (
    <div className={style.ourClients}>
      <motion.p className={style.title}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        easings: ['easeIn', 'easeOut'], // smoother easing
      }}
      viewport={{ amount: 0.8 }}
      >
        Our <span>Clients</span>
      </motion.p>
      <div className={style.icons}>
        <div className={style.icon}>
          <Image
            src="/assets/images/clientsIcon/Eileen-Rouse-Logo.webp"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className={style.icon}>
          <Image
            src="/assets/images/clientsIcon/phlebo.co_ 1.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className={style.icon}>
          <Image
            src="/assets/images/clientsIcon/logo-e16710445489801.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className={style.icon}>
          <Image
            src="/assets/images/clientsIcon/qtq_95 1.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className={style.icon}>
          <Image
            src="/assets/images/clientsIcon/Printable-file_edited 1.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className={style.icon}>
          <Image
            src="/assets/images/clientsIcon/glamour.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className={style.icon}>
          <Image
            src="/assets/images/clientsIcon/yogshala.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default OurClients;
