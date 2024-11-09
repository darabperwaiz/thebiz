import React from 'react'
import style from './smallCard.module.css'
import Image from "next/image"
import { motion } from "framer-motion"

const SmallCard = ({key, title, des, icon}) => {
  return (
    <motion.div
    key={key}
    initial={{opacity: 0, x: -300}}
    whileInView={{opacity: 1, x: 0}}
    exit={{opacity: 0, x: 300}}
    transition={{duration: 0.5}}
    className={style.card}>
      <motion.div
      initial={{rotateZ: 180}}
      whileInView={{rotateZ: 0}}
      transition={{duration: 0.5}}
      exit={{rotateZ: 180}}
      className={style.top}>
        <Image src={`/assets/images/corevalue/${icon}`} alt="" width={100} height={100}/>
      </motion.div>
      <div className={style.bottom}>
      <p className={style.title}>{title}</p>
      <p className={style.description}>{des}</p>
      </div>
    </motion.div>
  )
}

export default SmallCard
