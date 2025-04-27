import React from 'react'
import style from './serviceHeader.module.css'
import PrimaryButton from "../primaryButton/PrimaryButton"
import Image from "next/image"
import Motion from "../Motion/Motion"

const ServiceHeaderWrapper = ({children, Head, Des, pointer, url}) => {
  return (
    <Motion>
    <div className={style.flex}>
      <div className={style.left}>
        <div className={style.leftTop}>
        <p className={style.title}>{Head}</p>
        <p className={style.des}>{Des}</p>
        </div>
        <div className={style.leftMid}>
            <p>Popular On:</p>
            <div className={style.links}>
              {pointer.map((point, index)=> (
                <div className={style.linksFlex} key={index}>
                <Image src="/assets/images/tick.svg" alt="" width={10}  height={10}/>
                <p>{point}</p>
              </div>
              ))}
            </div>
        </div>
        <PrimaryButton text={`Let's talk with me`} />
      </div>
      {children}
    </div>
    </Motion>
  )
}

export default ServiceHeaderWrapper
