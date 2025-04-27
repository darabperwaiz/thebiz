import React from 'react'
import style from './linkbheader.module.css'
import Image from "next/image"
import PrimaryButton from "../primaryButton/PrimaryButton"

const LinkBHeader = ({title, description, pointer}) => {
  return (
    <section className={style.LinkBHeader}>
        <div className="container">
        <div className={style.left}>
        <div className={style.leftTop}>
        <p className={style.title}>{title}</p>
        <p className={style.des}>{description}</p>
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
        </div>
        {/* <div className={style.cornerImage}>
            <Image src="/assets/images/corner.svg" alt="" width={500} height={500}/>
            <div className={style.rectangle}></div>
        </div> */}
    </section>
  )
}

export default LinkBHeader
