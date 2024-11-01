import React from 'react'
import style from './smallCard.module.css'
import Image from "next/image"

const SmallCard = ({title, des, icon}) => {
  return (
    <div className={style.card}>
      <div className={style.top}>
        <Image src={`/assets/images/corevalue/${icon}`} alt="" width={100} height={100}/>
      </div>
      <div className={style.bottom}>
      <p className={style.title}>{title}</p>
      <p className={style.description}>{des}</p>
      </div>
    </div>
  )
}

export default SmallCard
