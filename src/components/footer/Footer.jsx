'use client'

import React from "react";
import style from "./footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ScrollAnimationBox from "../ScrollAnimationBox";

const Footer = () => {
  return (
    <section className={style.footer}>
      <div className="container">
        <div>
          <ScrollAnimationBox delay={0.5}>
        <div className={style.footerWrapper}>
          <div className={style.left}>
            <div
            
            className={style.logo}>
              <Image src="/assets/images/logo.webp" width={126} height={88} alt="" />
            </div>
            <p
            className={style.paragraph}>
              Appearist Technology LLC has been empowering businesses for 8+ years with expert solutions in web development, digital marketing, and mobile apps, fostering growth, innovation, and lasting partnerships
            </p>
            <div className={style.socialIcons}>
              <div
              
              className={style.icon}>
                <FaFacebookF style={{ color: "#4285F4" }} />
              </div>
              <div
             
              className={style.icon}>
                <FaTwitter style={{ color: "#229BF2" }} />
              </div>
              <div
             
              className={style.icon}>
                <div className={style.insta}>
                  <FaInstagram />
                </div>
              </div>
              <div
              
              className={style.icon}>
                <FaYoutube style={{ color: "#D80027" }} />
              </div>
            </div>
          </div>
          <div
          
          className={style.quickLinks}>
            <p>Quick Links</p>
            <div className={style.links}>
              <Link href="#">Site Map</Link>
              <Link href="#">Terms and conditions</Link>
              <Link href="#">Blog</Link>
              <Link href="#">FAQ</Link>
              <Link href="#">Portfolio</Link>
            </div>
          </div>
          <div
          
          className={style.quickLinks}>
            <p>Hire Dedicated Expert</p>
            <div className={style.links}>
              <Link href="#">Sr. Website Dev Manager</Link>
              <Link href="#">Sr. Graphic Designer</Link>
              <Link href="#">Sr. Digital Marketing Manager</Link>
            </div>
          </div>
          <div
         
          className={style.quickLinks}>
            <p>Our Offices</p>
            <div className={style.links}>
              <div className={style.addressWrapper}>
                <div className={style.address}>
                  <p>USA</p>
                  <div className={style.location}>
                    <p><MdOutlineLocationOn style={{color: '#5840FF', fontSize: '16px'}}/> 27 Division St, New York, NY</p>
                    <p><BsTelephone style={{color: '#5840FF', fontSize: '16px'}}/> +1(190) 122-8293</p>
                  </div>
                </div>
                <div className={style.address}>
                  <p>India</p>
                  <div className={style.location}>
                    <p><MdOutlineLocationOn style={{color: '#5840FF', fontSize: '16px'}} /> 27 Division St, New York, NY</p>
                    <p><BsTelephone style={{color: '#5840FF', fontSize: '16px'}}/> +1(190) 122-8293</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.pGetway}>
              <Image src="/assets/images/pGatewayIcons/paypal.svg" width={30} height={30} alt="" />
              <Image src="/assets/images/pGatewayIcons/stripe.svg" width={30} height={30} alt="" />
              <Image src="/assets/images/pGatewayIcons/visa.svg" width={30} height={30} alt="" />
              <Image src="/assets/images/pGatewayIcons/mastercard.svg" width={30} height={30} alt="" />
            </div>
          </div>
        </div>
        </ScrollAnimationBox>
        <div className={style.copyright}>
          <span>&#169;</span>Copyright Appearist Technology LLC. All right reserved
        </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
