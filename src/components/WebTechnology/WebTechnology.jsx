"use client"

import React, { useState } from 'react'
import style from './webtechnology.module.css'
import { webTechData } from "./webTechData"
import { LearnMoreBtn } from "../learnMoreBtn/LearnMoreBtn"
import Image from "next/image"
import { motion } from "framer-motion"

const WebTechnology = () => {
    const [singleData, setSingleData] = useState(webTechData[1])
    const [isActive, setIsActive] = useState(false)

    const handleClick = (item, index) => {
        setSingleData(item)
    }

  return (
    <motion.div
    initial={{ x: 200, opacity: 0 }} // Initial state (offscreen and hidden)
    whileInView={{ x: 0, opacity: 1 }} // Target state when in view
    transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
    viewport={{once: true, amount: 0.2 }} // Trigger animation once, when 20% of the box is in view 
    
    className={style.technology}>
      <div className={style.top}>
        <p><b>Web</b> Technology</p>
      </div>
      <div className={style.bottom}>
        <div className={style.left}>
            <ul className={style.items}>
                {webTechData.map((item, index)=> (
                    <li className={item.id === singleData.id ? `${style.item} ${style.active}` : style.item} key={index} onClick={()=> handleClick(item, index)} >{item.tag}</li>
                ))}
            </ul>
        </div>
        <motion.div
        initial={{ y: 200, opacity: 0 }} // Initial state (offscreen and hidden)
        animate={{ y: 0, opacity: 1 }} // Target state when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
        // viewport={{ amount: 0.4 }} // Trigger animation once, when 20% of the box is in view 
        className={style.right}>
             <Image src={`/assets/images/brandIcons/${singleData.src}`} width={100} height={100} alt="new" loading="lazy"/>
             <div>
             <p>{singleData.description}</p>   
            <LearnMoreBtn text={"learn more"} url={"#"} color={"orange"}/>
             </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default WebTechnology
