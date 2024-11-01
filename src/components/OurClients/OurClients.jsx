import React from "react";
import style from "./ourclients.module.css";
import Image from "next/image";

const OurClients = () => {
  return (
    <div className={style.ourClients}>
      <p className={style.title}>
        Our <span>Clients</span>
      </p>
      <div className={style.icons}>
        <div className={style.icon}>
          <Image
            src="/assets/images/clientsIcon/Eileen-Rouse-Logo.webp"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className={style.icon}>
          <Image
            src="/assets/images/clientsIcon/phlebo.co_ 1.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className={style.icon}>
          <Image
            src="/assets/images/clientsIcon/logo-e16710445489801.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className={style.icon}>
          <Image
            src="/assets/images/clientsIcon/qtq_95 1.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className={style.icon}>
          <Image
            src="/assets/images/clientsIcon/Printable-file_edited 1.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className={style.icon}>
          <Image
            src="/assets/images/clientsIcon/glamour.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className={style.icon}>
          <Image
            src="/assets/images/clientsIcon/yogshala.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default OurClients;
