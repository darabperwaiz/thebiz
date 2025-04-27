import React from 'react'
import style from './smallCard.module.css'
import Image from "next/image"
import { motion } from "framer-motion"

const SmallCard = ({index, title, des, icon}) => {
  return (
    <motion.div
    key={index}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      easings: ['easeIn', 'easeOut'], // smoother easing
    }}
    viewport={{ amount: 0.6, once: true }}
    className={style.card}>
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        easings: ['easeIn', 'easeOut'], // smoother easing
      }}
      viewport={{ amount: 0.6, once: true }}
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
