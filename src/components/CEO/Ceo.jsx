"use client"

import React from 'react'
import style from './ceo.module.css'
import Image from "next/image"
import { LearnMoreBtn } from "../learnMoreBtn/LearnMoreBtn"
import { motion } from "framer-motion"

const Ceo = () => {
  return (
    <div className={style.ceo}>
      <div className={style.left}>
        <motion.div
        initial={{opacity: 0, scale: 0.1}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{ duration: 0.3, ease: "easeOut" }} // Animation duration and easing
      viewport={{ once: true, amount: 0.5 }}
        className={style.curve}></motion.div>
        <motion.div
        initial={{rotate: 190, opacity: 0}}
        whileInView={{rotate: 0, opacity: 1}}
        transition={{ duration: 0.3, ease: "easeOut" }} // Animation duration and easing
      viewport={{ once: true, amount: 0.5 }}
        
        className={style.ceoImage}>
            <Image src="/assets/images/ceo_image.webp" width={210} height={300} alt="" />
        </motion.div>
        <div className={style.leftLeft}>
            <div className={style.title}>
                <motion.p
                initial={{rotate: 60, opacity: 0}}
                whileInView={{rotate: 0, opacity: 1}}
                transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
      viewport={{ once: true, amount: 0.5 }}
                
                >KAMRAN</motion.p>
                <motion.p
                initial={{rotate: -60, opacity: 0}}
                whileInView={{rotate: 0, opacity: 1}}
                transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
      viewport={{ once: true, amount: 0.5 }}
                >ASHRAF</motion.p>
            </div>
            <motion.p
            initial={{x:100, opacity: 0}}
            animate={{x:0, opacity: 1}}
            className={style.tag}>Founder and CEO</motion.p>
        </div>
      </div>
      <motion.div
       initial={{ x: 300, opacity: 0 }} // Initial state (offscreen and hidden)
       whileInView={{ x: 0, opacity: 1 }} // Target state when in view
       transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
       viewport={{ once: true, amount: 0.5 }}
      className={style.right}>
        <p>A Message From CEO</p>
        <div className={style.mid}>
            <Image className={style.quote} src="/assets/images/quoteLeft.svg" width={31} height={31} alt="" />
            <p>The Biz Technology, our mission is clear  to provide you with cutting-edge insights, trends, and innovations in the dynamicrealm of business.</p>
        </div>
        <Image className={style.quote} src="/assets/images/quoteRight.svg" alt="" width={31} height={31} />
        <LearnMoreBtn text={"learn more"} url={'#'} color={'blue'} />
      </motion.div>
    </div>
  )
}

export default Ceo
