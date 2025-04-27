"use client"

import React, { useState } from 'react'
import style from './tabview.module.css'
import { servicesData } from "./servicesData"
import { digitalData } from "./digitalData"
import { Card } from "../Card/Card"
import { AnimatePresence, motion } from "framer-motion"
import ScrollAnimationBox from "../ScrollAnimationBox"

const Tabview = () => {
    const [toggleState, setToggleState] = useState(1)

    const handleTab = (e, index) => {
        setToggleState(index)
        console.log(index, e)


    }
  return (
    <ScrollAnimationBox>
    <div className={style.tabsWrapper}>
    <div className={style.tabs}>
      <div onClick={(e)=> handleTab(e, 1)} className={toggleState === 1 ? `${style.tab} ${style.active}`: `${style.tab}`}>Design Services {toggleState === 1 ? (<motion.div className={style.underline} layoutId={style.underline}/>) : null}</div>
      <div onClick={(e)=> handleTab(e, 2)} className={toggleState === 2 ? `${style.tab} ${style.active}`: `${style.tab}`}>Digital Marketing {toggleState === 2 ? (<motion.div className={style.underline} layoutId={style.underline}/>) : null}</div>
    </div>
    <AnimatePresence mode="wait">
    {toggleState === 1 && (
      <motion.div
      key="tab1"
      // initial={{opacity: 0, x: 100}}
      // whileInView={{opacity: 1, x: 0}}
      // exit={{opacity: 0, x: 100}}
      // transition={{duration: 0.5}}
      // className={toggleState===1 ? `${style.content} ${style.contentVisible}` : `${style.content}`}
      className={style.content}
      >
          {servicesData.map((item, index)=> (
              <Card data={item} index={index} key={index}/>
          ))}
      </motion.div>
    )}
    {toggleState === 2 && (
      <motion.div
      key="tab2"
      // initial={{opacity: 0, x: -100}}
      // whileInView={{opacity: 1, x: 0}}
      // exit={{opacity: 0, x: -100}}
      // transition={{duration: 0.5}}
      // className={toggleState===1 ? `${style.content} ${style.contentVisible}` : `${style.content}`}
      className={style.content}
      >
          {digitalData.map((item, index)=> (
              <Card data={item} index={index} key={index}/>
          ))}
      </motion.div>
    )}
    </AnimatePresence>
    </div>
    </ScrollAnimationBox>
  )
}

export default Tabview
