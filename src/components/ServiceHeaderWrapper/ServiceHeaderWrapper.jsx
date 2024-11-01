import React from 'react'
import style from './serviceHeader.module.css'
import PrimaryButton from "../primaryButton/PrimaryButton"
import Image from "next/image"

const ServiceHeaderWrapper = ({children, Head, Des, url}) => {
  return (
    <div className={style.flex}>
      <div className={style.left}>
        <div className={style.leftTop}>
        <p className={style.title}>{Head}</p>
        <p className={style.des}>{Des}</p>
        </div>
        <div className={style.leftMid}>
            <p>Popular On:</p>
            <div className={style.links}>
              <div className={style.linksFlex}>
                <Image src="/assets/images/tick.svg" alt="" width={10}  height={10}/>
                <p>Ecom. SEO</p>
              </div>
              <div className={style.linksFlex}>
                <Image src="/assets/images/tick.svg" alt="" width={10} height={10}/>
                <p>Local SEO</p>
              </div>
              <div className={style.linksFlex}>
                <Image src="/assets/images/tick.svg" alt="" width={10} height={10}/>
                <p>National SEO</p>
              </div>
            </div>
        </div>
        <PrimaryButton text={`Let's talk with me`} />
      </div>
      {children}
    </div>
  )
}

export default ServiceHeaderWrapper
