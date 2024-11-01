import React from 'react'
import style from './outcard.module.css'
import Image from "next/image"

function OutCard({title, description}) {
  return (
    <div className={style.outcard}>
      <Image src="/assets/images/trophy.svg" alt="" width={60} height={60}/>
      <div className={style.bottom}>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default OutCard
