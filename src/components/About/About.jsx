import React from 'react'
import style from './about.module.css'
import Image from "next/image"
import { Button } from "../Button/Button"
import { motion } from "framer-motion"

const About = () => {
  return (

    <div className={style.about}>
      <motion.p
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        easings: ['easeIn', 'easeOut'], // smoother easing
      }}
      viewport={{ amount: 0.5 }}
      className={style.title}>About <span>Us</span></motion.p>
      <motion.div className={style.bottom}>
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          easings: ['easeIn', 'easeOut'], // smoother easing
        }}
        viewport={{ amount: 0.3 }}
        className={style.left}>
            <Image src="/assets/images/about-section.webp" alt="" width={500} height={600}/>
            <div className={style.hoverImg}>
            <Image src="/assets/images/logo.png" width={100} height={100} alt="" />
            </div>
        </motion.div>
        <motion.div
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{
           duration: 0.5,
           easings: ['easeIn', 'easeOut'], // smoother easing
         }}
         viewport={{ amount: 0.3 }}
        className={style.right}>
        <Image src="/assets/images/quoteLeft.svg" width={40} height={40} alt="" />
            <p className={style.description}>Appearist technology LLC, our mission is clear: to provide you with cutting-edge insights, trends, and innovations in the dynamicrealm of business and technology. Whether you&apos;re an experienced entrepreneur, aburgeoning start-up, or simply passionate about tech, innovations in the dynamicrealm of business and technology. our platform is meticulously crafted to equip you with indispensable knowledge.our platform is meticulously crafted to equip you with indispensable knowledge.</p>
            <div className={style.rightBottom}>
                <Button text={"Know More"} />
                <Image src="/assets/images/quoteRight.svg" width={40} height={40} alt="" />
            </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About
