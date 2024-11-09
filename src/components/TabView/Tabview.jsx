"use client"

import React, { useState } from 'react'
import style from './tabview.module.css'
import { data } from "./servicesData"
import { Card } from "../Card/Card"
import { AnimatePresence, motion } from "framer-motion"

const Tabview = () => {
    const [toggleState, setToggleState] = useState(1)

    const handleTab = (e, index) => {
        setToggleState(index)
        console.log(index, e)


    }
  return (
    <div className={style.tabsWrapper}>
    <div className={style.tabs}>
      <div onClick={(e)=> handleTab(e, 1)} className={toggleState === 1 ? `${style.tab} ${style.active}`: `${style.tab}`}>Services Offered {toggleState === 1 ? (<motion.div className={style.underline} layoutId={style.underline}/>) : null}</div>
      <div onClick={(e)=> handleTab(e, 2)} className={toggleState === 2 ? `${style.tab} ${style.active}`: `${style.tab}`}>Digital / Internet Marketing {toggleState === 2 ? (<motion.div className={style.underline} layoutId={style.underline}/>) : null}</div>
    </div>
    <AnimatePresence mode="wait">
    {toggleState === 1 && (
      <motion.div
      key="tab1"
      initial={{opacity: 0, x: 300}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: 300}}
      transition={{duration: 0.5}}
      // className={toggleState===1 ? `${style.content} ${style.contentVisible}` : `${style.content}`}
      className={style.content}
      >
          {data.map((item, index)=> (
              <Card data={item} index={index} key={index}/>
          ))}
      </motion.div>
    )}
    {toggleState === 2 && (
      <motion.div
      key="tab2"
      initial={{opacity: 0, x: -300}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: -300}}
      transition={{duration: 0.5}}
      // className={toggleState===1 ? `${style.content} ${style.contentVisible}` : `${style.content}`}
      className={style.content}
      >
          {data.map((item, index)=> (
              <Card data={item} index={index} key={index}/>
          ))}
      </motion.div>
    )}
    </AnimatePresence>
    </div>
  )
}

export default Tabview
