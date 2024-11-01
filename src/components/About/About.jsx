import React from 'react'
import style from './about.module.css'
import Image from "next/image"
import { Button } from "../Button/Button"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className={style.about}>
      <p className={style.title}>About <span>Us</span></p>
      <div className={style.bottom}>
        <motion.div
        initial={{ x: -200, opacity: 0 }} // Initial state (offscreen and hidden)
        whileInView={{ x: 0, opacity: 1 }} // Target state when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
        viewport={{once: true, amount: 0.4 }} // Trigger animation once, when 20% of the box is in vie        
        className={style.left}>
            <Image src="/assets/images/about-section.webp" alt="" width={500} height={600}/>
            <div className={style.hoverImg}>
            <Image src="/assets/images/logo.webp" width={100} height={100} alt="" />
            </div>
        </motion.div>
        <motion.div
        initial={{ x: 200, opacity: 0 }} // Initial state (offscreen and hidden)
        whileInView={{ x: 0, opacity: 1 }} // Target state when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
        viewport={{once: true, amount: 0.2 }} // Trigger animation once, when 20% of the box is in view
        className={style.right}>
        <Image src="/assets/images/quoteLeft.svg" width={40} height={40} alt="" />
            <p className={style.description}>The Biz Technology, our mission is clear: to provide you with cutting-edge insights, trends, and innovations in the dynamicrealm of business and technology. Whether you&apos;re an experienced entrepreneur, aburgeoning start-up, or simply passionate about tech, innovations in the dynamicrealm of business and technology. our platform is meticulously crafted to equip you with indispensable knowledge.our platform is meticulously crafted to equip you with indispensable knowledge.</p>
            <div className={style.rightBottom}>
                <Button text={"Know More"} />
                <Image src="/assets/images/quoteRight.svg" width={40} height={40} alt="" />
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
