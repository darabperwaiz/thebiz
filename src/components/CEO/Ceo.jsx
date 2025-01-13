"use client"

import React from 'react'
import style from './ceo.module.css'
import Image from "next/image"
import { LearnMoreBtn } from "../learnMoreBtn/LearnMoreBtn"
import { AnimatePresence, motion } from "framer-motion"


const Ceo = () => {
  return (
    <AnimatePresence>
    <div className={style.ceo}>
      <div className={style.left}>
        <motion.div
        initial={{opacity: 0, rotate: 20}}
        whileInView={{opacity: 1, rotate: 0}}
        exit={{opacity: 0, rotate: 20}}
        transition={{duration: 0.9}}
        className={style.curve}></motion.div>
        <motion.div
        initial={{opacity: 0, scale: 0.9}}
        whileInView={{opacity: 1, scale: 1}}
        exit={{opacity: 0, scale: 0.9}}
        transition={{duration: 0.9}}        
        className={style.ceoImage}>
            <Image src="/assets/images/ceo_image.webp" width={210} height={300} alt="" />
        </motion.div>
        <div className={style.leftLeft}>
            <div className={style.title}>
                <motion.p
                initial={{opacity: 0, x: -30}}
                whileInView={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -30}}
                transition={{duration: 0.9}}
                >KAMRAN</motion.p>
                <motion.p
                initial={{opacity: 0, x: -30}}
                whileInView={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -30}}
                transition={{duration: 0.9}}
                >ASHRAF</motion.p>
            </div>
            <motion.p
            initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 100}}
            transition={{duration: 0.9}}
            >Founder and CEO</motion.p>
        </div>
      </div>
      <div className={style.right}>
        <motion.p
        initial={{opacity: 0, x: 50}}
        whileInView={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: 50}}
        transition={{duration: 0.9}}
        >A Message From CEO</motion.p>
        <motion.div 
        initial={{opacity: 0, x: 50}}
        whileInView={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: 50}}
        transition={{duration: 0.9}}
        className={style.mid}>
            <Image className={style.quote} src="/assets/images/quoteLeft.svg" width={31} height={31} alt="" />
            <p>Balancing daily tasks and family responsibilities with care and intention should always remain a top priority, reflecting our commitment to a thoughtful and meaningful approach.</p>
        </motion.div>
        <Image className={style.quote} src="/assets/images/quoteRight.svg" alt="" width={31} height={31} />
        <LearnMoreBtn text={"learn more"} url={'#'} color={'blue'} />
      </div>
    </div>
    </AnimatePresence>
  )
}

export default Ceo
