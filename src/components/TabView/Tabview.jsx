"use client"

import React, { useState } from 'react'
import style from './tabview.module.css'
import { data } from "./servicesData"
import { Card } from "../Card/Card"
import { motion } from "framer-motion"

const Tabview = () => {
    const [toggleState, setToggleState] = useState(1)

    const handleTab = (e, index) => {
        setToggleState(index)
        console.log(index, e)


    }
  return (
    <motion.div
    initial={{ x: -200, opacity: 0 }} // Initial state (offscreen and hidden)
    whileInView={{ x: 0, opacity: 1 }} // Target state when in view
    transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
    viewport={{once: true, amount: 0.2 }} // Trigger animation once, when 20% of the box is in view 
    
    className={style.tabsWrapper}>
    <div className={style.tabs}>
      <div onClick={(e)=> handleTab(e, 1)} className={toggleState === 1 ? `${style.tab} ${style.active}`: `${style.tab}`}>Services Offered</div>
      <div onClick={(e)=> handleTab(e, 2)} className={toggleState === 2 ? `${style.tab} ${style.active}`: `${style.tab}`}>Digital / Internet Marketing</div>
    </div>
    <div className={toggleState===1 ? `${style.content} ${style.contentVisible}` : `${style.content}`}>
        {data.map((item, index)=> (
            <Card data={item} index={index} key={index}/>
        ))}
    </div>
    <div className={toggleState===2 ? `${style.content} ${style.contentVisible}` : `${style.content}`}>
    {data.map((item, index)=> (
            <Card data={item} index={index} key={index}/>
        ))}
    </div>
    </motion.div>
  )
}

export default Tabview
