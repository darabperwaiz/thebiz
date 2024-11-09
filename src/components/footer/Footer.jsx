'use client'

import React from "react";
import style from "./footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const Footer = () => {
  return (
    <AnimatePresence>
    <section className={style.footer}>
      <div className="container">
        <div>
        <div className={style.footerWrapper}>
          <div className={style.left}>
            <motion.div
            initial={{opacity: 0, y: -200}}
            whileInView={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 200}}
            transition={{duration: 0.5}}
            className={style.logo}>
              <Image src="/assets/images/logo.webp" width={126} height={88} alt="" />
            </motion.div>
            <motion.p
            initial={{opacity: 0, x: -200}}
            whileInView={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -200}}
            transition={{duration: 0.5}}
            className={style.paragraph}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </motion.p>
            <div className={style.socialIcons}>
              <motion.div
              initial={{opacity: 0, x: -200}}
              whileInView={{opacity: 1, x: 0}}
              exit={{opacity: 0, x: 200}}
              transition={{delay: 0.6, duration: 0.5}}
              className={style.icon}>
                <FaFacebookF style={{ color: "#4285F4" }} />
              </motion.div>
              <motion.div
              initial={{opacity: 0, x: -200}}
              whileInView={{opacity: 1, x: 0}}
              exit={{opacity: 0, x: 200}}
              transition={{delay: 0.4, duration: 0.5}}
              className={style.icon}>
                <FaTwitter style={{ color: "#229BF2" }} />
              </motion.div>
              <motion.div
              initial={{opacity: 0, x: -200}}
              whileInView={{opacity: 1, x: 0}}
              exit={{opacity: 0, x: 200}}
              transition={{delay: 0.2, duration: 0.5}}
              className={style.icon}>
                <div className={style.insta}>
                  <FaInstagram
                    style={{
                      background:
                        "linear-gradient(270deg, #FFB147 5.74%, #FF6C63 50.64%, #B86ADF 92.05%)",
                      borderRadius: "3px",
                      WebkitTextFillColor: 'transparent'
                    }}
                  />
                </div>
              </motion.div>
              <motion.div
              initial={{opacity: 0, x: -200}}
              whileInView={{opacity: 1, x: 0}}
              exit={{opacity: 0, x: 200}}
              transition={{duration: 0.5}}
              className={style.icon}>
                <FaYoutube style={{ color: "#D80027" }} />
              </motion.div>
            </div>
          </div>
          <motion.div
          initial={{opacity: 0, y: -200}}
          whileInView={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: 200}}
          transition={{duration: 0.5}}
          className={style.quickLinks}>
            <p>Quick Links</p>
            <div className={style.links}>
              <Link href="#">Site Map</Link>
              <Link href="#">Terms and conditions</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Refund Policy</Link>
              <Link href="#">FAQ</Link>
              <Link href="#">Portfolio</Link>
            </div>
          </motion.div>
          <motion.div
          initial={{opacity: 0, y: -200}}
          whileInView={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: 200}}
          transition={{delay: 0.2, duration: 0.5}}
          className={style.quickLinks}>
            <p>Hire Dedicated Expert</p>
            <div className={style.links}>
              <Link href="#">Sr. Website dev manager</Link>
              <Link href="#">Sr. Graphic Designer</Link>
              <Link href="#">Sr. Digital Marketing Manager</Link>
            </div>
          </motion.div>
          <motion.div
          initial={{opacity: 0, y: -200}}
          whileInView={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: 300}}
          transition={{delay: 0.4, duration: 0.5}}
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
          </motion.div>
        </div>
        <div className={style.copyright}>
          <span>&#169;</span>Copyright TheBiztechnology. All right reserved
        </div>
        </div>
      </div>
    </section>
    </AnimatePresence>
  );
};

export default Footer;
