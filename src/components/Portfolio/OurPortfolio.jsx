// import React, { useMemo, useState } from 'react'
import style from './ourportfolio.module.css'
import PrimaryButton from "../primaryButton/PrimaryButton"
import Porfolios from "../porfolios/Porfolios"
import { AnimatePresence, motion } from "framer-motion"


const OurPortfolio = () => {
  
  return (
    <div className={style.OurPortfolio}>
      <div className={style.top}>
        <div>
            <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              easings: ['easeIn', 'easeOut'], // smoother easing
            }}
            viewport={{ once: true, amount: 0.3 }}
            className={style.head}>Our <span>Portfolio</span></motion.p>
        </div>
      </div>
      <Porfolios />
      <div className={style.bottom}>
        <PrimaryButton text={"View our all projects"}/>
      </div>
    </div>
  )
}

export default OurPortfolio

