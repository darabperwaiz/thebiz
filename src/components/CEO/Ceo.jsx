"use client"

import React from 'react'
import style from './ceo.module.css'
import Image from "next/image"
import { LearnMoreBtn } from "../learnMoreBtn/LearnMoreBtn"


const Ceo = () => {
  return (
    <div className={style.ceo}>
      <div className={style.left}>
        <div className={style.curve}></div>
        <div className={style.ceoImage}>
            <Image src="/assets/images/ceo_image.webp" width={210} height={300} alt="" />
        </div>
        <div className={style.leftLeft}>
            <div className={style.title}>
                <p>KAMRAN</p>
                <p>ASHRAF</p>
            </div>
            <p>Founder and CEO</p>
        </div>
      </div>
      <div className={style.right}>
        <p>A Message From CEO</p>
        <div className={style.mid}>
            <Image className={style.quote} src="/assets/images/quoteLeft.svg" width={31} height={31} alt="" />
            <p>The Biz Technology, our mission is clear  to provide you with cutting-edge insights, trends, and innovations in the dynamicrealm of business.</p>
        </div>
        <Image className={style.quote} src="/assets/images/quoteRight.svg" alt="" width={31} height={31} />
        <LearnMoreBtn text={"learn more"} url={'#'} color={'blue'} />
      </div>
    </div>
  )
}

export default Ceo
