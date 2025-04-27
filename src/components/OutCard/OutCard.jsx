'use client';
import React from 'react'
import style from './outcard.module.css'
import Image from "next/image"
import { motion } from "framer-motion";

function OutCard({title, description}) {
  return (
    <motion.div className={style.outcard}
    initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.7,
      easings: ['easeIn', 'easeOut'], // smoother easing
    }}
    viewport={{ amount: 0.5, once: true }}
    >
      <Image src="/assets/images/trophy.svg" alt="" width={60} height={60}/>
      <div className={style.bottom}>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </motion.div>
  )
}

export default OutCard
