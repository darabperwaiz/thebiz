import React from 'react'
import style from './logo.module.css'
import Image from "next/image"

const Logo = () => {
  return (
    <div className={style.logo}>
      <Image src="/assets/images/logo.png" width={400} height={400} alt="" quality={100} priority unoptimized/>
    </div>
  )
}

export default Logo
