'use client';
import React from 'react'
import style from './benefits.module.css'
import { motion } from "framer-motion"

const Benefits = ({children, tag, title, des}) => {
  return (
    <div className={style.benefits}>
      <motion.div className={style.left}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        easings: ['easeIn', 'easeOut'], // smoother easing
      }}
      viewport={{ amount: 0.5, once: true }}
      >
        <div className={style.leftTop}>
            <p>{tag}</p>
            <p>{title}</p>
        </div>
        <p className={style.des}>
          {des}
        </p>
      </motion.div>
      {children}
    </div>
  )
}

export default Benefits
