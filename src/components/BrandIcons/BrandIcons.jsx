import React from "react";
import style from './brandicons.module.css'
import Image from "next/image";
import ScrollAnimationBox from "../ScrollAnimationBox";

const BrandIcons = () => {
  return (
    <ScrollAnimationBox>
    <div className={style.brands}>
      <div className={style.brandIcons}>
        <Image src="/assets/images/brandIcons/logos_shopify.svg" width={100} height={100} alt="" loading="lazy"/>
        <Image src="/assets/images/brandIcons/wordpress.svg" width={100} height={100} alt="" loading="lazy"/>
        <Image src="/assets/images/brandIcons/logos_weebly.svg" width={100} height={100} alt="" loading="lazy"/>
        <Image src="/assets/images/brandIcons/logos_php.svg" width={100} height={100} alt="" loading="lazy"/>
        <Image src="/assets/images/brandIcons/devicon_javascript.svg" width={100} height={100} alt="" loading="lazy"/>
      </div>
      <div className={style.brandIcons}>
        <Image src="/assets/images/brandIcons/logos_css-3.svg" width={100} height={100} alt="" loading="lazy"/>
        <Image src="/assets/images/brandIcons/logos_html-5.svg" width={100} height={100} alt="" loading="lazy"/>
        <Image src="/assets/images/brandIcons/devicon_woocommerce-wordmark.svg" width={100} height={100} alt="" loading="lazy"/>
        <Image src="/assets/images/brandIcons/bxl_wix.svg" width={100} height={100} alt="" loading="lazy"/>
        <Image src="/assets/images/brandIcons/Vector.svg" width={100} height={100} alt="" loading="lazy"/>
      </div>
    </div>
    </ScrollAnimationBox>
  );
};

export default BrandIcons;
