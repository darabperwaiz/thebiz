"use client"

import React from 'react'
import style from './ceo.module.css'
import Image from "next/image"
import { LearnMoreBtn } from "../learnMoreBtn/LearnMoreBtn"
import { AnimatePresence, motion } from "framer-motion"
import ScrollAnimationBox from "../ScrollAnimationBox"


const Ceo = () => {
  return (
    <ScrollAnimationBox delay={0.3}>
    <div className={style.ceo}>
      <div className={style.left}>
        <div
        
        className={style.curve}></div>
        <div
             
        className={style.ceoImage}>
            <Image src="/assets/images/ceo_image.webp" width={210} height={300} alt="" />
        </div>
        <div className={style.leftLeft}>
            <div className={style.title}>
                <p
                
                >KAMRAN</p>
                <p
               
                >ASHRAF</p>
            </div>
            <p
           
            >Founder and CEO</p>
        </div>
      </div>
      <div className={style.right}>
        <p
        
        >A Message From CEO</p>
        <div 
        
        className={style.mid}>
            <Image className={style.quote} src="/assets/images/quoteLeft.svg" width={31} height={31} alt="" />
            <p>Balancing daily tasks and family responsibilities with care and intention should always remain a top priority, reflecting our commitment to a thoughtful and meaningful approach.</p>
        </div>
        <Image className={style.quote} src="/assets/images/quoteRight.svg" alt="" width={31} height={31} />
        <LearnMoreBtn text={"learn more"} url={'#'} color={'blue'} />
      </div>
    </div>
    </ScrollAnimationBox>
  )
}

export default Ceo
