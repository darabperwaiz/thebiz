"use client"

import React, { useState } from 'react'
import style from './webtechnology.module.css'
import { webTechData } from "./webTechData"
import { LearnMoreBtn } from "../learnMoreBtn/LearnMoreBtn"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import ScrollAnimationBox from "../ScrollAnimationBox"


const WebTechnology = () => {
    const [singleData, setSingleData] = useState(webTechData[1])
    const [isActive, setIsActive] = useState(false)

    const handleClick = (item, index) => {
        setSingleData(item);
    }

  return (
    <>
    <div className={style.technology}>
    <ScrollAnimationBox>
      <div className={style.top}>
        <p><b>Web</b> Technology</p>
      </div>
      </ScrollAnimationBox>
      <ScrollAnimationBox>
      <div className={style.bottom}>
        <div className={style.left}>
            <ul className={style.items}>
                {webTechData.map((item, index)=> (
                    <li
                    key={index}
                    
                    className={item.id === singleData.id ? `${style.item} ${style.active}` : style.item} onClick={()=> handleClick(item, index)} >{item.tag}</li>
                ))}
            </ul>
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
      </ScrollAnimationBox>
    </div>
    </>
  )
}

export default WebTechnology
