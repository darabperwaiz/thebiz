"use client"

import React, { useState } from 'react'
import style from './webtechnology.module.css'
import { webTechData } from "./webTechData"
import { LearnMoreBtn } from "../learnMoreBtn/LearnMoreBtn"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"


const WebTechnology = () => {
    const [singleData, setSingleData] = useState(webTechData[1])
    const [isActive, setIsActive] = useState(false)

    const handleClick = (item, index) => {
        setSingleData(item);
    }

  return (
    <AnimatePresence mode="wait">
    <div className={style.technology}>
      <div className={style.top}>
        <motion.p
        initial={{opacity: 0, x: 100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{ duration: 0.9}}
        
        ><b>Web</b> Technology</motion.p>
      </div>
      <div className={style.bottom}>
        <div className={style.left}>
            <motion.ul className={style.items}>
                {webTechData.map((item, index)=> (
                    <motion.li
                    key={index}
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    exit={{opacity:0, x:100}}
                    transition={{duration: 0.9}}
                    viewport={{once: true}}
                    className={item.id === singleData.id ? `${style.item} ${style.active}` : style.item} onClick={()=> handleClick(item, index)} >{item.tag}</motion.li>
                ))}
            </motion.ul>
        </div>
        <motion.div 
        key={singleData.id}
        initial={{ y: 50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: -60, opacity:0}}
        transition={{duration: 0.9}}
        className={style.right}>
             <Image src={`/assets/images/brandIcons/${singleData.src}`} width={100} height={100} alt="new" loading="lazy"/>
             <div>
             <p>{singleData.description}</p>   
            <LearnMoreBtn text={"learn more"} url={"#"} color={"orange"}/>
             </div>
        </motion.div>
      </div>
    </div>
    </AnimatePresence>
  )
}

export default WebTechnology
