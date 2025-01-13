import React from "react";
import style from "./trustedBrand.module.css";
import GreenStar from "../../../public/assets/images/GreenStar.svg";
import WhiteStar from "../../../public/assets/images/WhiteStar.svg";
import google from "../../../public/assets/images/google.svg";
import yellowStar from "../../../public/assets/images/yellostar.svg";
import halfYellow from "../../../public/assets/images/halfYellow.svg";
import Image from "next/image";
import Motion from "../Motion/Motion";
import { delay } from "framer-motion";

const TrustedBrands = () => {
  return (
    <div className={style.right}>
      <a href="https://www.trustpilot.com/review/appearisttechnology.com" target="_blank" rel="noopener noreferrer">
        <Image src="/assets/images/trustpilot.svg" width={180} height={100} loading="lazy"/>
      </a>
      <a href="https://www.google.com/maps/place/Appearist+Technology/@30.2977077,-97.7440827,17z/data=!3m1!4b1!4m6!3m5!1s0x8644b5c6ec41dd8d:0xfdcbab8157ed8bae!8m2!3d30.2977077!4d-97.7415078!16s%2Fg%2F11wj6f6s5c?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
        <Image
          src="/assets/images/google-rating.svg"
          width={180}
          height={100}
          loading="lazy"
        />
      </a>
      <a href="https://review.clutch.co/review/?provider_id=2429327" target="_blank" rel="noopener noreferrer">
        <Image
          src="/assets/images/clutch-review.svg"
          width={200}
          height={100}
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default TrustedBrands;
