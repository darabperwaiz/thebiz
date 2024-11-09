// import React, { useMemo, useState } from 'react'
import style from './ourportfolio.module.css'
import PrimaryButton from "../primaryButton/PrimaryButton"
import Porfolios from "../porfolios/Porfolios"
import { AnimatePresence, motion } from "framer-motion"


const OurPortfolio = () => {
  
  return (
    <AnimatePresence>
    <div className={style.OurPortfolio}>
      <div className={style.top}>
        <div>
            <motion.p
            initial={{opacity: 0, x: 200}}
            whileInView={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -200}}
            transition={{duration: 0.5}}
            className={style.head}>Our <span>Portfolio</span></motion.p>
        </div>
      </div>
      <Porfolios />
      <div className={style.bottom}>
        <PrimaryButton text={"View our all projects"}/>
      </div>
    </div>
    </AnimatePresence>
  )
}

export default OurPortfolio

